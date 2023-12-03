const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Tea = mongoose.model('Tea', { name: String });
const welding = new Tea({ name: 'Лист' });

welding.save()
  .then(() => console.log('Сахар'))
  .catch((err) => console.log(err));