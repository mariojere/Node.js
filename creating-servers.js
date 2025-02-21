const http = require("node:http");
const fs = require("node:fs");
const { shopData } = require("./JSON/shopData");
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log("user requested:", req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("app/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("app/contact.html").pipe(res);
  } else if (req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(shopData));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream("app/404.html").pipe(res);
  }
});

server.listen(3000, hostname, () => {
  console.log(`Server running at http://${hostname}:3000/`);
});
