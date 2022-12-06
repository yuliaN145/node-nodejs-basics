import fs from 'fs';
import { join, extname } from 'path';

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    fs.readdir(join(__dirname, 'files'), {withFileTypes: true} , function(err, files){
        for (let i = 0; i < files.length; i += 1) {
          let fullPath = join(join(__dirname, 'files'), files[i].name);
          if (files[i].isFile()) {
            const ext = extname(fullPath);
            fs.stat(fullPath, function (err, stats){
              let res = files[i].name.indexOf('.');
              let newStr = files[i].name.substring(0, res);
              let result = [];
              result.push(newStr);
              //console.log(newStr, ext, stats.size);
              console.log(result);
            });
            //console.log(files[i].name, ext);
          } /*else {
            getPaths(fullPath);
          }*/
        }
      }); 
};

await list();