import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, "/files", "fileToWrite.txt");
const stream = createWriteStream(filePath, {
    encoding: "utf-8",
  });

const write = async () => {
    process.stdin.on("data", (chunk) => {
        if (chunk.find((elem) => elem === 27)) {
          process.exit();
        }
    
        stream.write(chunk);
      }); 
};

await write();