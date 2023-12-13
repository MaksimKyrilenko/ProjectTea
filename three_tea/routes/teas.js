var express = require('express');
var router = express.Router();
var Tea = require("../models/tea").Tea

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с teas');
});

router.get("/:nick", async (req, res, next) => {
    try {
      const tea = await Tea.findOne({ nick: req.params.nick });
      console.log(tea);
      if (!tea) {
        throw new Error("Нет такого чая");
      }
      res.render('tea', {
        title: tea.title,
        picture: tea.avatar,
        desc: tea.desc
      });
    } catch (err) {
      next(err);
    }
  });
       
module.exports = router;
