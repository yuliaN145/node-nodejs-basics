import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compress = async () => {
    const filePath = path.join(__dirname, "/files", "fileToCompress.txt");
    const gzipFilePath = path.join(__dirname, "/files", "archive.gz");

    const gzip = createGzip();
    const source = createReadStream(filePath, { encoding: "utf-8" });
    const destination = createWriteStream(gzipFilePath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.log(err);
      process.exit();
    }
  });
};

await compress();