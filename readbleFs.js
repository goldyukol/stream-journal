const fs = require("fs");

const readStream = fs.createReadStream("./anime_dancing.mp4");
const writeStream = fs.createWriteStream("./copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("error", (error) => {
  console.log("an error has occured");
  console.error(error);
});

readStream.on("end", (chunk) => {
  writeStream.end();
});

readStream.on("close", () => {
  process.stdout.write("file copied \n");
});

// readStream.pause();

// process.stdin.on("data", (chunk) => {
//   if (chunk.toString().trim() === "finish") {
//     readStream.resume();
//   }
//   readStream.read();
//   //   let text = chunk.toString().trim();
//   //   console.log("echo:", text);
// });
