const http = require("http");
const server = http.createServer(function name(req, res) {
  console.log("server running");
});
const _ = require("underscore");
var data = [
  { name: "tt", age: 40 },
  { name: "gt", age: 30 },
  { name: "ft", age: 20 },
];
const res = _.pluck(data, "name");
console.log(res);
server.listen(5000);
