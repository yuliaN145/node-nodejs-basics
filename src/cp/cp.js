import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "./files/script.js");

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args);

  child.on("message", (childMessage) => {

    if (childMessage) {
      process.stdout.write(Buffer.from(childMessage.data));
    } else {
      process.exit();
    }
  });

  child.on("error", (err) => {
    console.log("Something went wrong: ", err);
  });

  process.stdin.on("data", (chunk) => {
    child.send(chunk);
  });
};

await spawnChildProcess([1, 2]);