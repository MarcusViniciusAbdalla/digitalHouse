const http = require('http');

/*http.createServer((req,req) => {
  res.writeHead(200 , {"Content-Type": "text/plain"});
  res.end("Meu primeiro servidor!");
}).listen(3030)*/


http.createServer((req,req) => {
  res.writeHead(200 , {"Content-Type": "text/plain"});

    switch(req.url){
      case"/":
        res.end("Você está na página home!")
          break;
      case"/contato":
        res.end("Você está na página contato!")
          break;
    }
  res.end("Meu primeiro servidor!");
}).listen(3030)


