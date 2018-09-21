// making socket connection
const socket = io.connect('http://localhost:3000');

// query dom
const mesasge = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// emit event
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', () => {
    socket.emit('typing', {
        handle: handle.value
    })
})


// listen for events
socket.on('chat', (data) => {
    output.innerHTML += `
        <p><strong>${data.handle}</strong>: ${data.message}</p>
    `
    feedback.innerHTML = '';
})

socket.on('typing', (data) => {
    feedback.innerHTML = `
        <P><em>${data.handle}</em> is typing a message...</p>
    `
})

