/* Split only the two large engine resources for browser uploads. */
(function () {
  'use strict';
  const files = {"index.pck":{"bytes":137546400,"mime":"application/octet-stream","parts":[{"file":"parts/index.pck.01.bin","bytes":4900000,"sha256":"eb8d102acb063482ebbe8248fcaf3453604b09d8c8ad59952de2f0f6fbbe6a1e"},{"file":"parts/index.pck.02.bin","bytes":4900000,"sha256":"2b5edc96348840020b96cf865db149bfa519871e645b858397a59dbaff0e453e"},{"file":"parts/index.pck.03.bin","bytes":4900000,"sha256":"108065ce2ce2d458b997adb6325744d4c0ec3e1e45e9cc88e912eda50b3f9cc6"},{"file":"parts/index.pck.04.bin","bytes":4900000,"sha256":"9a4c2e185ee0723099df8b32c993b6e511a676369fd3024a2edf7527216088b6"},{"file":"parts/index.pck.05.bin","bytes":4900000,"sha256":"bb33ad7bdc0cd7f6cab024f6653fa67e550a20bd50f677fc9cb8095a06e2a8ab"},{"file":"parts/index.pck.06.bin","bytes":4900000,"sha256":"e9d67b47c78fa80e8b49407811fad891badb1784b67eab4a75415d4530027d46"},{"file":"parts/index.pck.07.bin","bytes":4900000,"sha256":"58c29aecdb37877d94f1cd12695ee53df20f8f9a67421e19abd769fc3d1a58fa"},{"file":"parts/index.pck.08.bin","bytes":4900000,"sha256":"fb3ceab84d42386d5ba7d76e043525b40bec29b53f01184c4d632729f83e651e"},{"file":"parts/index.pck.09.bin","bytes":4900000,"sha256":"912c1928500e4cf8358f1d722a9fd4512040d966560148caf8476f2939269eb2"},{"file":"parts/index.pck.10.bin","bytes":4900000,"sha256":"b117b0661dffff06bd995d5381dc9cd6373d6b62f2d904d080efab2fb81437b5"},{"file":"parts/index.pck.11.bin","bytes":4900000,"sha256":"f4fd97049d12a3d07576cb4d436d8a4bd7c8c40aab7ceed5720e96224f6d34b1"},{"file":"parts/index.pck.12.bin","bytes":4900000,"sha256":"b2b7d22612b09d697322f8326249bc1315d5353f03d9fe5afbb4189e265f611c"},{"file":"parts/index.pck.13.bin","bytes":4900000,"sha256":"55ec5f3fd78a2d5c81beceb7fef44a6f01962f0182f810309b919692c83e962a"},{"file":"parts/index.pck.14.bin","bytes":4900000,"sha256":"9e8543b33e5f908effe69f6c92fd4239b933d0dcbdc61e2eb4361a98df288d09"},{"file":"parts/index.pck.15.bin","bytes":4900000,"sha256":"109fede5820fb22bb257c898b46b4d6352d4f240cf2fdc5113a3e65f75336419"},{"file":"parts/index.pck.16.bin","bytes":4900000,"sha256":"4d558befc7f99a769d335abdd5065f8043e6b2bb9a211128333bade16cbcee52"},{"file":"parts/index.pck.17.bin","bytes":4900000,"sha256":"219f5419f5d295231a5bac7a9e6e08257822581f7bc9817812be9307cdf13241"},{"file":"parts/index.pck.18.bin","bytes":4900000,"sha256":"2c8c7a7e9b0e622e4ab83a991ba8fd067322678e1287797158c8757e07123fff"},{"file":"parts/index.pck.19.bin","bytes":4900000,"sha256":"9abef75a9c19718f5fc81efdc3182bc073ef6ed3762847f8959d66db050002b7"},{"file":"parts/index.pck.20.bin","bytes":4900000,"sha256":"e9738047ed27e2b5f026488100a7db47f6a920b62878aecf975676ad451b3866"},{"file":"parts/index.pck.21.bin","bytes":4900000,"sha256":"c4249b4cb9a9ca337f8e84bade38164349ea9ed989387ec8576035c7f3db2f6e"},{"file":"parts/index.pck.22.bin","bytes":4900000,"sha256":"98ad1b9a0a08fc896938d1648a447b96bf0a1c9ea7fb60b0e5926ad7560052f3"},{"file":"parts/index.pck.23.bin","bytes":4900000,"sha256":"eb668d4feb16773703daf78af05935926bf6baf11c171e49a2bd6b094858a1c5"},{"file":"parts/index.pck.24.bin","bytes":4900000,"sha256":"f1bd08b1aa2fc307cecfe941302a58b3a265508f0d2bd35d9c93690a7afefb10"},{"file":"parts/index.pck.25.bin","bytes":4900000,"sha256":"2dcf3fca07f9142ed8797540add88e3d9f8b8d67aa3ef18ce98733e5db12112c"},{"file":"parts/index.pck.26.bin","bytes":4900000,"sha256":"56f5e12fa99d33c42cde7c43e22478e325d76ba2547f549490933a09e8173e98"},{"file":"parts/index.pck.27.bin","bytes":4900000,"sha256":"ee2c65949c8c0b35b0f6b173f40e7d5e371b8655a3fda98e49871f44aa64973a"},{"file":"parts/index.pck.28.bin","bytes":4900000,"sha256":"1dc4a985aba9256d93a26589caeb3bd4764d856a17cd9d4709bfcf4cf099f309"},{"file":"parts/index.pck.29.bin","bytes":346400,"sha256":"d064ab789bd31097d6c6980981f871c5f31a08b720784d463742dea1b65e77bf"}],"sha256":"69062337ab31aa6cc7204835c7fb9568b420d3d48ef872819b20ad7fc2a3072e"},"index.wasm":{"bytes":38034280,"mime":"application/wasm","parts":[{"file":"parts/index.wasm.01.bin","bytes":4900000,"sha256":"d55d9c3f7cae25b0a95a682febb6dbd1056dce8b784ecbbf95f59bf634dff945"},{"file":"parts/index.wasm.02.bin","bytes":4900000,"sha256":"4eb69c624f57af1a77dc30bf7c3a77c7f4826350c0364d80700aa972c29249e0"},{"file":"parts/index.wasm.03.bin","bytes":4900000,"sha256":"504a42d57352611af4564062cb984394133b1d20915314487bc5d36da823c1fa"},{"file":"parts/index.wasm.04.bin","bytes":4900000,"sha256":"f60328af25858820bd406b62140a17aac58b7e43859ceade749f16cdff302175"},{"file":"parts/index.wasm.05.bin","bytes":4900000,"sha256":"0c82e3f7b33a60049844b24b21fc9951bccb96c9c919e0b6fd768d4b1149de20"},{"file":"parts/index.wasm.06.bin","bytes":4900000,"sha256":"beecb7fc930fd1e6d3b8bf76b5050a28d8888f67dd04dd57b4c5e8bd7a03c315"},{"file":"parts/index.wasm.07.bin","bytes":4900000,"sha256":"d7b87ba300a583f33cf6ce76c06ac78ef2d06de7049b613bdfa21ec7008526a6"},{"file":"parts/index.wasm.08.bin","bytes":3734280,"sha256":"09d6b91f2c189a64a1fe9baf74191279165c2da07a30d35052973e46b9541bf1"}],"sha256":"6498359ba889796a0d95a2f71113ac184badc0f2d84cf28f4103c7e399d2d547"}};
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
