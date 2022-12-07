import fs from 'fs';
import { join } from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = () => {
fs.rename(
    join(__dirname, 'files', 'wrongFilename.txt'),
    join(__dirname, 'files', 'properFilename.md'),
    err => {
        if (err) throw err;
        console.log('Файл переименован');
    }
);
};

rename();