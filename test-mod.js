const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.write("Welcome to Node Js");
    res.end();
  } else if (req.url == "/read") {
    fs.readFile("first.txt", (error, data) => {
      if (error) {
        res.write("Error");
        res.end();
      } else {
        // res.writeHead(200, { "content-type": "text/plain" });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/write") {
    const text = fs.readFile("./first.txt", (error, data) => {
      if (error) {
        res.write("Error");
        res.end();
      } else {
        fs.writeFile("./second.txt", data, (err) => {
          if (err) {
            res.write("Error");
            res.end();
          } else {
            res.write("Done");
            res.end();
          }
        });
      }
    });
  } else if (req.url == "/append") {
    fs.appendFile(
      "./first.txt",
      "No! It will be full not pull ! 😑 ",
      (err) => {
        if (err) {
          res.write("Error");
          res.end();
        }
      }
    );
  } else if ((req.url = "/delete")) {
    fs.rm("./second.txt", (err) => {
      if (err) {
        res.write("Error");
        res.end();
      }
    });
  }
});
const PORT = 5000;
server.listen(PORT);
