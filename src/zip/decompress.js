import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const filePath = path.join(__dirname, "/files", "archive.gz");
    const ungzipFilePath = path.join(__dirname, "/files", "fileToCompress.txt");

    const ungzip = createGunzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(ungzipFilePath);
  pipeline(source, ungzip, destination, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
  });
};

await decompress();