
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(" This is a test file creted for testing final-new \n");
});

server.listen(80);

console.log("Server running at http://127.0.0.1:80/");
