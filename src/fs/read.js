import { join } from 'path';
import * as fs from 'fs/promises';
import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const path = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const fileContent = await fs.readFile(path, { encoding: 'utf-8' });
        console.log(fileContent);
    }
    catch {
        console.log('error');
    }
};

await read();