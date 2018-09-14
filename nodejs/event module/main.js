var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Ryu = new Person('Ryu');
var Mary = new Person('Mary');
var People = [James, Ryu, Mary];

People.forEach(function(person){
    person.on('speak', function(msg) {
        console.log(person.name + " said: " + msg);
    })
})

James.emit('speak', 'Hello!');
Ryu.emit('speak', 'Hey, how are you?');


/* var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
    console.log(msg);
})

myEmitter.emit('someEvent', "Event emitted"); */
