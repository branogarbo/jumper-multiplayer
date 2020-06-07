const express = require('express');
const socket = require('socket.io');
const port = 3000;

let app = express();
let server = app.listen(port, console.log(`Listening on port ${port}`));

app.use(express.static('public'));

let io = socket(server);

io.on('connection', socket=>{

  socket.on('draw', data=>{
    io.sockets.emit('draw', data);
    console.log(data);
  });
  
});