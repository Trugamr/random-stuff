var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res) {
    res.send('<h2>Contact</h1>');
});
app.get('/profile/:name', function(req, res) {
    var data = {
        age: 29,
        job: "Ninja",
        hobbies: [
            "Gaming",
            "Coding",
            "Dark Sci-Fi"
        ]
    }
    res.render('profile', { person : req.params.name, data: data });
});

app.listen(3000);