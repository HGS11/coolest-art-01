import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const programDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = resolve(programDir, 'art.png');
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const destinationPath = resolve(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, destinationPath);
