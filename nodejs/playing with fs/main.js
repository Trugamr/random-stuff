var fs = require('fs');

var readMe = fs.readFileSync('./readMe.txt', 'utf8');
console.log(readMe);
fs.writeFileSync('./writeMe.txt', "Hey yo!");

fs.readFile('./writeMe.txt', 'utf8', function(err, data) {
    console.log(data);
})

//reading json
fs.readFile('./data.json', function(err, data) {
    if(!err) {
        var parsedData = JSON.parse(data);
        console.log(parsedData.students["0001"].name, parsedData.students["0001"].age);
    }
});


fs.mkdir('stuff', function() {
   fs.readFile('./readMe.txt', 'utf8', function(err, data) {
       fs.writeFile('./stuff/writeMe.txt', data);
   });
});