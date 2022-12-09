const http = require("http");
const url = require("url");
console.log(url);
const server = http.createServer((req, res) => {
  const address = "http://localhost:5000/contact?name=tanim&country=bangladesh";
  const parsed = url.parse(address, true);
  console.log(parsed);
  console.log(parsed.query.name);
});
const PORT = 5000;
server.listen(PORT);
