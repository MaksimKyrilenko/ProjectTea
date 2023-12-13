var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с teas');
});

router.get('/black_tea', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/green_tea', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/herbal_tea', function(req, res, next) {
    res.send('respond with a resource');
});

router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });    
module.exports = router;
