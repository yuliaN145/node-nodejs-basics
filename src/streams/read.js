import { createReadStream } from "fs";
import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const readStream = createReadStream('src/streams/files/fileToRead.txt');
  readStream.pipe(process.stdout);
};

await read();