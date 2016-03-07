var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use('/', require('./app/routes'));

app.use(function (req, res, next) {
    res.render('404');
    return next();
});

http.createServer(app).listen(port, function () {
    console.log('app running on port ' + port);
});