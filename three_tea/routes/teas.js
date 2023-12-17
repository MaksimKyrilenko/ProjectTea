const express = require('express');
const router = express.Router();
const Tea = require("../models/tea").Tea;
var checkAuth = require("./../middleware/checkAuth.js")

/* GET users listing. */
router.get('/', (req, res) => {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с teas');
});

/* Страница чая */
router.get('/:nick', checkAuth, async (req, res, next) => {
    try {
        const [tea, teas] = await Promise.all([
            Tea.findOne({ nick: req.params.nick }).exec(),
            Tea.find({}, { _id: 0, title: 1, nick: 1 }).exec()
        ]);

        if (!tea) throw new Error("Нет такого чая");

        res.render('tea', {
            title: tea.title,
            picture: tea.avatar,
            desc: tea.desc,
            menu: teas || []
        });
    } catch (err) {
         next(err);
    }
});

module.exports = router;