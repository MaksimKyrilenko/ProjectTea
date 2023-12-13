const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test1');

const Tea = require("./models/tea").Tea;

const tea = new Tea({
  title: "Белый чай",
  nick: "White_tea"
});

console.log(tea);

tea.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  