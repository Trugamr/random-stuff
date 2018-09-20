const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connect to database
const dummyURL = 'MONGO_DB_URL';
mongoose.connect(dummyURL)

//create a schema - blueprint
let todoSchema = new mongoose.Schema({ item: String });

let Todo = mongoose.model('Todo', todoSchema);

// let data = [
//     { item: 'get milk' },
//     { item: 'play video games' },
//     { item: 'learn something new' }
// ]

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        //get data from mongodb
        Todo.find({}, function(err, data) {
            if(err) throw err;
            res.render('todo', { todos: data });
        })        
        // res.render('todo', { todos: data });
    })

    app.post('/todo', urlencodedParser, function(req, res) {
        //get data from view and add to mongodb
        let newTodo = Todo(req.body).save(function(err, data) {
            if(err) throw err;
            res.json(data);
        })

        // data.push(req.body);
        // res.json(data);
    })

    app.delete('/todo/:item', function(req, res) {
        //delete the requested itme from mongo db
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data) {
            if(err) throw err;
            res.json(data);
        })

        // data = data.filter(todo => todo.item.replace(/ /g, '-')!=req.params.item)
        // res.json(data);
    })
}