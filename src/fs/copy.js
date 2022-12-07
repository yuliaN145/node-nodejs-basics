import { readdir, unlink, mkdir, readFile, writeFile } from 'fs';
import { join } from 'path';
import * as url from 'url';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const newFolderPath = join(__dirname, 'files-copy');
const folderPath = join(__dirname, 'files');
import { access } from "node:fs/promises";

const copy = async () => {
  const isFileExist = access('./src/fs/files-copy/fresh.txt')
    readdir(join(__dirname), function (err, files){
        for(let i = 0; i < files.length; i++) {
          if(files[i] === 'files-copy'){
            readdir(join(__dirname, files[i]), function(err, data) {
              for(let i = 0; i < data.length; i++) {
                unlink(join(__dirname, 'files-copy', data[i]), (err) => {
                  if (err) throw err; 
                }
                );
              }
            });
          } else {
            mkdir(newFolderPath, {recursive: true}, err => { if(err) throw err; } );
          }
          readdir(folderPath, function(err, chunk) {
            for(let i = 0; i < chunk.length; i++) {
              readFile(join(__dirname, 'files', chunk[i]), function(err, content) {
                writeFile(join(__dirname, 'files-copy', chunk[i]), content, (err) => {
                  if (err) throw err; 
                  if (isFileExist) {
                    throw new Error('FS operation failed')
                }
                  console.log('Файл был создан');
                });
              });
            }
          });
        }
      });
};

await copy();

