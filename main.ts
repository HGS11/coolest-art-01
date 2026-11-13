import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const programDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(programDirectory, 'art.png');
const configuredOutputDirectory = process.env.MAKEFUN_OUTPUT_DIR;
const outputDirectory = configuredOutputDirectory
  ? resolve(configuredOutputDirectory)
  : '/output';
const destinationPath = join(outputDirectory, 'entry.png');

try {
  await mkdir(outputDirectory, { recursive: true });
  await copyFile(sourcePath, destinationPath);
  process.stdout.write(`Wrote ${destinationPath}\n`);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Unable to write output image: ${detail}\n`);
  process.exitCode = 1;
}
