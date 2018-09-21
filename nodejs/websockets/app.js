const express = require('express');
const socket = require('socket.io');

let app = express();
let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
})

// serving static files
app.use(express.static('./public'));

// setting up socket
const io = socket(server);

io.on('connection', (socket) => {
    console.log('socket connection made, id:', socket.id);
    
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})