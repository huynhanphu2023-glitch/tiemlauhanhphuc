/* Split only the two large engine resources for browser uploads. */
(function () {
  'use strict';
  const files = {"index.pck":{"bytes":47285912,"mime":"application/octet-stream","parts":[{"file":"parts/index.pck.01.bin","bytes":4900000,"sha256":"26c026dd55d43e52145495bb22f13957b22e1b6aeb50c1aceffabba69d49b328"},{"file":"parts/index.pck.02.bin","bytes":4900000,"sha256":"b7242e65573e9b9d7c442b223d294da408797a135cd5511f387f0c8dbae5c4dc"},{"file":"parts/index.pck.03.bin","bytes":4900000,"sha256":"f74da2a48ef30cd28a90524456001173494c7a26e3194f382f9f77bd186dcd80"},{"file":"parts/index.pck.04.bin","bytes":4900000,"sha256":"de2c445eb967a5dd43fbd6e75dbdef831e63314002bfe3917dc5e397afa09dbd"},{"file":"parts/index.pck.05.bin","bytes":4900000,"sha256":"35ff43fc9c44cea36b801c765eac7e2e555c9cc7477a12932dfb8a55db52395d"},{"file":"parts/index.pck.06.bin","bytes":4900000,"sha256":"103e09ab9c9859a9e317401f496967334495cb1ea67ff2cf4110a3cea55f6fce"},{"file":"parts/index.pck.07.bin","bytes":4900000,"sha256":"4af0a629369c0792c06d5005f27f78b88ee5dc883ac3447185ad75e90bf28b53"},{"file":"parts/index.pck.08.bin","bytes":4900000,"sha256":"211e06e9f206a420f7d2a58f36edf6f05ec975a47c1cd27c16d10fe608a6beb9"},{"file":"parts/index.pck.09.bin","bytes":4900000,"sha256":"2e3d643b97f7dd85bec4c225b02f5292089a6decb3f4f12f85519bf9d73952fb"},{"file":"parts/index.pck.10.bin","bytes":3185912,"sha256":"d6c0713ebecace417e66fce37642a3f31a274989caccf05de4e9eabdb98d9351"}],"sha256":"cf4f6c6ce805f20e0c1e3e9f501a370c3944201a34d302cfad362a2a8ea78cd3"},"index.wasm":{"bytes":38034280,"mime":"application/wasm","parts":[{"file":"parts/index.wasm.01.bin","bytes":4900000,"sha256":"d55d9c3f7cae25b0a95a682febb6dbd1056dce8b784ecbbf95f59bf634dff945"},{"file":"parts/index.wasm.02.bin","bytes":4900000,"sha256":"4eb69c624f57af1a77dc30bf7c3a77c7f4826350c0364d80700aa972c29249e0"},{"file":"parts/index.wasm.03.bin","bytes":4900000,"sha256":"504a42d57352611af4564062cb984394133b1d20915314487bc5d36da823c1fa"},{"file":"parts/index.wasm.04.bin","bytes":4900000,"sha256":"f60328af25858820bd406b62140a17aac58b7e43859ceade749f16cdff302175"},{"file":"parts/index.wasm.05.bin","bytes":4900000,"sha256":"0c82e3f7b33a60049844b24b21fc9951bccb96c9c919e0b6fd768d4b1149de20"},{"file":"parts/index.wasm.06.bin","bytes":4900000,"sha256":"beecb7fc930fd1e6d3b8bf76b5050a28d8888f67dd04dd57b4c5e8bd7a03c315"},{"file":"parts/index.wasm.07.bin","bytes":4900000,"sha256":"d7b87ba300a583f33cf6ce76c06ac78ef2d06de7049b613bdfa21ec7008526a6"},{"file":"parts/index.wasm.08.bin","bytes":3734280,"sha256":"09d6b91f2c189a64a1fe9baf74191279165c2da07a30d35052973e46b9541bf1"}],"sha256":"6498359ba889796a0d95a2f71113ac184badc0f2d84cf28f4103c7e399d2d547"}};
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
