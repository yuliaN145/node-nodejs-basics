import { writeFile } from 'fs';
import { join } from 'path';

import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = () => {
    writeFile(
        join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young', 
        (err) => {
            if (err) throw err;
            console.log('Файл был создан');
        }
    )
};

create();