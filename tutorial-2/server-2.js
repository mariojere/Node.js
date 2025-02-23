const http = require("node:http");
const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not set

const userData = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Alice Smith", email: "alicesmith@example.com" },
  { id: 4, name: "Bob Johnson", email: "bobjohnson@example.com" },
  { id: 5, name: "Charlie Brown", email: "charliebrown@example.com" },
  { id: 6, name: "Diana Prince", email: "dianaprince@example.com" },
  { id: 7, name: "Evan Wright", email: "evanwright@example.com" },
  { id: 8, name: "Fiona Gallagher", email: "fionagallagher@example.com" },
  { id: 9, name: "George Harris", email: "georgeharris@example.com" },
  { id: 10, name: "Hannah Montana", email: "hannahmontana@example.com" },
];

// Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or handler
};

// Handlers
const handleGetAllUsers = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(userData));
};

const handleGetUserById = (req, res) => {
  const userId = req.url.split("/")[3]; // Extract the user ID from the URL
  const user = userData.find((user) => user.id === parseInt(userId));

  if (user) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>User Not Found</h1>`);
  }
};

const handleMethodNotAllowed = (req, res) => {
  res.writeHead(405, { "Content-Type": "text/html" });
  res.end(`<h1>Method Not Allowed</h1>`);
};

const handleNotFound = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`<h1>Not Found</h1>`);
};

const handleServerError = (err, req, res) => {
  res.writeHead(500, { "Content-Type": "text/html" });
  res.end(`<h1>Server Error</h1>`);
};

// Main request handler
const requestHandler = (req, res) => {
  logger(req, res, () => {
    try {
      if (req.method === "GET" && req.url === "/api/users") {
        handleGetAllUsers(req, res);
      } else if (
        req.method === "GET" &&
        req.url.match(/^\/api\/users\/([1-9]|10)$/)
      ) {
        handleGetUserById(req, res);
      } else if (req.method !== "GET") {
        handleMethodNotAllowed(req, res);
      } else {
        handleNotFound(req, res);
      }
    } catch (err) {
      handleServerError(err, req, res);
    }
  });
};

// Create the server
const server = http.createServer(requestHandler);

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});