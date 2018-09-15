var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    console.log("request made on : " + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end('feed me popcorn');
    }
}).listen(3000,'127.0.0.1');

console.log("listening on port 3000");