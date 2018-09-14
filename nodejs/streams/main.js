var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var writeStrem = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function(chunk) {
    // console.log("Chunk received: ");
    // console.log(chunk);
    writeStrem.write(chunk);
});

