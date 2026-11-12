import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const programDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDirectory, { recursive: true });
await copyFile(
  join(programDirectory, "art.png"),
  join(outputDirectory, "entry.png"),
);
