const fs = require("fs");
//readstream is an event which is built-in
const readStream = fs.createReadStream("./modules.txt");
readStream.on("data", (chunk) => {
  console.log(".......");
  console.log(chunk);
});
readStream.on("open", () => {
  console.log("stream is open");
});

setTimeout(() => {
  readStream.pause();
  console.log("stream is pause now");
}, 15);

setTimeout(() => {
  readStream.resume();
  console.log("resume now");
}, 3000);
