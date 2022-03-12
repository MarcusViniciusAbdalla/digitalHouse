const http = require('http');

http.createServer((req,req) => {
  res.writeHead(200 , {"Content-Type": "text/plain"});
  res.end("Meu primeiro servidor!");
}).listen(3030)


