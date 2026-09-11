import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
// Only publish versioned application assets, never local backups or development files.
const files = execFileSync('git', ['ls-files', '-z', '--', 'index.html', 'LICENSE', 'assets', 'css', 'js', 'templates'], { cwd: root, encoding: 'utf8' })
    .split('\0').filter(Boolean);
if (!files.includes('index.html')) throw new Error('Missing application entrypoint');
fs.mkdirSync(output, { recursive: true });
for (const file of files) {
    const source = path.join(root, file);
    if (!fs.lstatSync(source).isFile()) throw new Error(`Not a regular file: ${file}`);
    const target = path.join(output, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
}
console.log(`Prepared ${files.length} static application files.`);
