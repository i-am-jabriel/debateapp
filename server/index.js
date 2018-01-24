'use strict'; 
var http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

const server = http.createServer(app);

const fs = require('fs');

// see how to use a valid certificate:
// https://github.com/muaz-khan/WebRTC-Experiment/issues/62
const options = {
    key: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/privatekey.pem'))),
    cert: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/certificate.pem')))
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

require('./Signaling-Server.js')(server, function(socket) {
	try {
		var params = socket.handshake.query;

		// "socket" object is totally in your own hands!
		// do whatever you want!

		// in your HTML page, you can access socket as following:
		// connection.socketCustomEvent = 'custom-message';
		// var socket = connection.getSocket();
		// socket.emit(connection.socketCustomEvent, { test: true });

		if (!params.socketCustomEvent) {
			params.socketCustomEvent = 'custom-message';
		}

		socket.on(params.socketCustomEvent, function(message) {
			try {
				socket.broadcast.emit(params.socketCustomEvent, message);
			} catch (e) {}
		});
	} catch (e) {}
});

function resolveURL(url) {
    var isWin = !!process.platform.match(/^win/);
    if (!isWin) return url;
    return url.replace(/\//g, '\\');
}
server.listen(process.env.PORT || 8080 ||443);

module.exports = app;