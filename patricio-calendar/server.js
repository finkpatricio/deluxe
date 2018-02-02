'use strict';

const express = require('express');

// Constants
const PORT = 9091;
const HOST = '0.0.0.0';

// App
const app = express();
// app.use(express.static('dist'));
app.get('/main.8c2034f2.css', function(req, res) {
  res.sendFile("/index/build/static/css/main.8c2034f2.css");
});
app.get('/main.71b8c2ad.js', function(req, res) {
  res.sendFile("/index/build/static/js/main.71b8c2ad.js");
});
app.get('/manifest.json', function(req, res) {
  res.sendFile("/index/build/manifest.json");
});
app.get('/favicon.ico', function(req, res) {
  res.sendFile("/index/build/favicon.ico");
});
app.get('/', (req, res) => {
  res.sendFile('/index/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);