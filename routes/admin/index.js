var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', {});
});

router.get('/main', function(req, res, next) {
  res.render('admin/main', {});
});


module.exports = router;
