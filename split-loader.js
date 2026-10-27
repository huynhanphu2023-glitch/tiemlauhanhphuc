/* Split only the two large engine resources for browser uploads. */
(function () {
  'use strict';
  const files = {"index.pck":{"bytes":86782724,"mime":"application/octet-stream","parts":[{"file":"parts/index.pck.01.bin","bytes":4900000,"sha256":"fc21b5df53bd172b1df92a89c6788cc62221b77197ed47973a14563ace2e2e0f"},{"file":"parts/index.pck.02.bin","bytes":4900000,"sha256":"360206d34a0eb8dc48187ab3651ba034f5debd7cdb4753d529c1cf156df29e6a"},{"file":"parts/index.pck.03.bin","bytes":4900000,"sha256":"169f8947664727a8284ccd9ca6db571dbf214e168fddc265a0aeca6918946471"},{"file":"parts/index.pck.04.bin","bytes":4900000,"sha256":"735b515bcafbbc9e57eabcfe09850f54327dd85ae4bcb5d7422b21cfa1fc4797"},{"file":"parts/index.pck.05.bin","bytes":4900000,"sha256":"78dbbc8b0cf930c20d5259d17b4ce2c2e5a656b78a49eb90ccc60d0a1815de0e"},{"file":"parts/index.pck.06.bin","bytes":4900000,"sha256":"cd4c0c50552712fefcab75be536528f6f5c795f1321f8123c3c2e94f810c4aa5"},{"file":"parts/index.pck.07.bin","bytes":4900000,"sha256":"a06af15e30e109816e386eca0d87f332ca0e2b30519bd8a26a72a97d00ec36f6"},{"file":"parts/index.pck.08.bin","bytes":4900000,"sha256":"e475668aa2dde71b0217eb2b1664271655345bc3e0ef24a141c02bd5fb275dc1"},{"file":"parts/index.pck.09.bin","bytes":4900000,"sha256":"19633c18baa37722cf7c2f4570f4d124f89c2f484960b2279dedd23fcbdacd7c"},{"file":"parts/index.pck.10.bin","bytes":4900000,"sha256":"d8438cc794af5d478ec900dfd62ab4e13b07582f4bb99ab8194b44b23ef427e3"},{"file":"parts/index.pck.11.bin","bytes":4900000,"sha256":"16dfadc1b35866f4714f801f7042fae9b22b3857bc490c4185f23c5e2cf2210b"},{"file":"parts/index.pck.12.bin","bytes":4900000,"sha256":"77861969f77b26f9e4ab6788f40870588b208d18ec0a8fdf727fe45108c539ba"},{"file":"parts/index.pck.13.bin","bytes":4900000,"sha256":"a647ffa5e5b265516a5380ed3164dce5acf83b0b5d177707af749cf4b8efe069"},{"file":"parts/index.pck.14.bin","bytes":4900000,"sha256":"bc1549b5f435555d9ed5983ffffa87d6f7fb2aace41ba6077d3d7d3ca92ee4ba"},{"file":"parts/index.pck.15.bin","bytes":4900000,"sha256":"9b3b6db38775cba9934df7e19c6436f6c0158a4a8c2b2083458cb7ca54adf1d9"},{"file":"parts/index.pck.16.bin","bytes":4900000,"sha256":"4cc8c23c99aa421b8310428b8152bf76d9a14efd6b60109c0f8ac4d460af977f"},{"file":"parts/index.pck.17.bin","bytes":4900000,"sha256":"660dd68c2db3bde9ff190bc02fba1c750271bff4f8b9d58d22eabc4af5835e63"},{"file":"parts/index.pck.18.bin","bytes":3482724,"sha256":"1a529f6a1520151feb16d74ffc534bb67486c9818cd48f53f55b0d76cecac655"}],"sha256":"19104bbcc9a9c9219b5f15eef67fa656fc594a1efb3118f8cc2d8ebd436f1b62"},"index.wasm":{"bytes":38034280,"mime":"application/wasm","parts":[{"file":"parts/index.wasm.01.bin","bytes":4900000,"sha256":"d55d9c3f7cae25b0a95a682febb6dbd1056dce8b784ecbbf95f59bf634dff945"},{"file":"parts/index.wasm.02.bin","bytes":4900000,"sha256":"4eb69c624f57af1a77dc30bf7c3a77c7f4826350c0364d80700aa972c29249e0"},{"file":"parts/index.wasm.03.bin","bytes":4900000,"sha256":"504a42d57352611af4564062cb984394133b1d20915314487bc5d36da823c1fa"},{"file":"parts/index.wasm.04.bin","bytes":4900000,"sha256":"f60328af25858820bd406b62140a17aac58b7e43859ceade749f16cdff302175"},{"file":"parts/index.wasm.05.bin","bytes":4900000,"sha256":"0c82e3f7b33a60049844b24b21fc9951bccb96c9c919e0b6fd768d4b1149de20"},{"file":"parts/index.wasm.06.bin","bytes":4900000,"sha256":"beecb7fc930fd1e6d3b8bf76b5050a28d8888f67dd04dd57b4c5e8bd7a03c315"},{"file":"parts/index.wasm.07.bin","bytes":4900000,"sha256":"d7b87ba300a583f33cf6ce76c06ac78ef2d06de7049b613bdfa21ec7008526a6"},{"file":"parts/index.wasm.08.bin","bytes":3734280,"sha256":"09d6b91f2c189a64a1fe9baf74191279165c2da07a30d35052973e46b9541bf1"}],"sha256":"6498359ba889796a0d95a2f71113ac184badc0f2d84cf28f4103c7e399d2d547"}};
  const base = new URL('.', document.currentScript.src);
  const originalFetch = globalThis.fetch.bind(globalThis);
  globalThis.fetch = async function (input, init) {
    const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, document.baseURI);
    const key = Object.keys(files).find(name => url.href === new URL(name, base).href);
    if (!key) return originalFetch(input, init);
    const meta = files[key];
    let reader = null, cancelled = false;
    const controller = new AbortController();
    const signal = init?.signal || (typeof Request !== 'undefined' && input instanceof Request ? input.signal : null);
    const abort = () => controller.abort(signal?.reason);
    if (signal) {
      if (signal.aborted) abort();
      else signal.addEventListener('abort', abort, { once: true });
    }
    const stream = new ReadableStream({
      async start(output) {
        try {
          for (const part of meta.parts) {
            if (cancelled) return;
            let block = null;
            for (let attempt = 0; attempt < 4; attempt++) {
              if (controller.signal.aborted) throw new Error('Đã hủy tải game.');
              const local = new AbortController();
              const forwardAbort = () => local.abort();
              controller.signal.addEventListener('abort', forwardAbort, { once: true });
              const timeout = setTimeout(() => local.abort(), 45000);
              try {
                const partURL = new URL(part.file, base);
                partURL.searchParams.set('v', part.sha256.slice(0,16));
                if (attempt) partURL.searchParams.set('retry', String(attempt));
                const response = await originalFetch(partURL, { signal: local.signal });
                if (!response.ok) throw new Error('HTTP ' + response.status);
                const bytes = new Uint8Array(await response.arrayBuffer());
                if (bytes.byteLength !== part.bytes) throw new Error('Thiếu dữ liệu');
                if (globalThis.crypto?.subtle) {
                  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
                  const hash = Array.from(digest, v => v.toString(16).padStart(2,'0')).join('');
                  if (hash !== part.sha256) throw new Error('Dữ liệu không đúng phiên bản');
                }
                block = bytes;
                break;
              } catch (error) {
                if (attempt === 3 || controller.signal.aborted) throw new Error('Không tải được ' + part.file + '. Hãy tải lại trang. ' + error.message);
              } finally {
                clearTimeout(timeout);
                controller.signal.removeEventListener('abort', forwardAbort);
              }
            }
            if (cancelled) return;
            output.enqueue(block);
          }
          output.close();
        } catch (error) { if (!cancelled) output.error(error); }
        finally { if (signal) signal.removeEventListener('abort', abort); }
      },
      cancel() { cancelled = true; controller.abort(); if (reader) return reader.cancel(); }
    });
    return new Response(stream, { status: 200, headers: {
      'Content-Type': meta.mime, 'Content-Length': String(meta.bytes)
    }});
  };
}());
