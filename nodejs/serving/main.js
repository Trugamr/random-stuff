var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("Request was made on: " + req.url);
    // var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: "Ryu",
        species: "Unknown"
    }
    // readStream.pipe(res);
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port: 3000');