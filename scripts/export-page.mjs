import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const route = 'kb/incidents/4471/findings';
await copyFile(`src/routes/${route}/+page.svx`, 'page.svx');
let html = await readFile(`rendered/${route}/index.html`, 'utf8');

// A self-contained review copy: preserve the actual SSR output and inline its CSS.
// The complete interactive site remains available in rendered/.
for (const match of [...html.matchAll(/<link href="([^"]+\.css)" rel="stylesheet">/g)]) {
  const css = await readFile(resolve('rendered', route, match[1]), 'utf8');
  html = html.replace(match[0], `<style>${css}</style>`);
}
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
html = html.replace(/<link rel="modulepreload"[^>]*>/g, '');
await writeFile('page.html', html);
