var app = require('express')();
var server = require('http').createServer(app);
var holla = require('webrtc.io').listen(server);

server.listen(8000, function(){
	console.log('Server running on port 8000')
});

// Routes
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/demoncube', function(req, res) {
  res.sendfile(__dirname + '/demoncube.html');
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
app.get('/jquery.min.js', function(req, res) {
  res.sendfile(__dirname + '/public/vendor/jquery.min.js');
});

