var express = require("express");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var config = require('./config/config.json');
var Razorpay = require('razorpay');
var instance = new Razorpay({
  key_id: config.key,
  key_secret: config.secret
})

app.use(express.static('public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/form/:form',
  function(req, res){
      res.render('form');
});

app.get('/1', function(req, res){
  res.sendFile(__dirname + '/views/client.html');
});

app.get('/join/1', function (req, res)
{
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/2', function(req, res){
  res.sendFile(__dirname + '/views/client2.html');
});

app.get('/join/2', function(req, res){
  res.sendFile(__dirname + '/views/index2.html');
});

app.get('/3', function(req, res){
  res.sendFile(__dirname + '/views/client3.html');
});

app.get('/join/3', function(req, res){
  res.sendFile(__dirname + '/views/index3.html');
});

app.get('/5', function(req, res){
  res.sendFile(__dirname + '/views/client5.html');
});

app.get('/join/5', function(req, res){
  res.sendFile(__dirname + '/views/index5.html');
});

app.get('/6', function(req, res){
  res.sendFile(__dirname + '/views/client6.html');
});

app.get('/join/6', function(req, res){
  res.sendFile(__dirname + '/views/index6.html');
});

app.get('/7', function(req, res){
  res.sendFile(__dirname + '/views/client7.html');
});

app.get('/join/7', function(req, res){
  res.sendFile(__dirname + '/views/index7.html');
});

app.get('/8', function(req, res){
  res.sendFile(__dirname + '/views/client8.html');
});

app.get('/join/8', function(req, res){
  res.sendFile(__dirname + '/views/index8.html');
});

app.get('/maths', function(req, res){
  io.emit("maths");
  res.send("Maths Activated");
});

app.get('/physics', function(req, res){
  io.emit("physics");
  res.send("Physics Activated"); 
});

app.get('/chemistry', function(req, res){
  io.emit("chemistry");
  res.send("Chemistry Activated");
});

app.get('/astro', function(req, res){
  console.log("astro");
  io.emit("astro");
  res.send("Astro Activated");
});

app.get('/com', function(req, res){
  console.log("com");
  io.emit("com");
  res.send("com Activated");
});

app.get('/client', function(req, res){
  res.sendFile(__dirname + '/views/mainClient.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  var arr = socket.handshake.headers.referer.split('/');
  var room = arr.pop();
  var client = 0;
  socket.join(room);
  console.log("room is " + room);
  socket.on("down", function(val) {
    io.to(room).emit("down", val);
  });
  
  socket.on("position", function(val) {
    io.to(room).emit("position", val);
  });

  socket.on("value-exthree", function(val) {
    io.to(room).emit("value-exthree", val);
  });

  socket.on("data", function(val) {
    io.to(room).emit("data", val);
  });

  socket.on("up", function(val) {
    io.to(room).emit("up", val);
  });

  socket.emit("client", client);
});

//app.listen(3000);
http.listen(3000, "0.0.0.0", function(){
  console.log('listening on *:3000');
});
