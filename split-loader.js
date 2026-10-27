/* Split only the two large engine resources for browser uploads. */
(function () {
  'use strict';
  const files = {"index.pck":{"bytes":136793620,"mime":"application/octet-stream","parts":[{"file":"parts/index.pck.01.bin","bytes":4900000,"sha256":"c62c8345a366fc8302ff9118e057e3c42e14bde4e2effcc21c46aee7c4269b0b"},{"file":"parts/index.pck.02.bin","bytes":4900000,"sha256":"2b5edc96348840020b96cf865db149bfa519871e645b858397a59dbaff0e453e"},{"file":"parts/index.pck.03.bin","bytes":4900000,"sha256":"108065ce2ce2d458b997adb6325744d4c0ec3e1e45e9cc88e912eda50b3f9cc6"},{"file":"parts/index.pck.04.bin","bytes":4900000,"sha256":"9a4c2e185ee0723099df8b32c993b6e511a676369fd3024a2edf7527216088b6"},{"file":"parts/index.pck.05.bin","bytes":4900000,"sha256":"bb33ad7bdc0cd7f6cab024f6653fa67e550a20bd50f677fc9cb8095a06e2a8ab"},{"file":"parts/index.pck.06.bin","bytes":4900000,"sha256":"e9d67b47c78fa80e8b49407811fad891badb1784b67eab4a75415d4530027d46"},{"file":"parts/index.pck.07.bin","bytes":4900000,"sha256":"ea550b391231b46ad5028949e7bafcce89d49d15fa9cda54220ca7aff5a7e73e"},{"file":"parts/index.pck.08.bin","bytes":4900000,"sha256":"120345624a8d4b64f81cf8c856e9bd5ec6c1f94f2982f7d9444d74fb444dc21d"},{"file":"parts/index.pck.09.bin","bytes":4900000,"sha256":"962573d5f4c8e7344bc5cb9c6be6c55a8acd7ed29ea40003ecdf8cac401e2929"},{"file":"parts/index.pck.10.bin","bytes":4900000,"sha256":"d8010e8ab1c718c64674b42838e9645620e46d458edf9b1237a67267ba631c54"},{"file":"parts/index.pck.11.bin","bytes":4900000,"sha256":"a3dd1c0d66046675ff34bd7ace5d89928efb6499826a9af4c4368b76c9b6e5d5"},{"file":"parts/index.pck.12.bin","bytes":4900000,"sha256":"4a3d71b9351b6ddb9c5f46f4ef07fc411cc3e349223372718cf76a87f2762532"},{"file":"parts/index.pck.13.bin","bytes":4900000,"sha256":"01a38b78d76d4b709a56b2ca4cda765b1412f714426b5146e6dffde529fd92c0"},{"file":"parts/index.pck.14.bin","bytes":4900000,"sha256":"9fd413e17ab48ab130d0aae3b09bc7dab00a97a7d507fc4154c7f3c158e3945e"},{"file":"parts/index.pck.15.bin","bytes":4900000,"sha256":"3790c36b3697a8b75c189f8d972aa64a9a06f4d06f603d923e266b31fe4758d3"},{"file":"parts/index.pck.16.bin","bytes":4900000,"sha256":"1578c405fc4252ea792733fe8331d80f37c820458693965a207877199bc7c808"},{"file":"parts/index.pck.17.bin","bytes":4900000,"sha256":"348ce2b4c62f5c48e91471be0c4156501c9bd314d096a6d70cec339241d6084f"},{"file":"parts/index.pck.18.bin","bytes":4900000,"sha256":"41120d55180e53be14b0e0cedf0cb81cedf53d1111346043ecea2200d91d49ea"},{"file":"parts/index.pck.19.bin","bytes":4900000,"sha256":"ed18772756d42fa35232874c33f9bb2038814cae687c349e834ac269cdd2ffc1"},{"file":"parts/index.pck.20.bin","bytes":4900000,"sha256":"1dc8dbf885e048ecc93458b0e87c3a81b21399e15c91fa24cde4a0d346ca314e"},{"file":"parts/index.pck.21.bin","bytes":4900000,"sha256":"c911a485755de55b67aaca0555fce1b0a6ba2b31dd2820db3f34f4083f5e83ea"},{"file":"parts/index.pck.22.bin","bytes":4900000,"sha256":"02f5977b443318683314001cb73e1db5bff8eaeee794306a339634d71b800aa9"},{"file":"parts/index.pck.23.bin","bytes":4900000,"sha256":"525356bd9a0230c2812a1526ee530e272cfecb145dce2256607950942f5c8168"},{"file":"parts/index.pck.24.bin","bytes":4900000,"sha256":"a55e51aa0d33ca0fc47b74ab0aa18ba9bcac67307b3a385b32079884f1efc495"},{"file":"parts/index.pck.25.bin","bytes":4900000,"sha256":"e8e0b22ab3fc672b8cdff4dce174fea66a4bd3bf0c5766ae3b9495fb912e172c"},{"file":"parts/index.pck.26.bin","bytes":4900000,"sha256":"5991c655efd464ae4cebc97c4feef3b8a0cf181372e8403544e787d19893cb1a"},{"file":"parts/index.pck.27.bin","bytes":4900000,"sha256":"291ec0d872bddcfabc0f15967e06a9f514d38551ce69c35e7f6e7a30b13fc988"},{"file":"parts/index.pck.28.bin","bytes":4493620,"sha256":"cb1aaa3ec53394a5886632ba260c60b3590a7c11b28a7e36b21d7a860d461e13"}],"sha256":"0fd349db2c550fcb5175b9b4a10eab7980b5bc5f2bbf7b8a5163c970e91b6230"},"index.wasm":{"bytes":38034280,"mime":"application/wasm","parts":[{"file":"parts/index.wasm.01.bin","bytes":4900000,"sha256":"d55d9c3f7cae25b0a95a682febb6dbd1056dce8b784ecbbf95f59bf634dff945"},{"file":"parts/index.wasm.02.bin","bytes":4900000,"sha256":"4eb69c624f57af1a77dc30bf7c3a77c7f4826350c0364d80700aa972c29249e0"},{"file":"parts/index.wasm.03.bin","bytes":4900000,"sha256":"504a42d57352611af4564062cb984394133b1d20915314487bc5d36da823c1fa"},{"file":"parts/index.wasm.04.bin","bytes":4900000,"sha256":"f60328af25858820bd406b62140a17aac58b7e43859ceade749f16cdff302175"},{"file":"parts/index.wasm.05.bin","bytes":4900000,"sha256":"0c82e3f7b33a60049844b24b21fc9951bccb96c9c919e0b6fd768d4b1149de20"},{"file":"parts/index.wasm.06.bin","bytes":4900000,"sha256":"beecb7fc930fd1e6d3b8bf76b5050a28d8888f67dd04dd57b4c5e8bd7a03c315"},{"file":"parts/index.wasm.07.bin","bytes":4900000,"sha256":"d7b87ba300a583f33cf6ce76c06ac78ef2d06de7049b613bdfa21ec7008526a6"},{"file":"parts/index.wasm.08.bin","bytes":3734280,"sha256":"09d6b91f2c189a64a1fe9baf74191279165c2da07a30d35052973e46b9541bf1"}],"sha256":"6498359ba889796a0d95a2f71113ac184badc0f2d84cf28f4103c7e399d2d547"}};
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
