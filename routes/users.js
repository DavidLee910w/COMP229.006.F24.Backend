var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello Users');
});

/* GET users listing. */
router.get('/David', function(req, res, next) {
  res.send('Hello David');
});
module.exports = router;
