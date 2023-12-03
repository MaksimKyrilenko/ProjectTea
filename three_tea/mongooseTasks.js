const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const teaSchema = new mongoose.Schema( {name: String} );
teaSchema.methods.brew = function() {
    console.log(this.name + ' заварился');
}
const Tea = mongoose.model('Tea', teaSchema);
const welding = new Tea({ name: 'Лист' });

welding.save()
  .then(() => welding.brew())
  .catch((err) => console.log(err));