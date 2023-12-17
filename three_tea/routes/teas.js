var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
router.get('/', function(req, res, next) {
res.send('<h1>Это экран для списка чаев</h1>');
});
router.get("/:nick", function(req, res, next) {
db.query(`SELECT * FROM teas WHERE teas.nick = '${req.params.nick}'`, (err, teas) => {
if(err) {
console.log(err);
if(err) return next(err)
} else {
if(teas.length == 0) return next(new Error("Нет такого чая"))
var tea = teas[0];
res.render('tea', {
title: tea.title,
picture: tea.avatar,
desc: tea.about
})
}
})
});
module.exports = router;
