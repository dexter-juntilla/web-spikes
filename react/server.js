var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
    console.log('app running on port ' + port);
});
