// const { add, sub } = require("./functions.js");
// const res = add(1, 2);
// console.log(res);
// const res1 = sub(2, 1);
// console.log(res1);
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello server");
});
server.listen(5000);
console.log("hello");
