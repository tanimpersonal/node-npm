const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(fs);
  if (req.url == "/") {
    fs.readFile("modules.txt", (error, data) => {
      if (error) {
        res.write("failed to read data");
      } else {
        res.write(data);
        res.end();
      }
    });
    fs.writeFile("blank.txt", "modules.txt", (error) => {
      if (error) {
        res.write("Failed");
      } else {
        res.write("Read");
        res.end();
      }
    });
  }
});
const PORT = 5000;
server.listen(PORT);
