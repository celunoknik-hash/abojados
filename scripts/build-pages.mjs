import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const basePath = '/abojados';
Object.assign(process.env, {
  GITHUB_PAGES: 'true',
  NEXT_PUBLIC_BASE_PATH: basePath,
});

const cli = fileURLToPath(new URL('./cli.js', import.meta.resolve('vinext')));
const result = spawnSync(process.execPath, [cli, 'build'], {
  stdio: 'inherit',
  env: process.env,
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// vinext beta.5 prerenders without basePath. Render the public URLs explicitly
// and keep the HTML, navigation payloads and assets together for GitHub Pages.
const { startProdServer } = await import('vinext/server/prod-server');
const { server, port } = await startProdServer({
  port: 0,
  host: '127.0.0.1',
  outDir: 'dist',
  noCompression: true,
});

try {
  for (const route of ['', 'nosotros', 'areas', 'contacto']) {
    const url = `http://127.0.0.1:${port}${basePath}/${route ? route + '/' : ''}`;
    const response = await fetch(url);
    const html = await response.text();
    if (!response.ok || !html.includes('<main>') || html.includes('id="__next_error__"')) {
      throw new Error(`No se pudo exportar ${url}: HTTP ${response.status}`);
    }

    const directory = join('dist/client', route);
    mkdirSync(directory, { recursive: true });
    writeFileSync(join(directory, 'index.html'), html);

    const rscResponse = await fetch(url, {
      headers: { Accept: 'text/x-component', RSC: '1' },
    });
    if (!rscResponse.ok || !rscResponse.headers.get('content-type')?.includes('text/x-component')) {
      throw new Error(`No se pudo exportar la navegación de ${url}`);
    }
    writeFileSync(`dist/client/${route || 'index'}.rsc`, await rscResponse.text());
    console.log(`Exportada: ${basePath}/${route}`);
  }

  // Vite includes basePath in the asset directory. Pages already mounts the
  // artifact at /abojados/, so its _next directory belongs at the artifact root.
  cpSync('dist/client/abojados/_next', 'dist/client/_next', { recursive: true });
  writeFileSync('dist/client/.nojekyll', '');
} finally {
  server.closeAllConnections();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
