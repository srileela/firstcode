var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daiwik',desc:'bangaram lanti babu (good boy)' });
});

module.exports = router;
