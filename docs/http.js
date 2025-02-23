const http = require('node:http');

// Create a custom agent
const customAgent = new http.Agent({
  keepAlive: true, // Reuse connections
  maxSockets: 5,  // Maximum 5 sockets per host
  maxTotalSockets:100,
  scheduling:"lifo",
  maxFreeSockets:25, 
});

// Make a GET request using the custom agent
http.get({
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts/1',
  agent: customAgent, // Use the custom agent
}, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});




