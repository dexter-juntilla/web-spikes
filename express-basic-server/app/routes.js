var express = require('express');
var router = express.Router();

//serve html file to browser
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/test', function (req, res, next) {
    res.render('test');
});

module.exports = router;
