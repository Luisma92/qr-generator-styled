import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const cjsPackagePath = resolve('dist/cjs/package.json');

await mkdir(dirname(cjsPackagePath), { recursive: true });
await writeFile(
  cjsPackagePath,
  JSON.stringify({ type: 'commonjs' }, null, 2) + '\n',
  'utf8'
);
