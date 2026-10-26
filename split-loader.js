/* Split only the two large engine resources for browser uploads. */
(function () {
  'use strict';
  const files = {"index.pck":{"bytes":45360756,"mime":"application/octet-stream","parts":[{"file":"parts/index.pck.01.bin","bytes":4900000,"sha256":"eebe3753cbfcdcc8d2da5c760bfe17a96f51bd0a8a96caf72e764dde015d6564"},{"file":"parts/index.pck.02.bin","bytes":4900000,"sha256":"b7242e65573e9b9d7c442b223d294da408797a135cd5511f387f0c8dbae5c4dc"},{"file":"parts/index.pck.03.bin","bytes":4900000,"sha256":"f74da2a48ef30cd28a90524456001173494c7a26e3194f382f9f77bd186dcd80"},{"file":"parts/index.pck.04.bin","bytes":4900000,"sha256":"de2c445eb967a5dd43fbd6e75dbdef831e63314002bfe3917dc5e397afa09dbd"},{"file":"parts/index.pck.05.bin","bytes":4900000,"sha256":"56d34d5ec1b1912982515c7561f530d41d58e8790ee1cd3941fedce5ccb36062"},{"file":"parts/index.pck.06.bin","bytes":4900000,"sha256":"e6bdc32e5b6513d1b77e0c6025446f57de0372e3e291b42a705dfe4202414c96"},{"file":"parts/index.pck.07.bin","bytes":4900000,"sha256":"1d6a7b509f8020e733edc63780a4267ee520cb6c9ee1abf2cc1437aad153dc67"},{"file":"parts/index.pck.08.bin","bytes":4900000,"sha256":"8e2e614e74cc4af581fe8494e23abd38fcba817d2d83e0b110fb08cb3fbc2563"},{"file":"parts/index.pck.09.bin","bytes":4900000,"sha256":"28fa1acecd388b25cfeba9aa2319d0f65ffa2e8fde76943336c2a864b0e790c1"},{"file":"parts/index.pck.10.bin","bytes":1260756,"sha256":"aaab593c7138d58ece7c04ffce9a3670617d71c4584f15c019bd5c97f3e83fe9"}],"sha256":"7cc4db879c2cb8c1be140cab52688c695e9b8bd8baeacfadfa36d2b016256706"},"index.wasm":{"bytes":38034280,"mime":"application/wasm","parts":[{"file":"parts/index.wasm.01.bin","bytes":4900000,"sha256":"d55d9c3f7cae25b0a95a682febb6dbd1056dce8b784ecbbf95f59bf634dff945"},{"file":"parts/index.wasm.02.bin","bytes":4900000,"sha256":"4eb69c624f57af1a77dc30bf7c3a77c7f4826350c0364d80700aa972c29249e0"},{"file":"parts/index.wasm.03.bin","bytes":4900000,"sha256":"504a42d57352611af4564062cb984394133b1d20915314487bc5d36da823c1fa"},{"file":"parts/index.wasm.04.bin","bytes":4900000,"sha256":"f60328af25858820bd406b62140a17aac58b7e43859ceade749f16cdff302175"},{"file":"parts/index.wasm.05.bin","bytes":4900000,"sha256":"0c82e3f7b33a60049844b24b21fc9951bccb96c9c919e0b6fd768d4b1149de20"},{"file":"parts/index.wasm.06.bin","bytes":4900000,"sha256":"beecb7fc930fd1e6d3b8bf76b5050a28d8888f67dd04dd57b4c5e8bd7a03c315"},{"file":"parts/index.wasm.07.bin","bytes":4900000,"sha256":"d7b87ba300a583f33cf6ce76c06ac78ef2d06de7049b613bdfa21ec7008526a6"},{"file":"parts/index.wasm.08.bin","bytes":3734280,"sha256":"09d6b91f2c189a64a1fe9baf74191279165c2da07a30d35052973e46b9541bf1"}],"sha256":"6498359ba889796a0d95a2f71113ac184badc0f2d84cf28f4103c7e399d2d547"}};
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
            const response = await originalFetch(new URL(part.file, base), { signal: controller.signal });
            if (!response.ok) throw new Error('Không tải được phần game: ' + part.file + ' (HTTP ' + response.status + ')');
            reader = response.body.getReader();
            let received = 0;
            while (!cancelled) {
              const next = await reader.read();
              if (next.done) break;
              received += next.value.byteLength;
              output.enqueue(next.value);
            }
            reader.releaseLock();reader = null;
            if (cancelled) return;
            if (received !== part.bytes) throw new Error('Phần game thiếu dữ liệu: ' + part.file);
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
