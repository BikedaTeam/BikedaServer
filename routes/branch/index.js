var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('branch/index', {});
});

router.post('/main', function(req, res, next) {
  res.render('branch/delivery', {});
});


module.exports = router;
