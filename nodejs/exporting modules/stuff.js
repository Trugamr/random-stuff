var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array.';
};

var adder = function(a, b) {
    return `Sum is ${a + b}`;
}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

//module.exports.adder = adder;
//module.exports.adder = function() {};