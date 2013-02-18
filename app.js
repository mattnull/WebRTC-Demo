var app = require('express')();
var server = require('http').createServer(app);
var webRTC = require('webrtc.io').listen(server);

server.listen(8000);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/main.css', function(req, res) {
  res.sendfile(__dirname + '/public/main.css');
});

app.get('/webrtc.io.js', function(req, res) {
  res.sendfile(__dirname + '/public/webrtc.io.js');
});
app.get('/socket.io.min.js', function(req, res) {
  res.sendfile(__dirname + '/public/vendor/socket.io/socket.io.min.js');
});
app.get('/prettify.min.js', function(req, res) {
  res.sendfile(__dirname + '/public/vendor/prettify.min.js');
});
app.get('/main.js', function(req, res) {
  res.sendfile(__dirname + '/public/main.js');
});
//webRTC socet events
webRTC.rtc.on('connect', function(rtc) {
  //Client connected
});

webRTC.rtc.on('send answer', function(rtc) {
  //answer sent
});

webRTC.rtc.on('disconnect', function(rtc) {
  //Client disconnect 
});

