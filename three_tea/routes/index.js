var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/black_tea', function(req, res, next) {
  res.send("<h1>Страница черного чая</h1>")
  });

router.get('/green_tea', function(req, res, next) {
  res.send("<h1>Страница зелёного чая</h1>")
  });

router.get('/herbal_tea', function(req, res, next) {
  res.send("<h1>Страница травяного чая</h1>")
  });
  
module.exports = router;

