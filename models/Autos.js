const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const AutoSchema = new Schema({
  marca: String,
  modelo: String,
  precio: Number,
  deuda: Number,
  año: Number,
  color: String
});

const Auto = mongoose.model(`Auto`, AutoSchema);
module.exṕorts = Auto;
