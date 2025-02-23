const http = require("node:http");
const fs = require("node:fs");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/client/index.html").pipe(res);
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>About Us</h1>`);
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>Page Not Found</h1>`);
      }
    } else {
      throw new Error("Invalid Request");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`<h1>Sever Error</h1>`);
  }
});

server.listen(8000, () => {
  console.log(`Server listening on port ${port}`);
});
