const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>This is home</p>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>This is contact</p>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>This is about</p>");
    res.end();
  }
});
server.listen(5000);
console.log("running");
