import express from 'express';


const app = express();
const PORT = 3999;

var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('start', function(msg){
    console.log(msg);
    io.emit('start',msg);
  });
  socket.on('bid', function(msg){
    console.log(msg);
    io.emit('bid',msg);
  });
  socket.on('round-start', function(msg){
    console.log(msg);
    io.emit('round-start',msg);
  });
  socket.on('select-trump', function(msg){
    console.log(msg);
    io.emit('select-trump',msg);
  });
  socket.on('play', function(msg){
    console.log(msg);
    io.emit('play',msg);
  });
  socket.on('monitor-start', function(msg){
    console.log(msg);
    io.emit('monitor-start',msg);
  });
});