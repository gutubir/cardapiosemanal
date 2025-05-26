const mongoose = require('mongoose');

const RefeicaoSchema = new mongoose.Schema({
  nome: String,
  comidas: [String],
});

const DiaSchema = new mongoose.Schema({
  dia: String,
  refeicoes: [RefeicaoSchema],
});

const CardapioSchema = new mongoose.Schema({
  titulo: String,
  dias: [DiaSchema],
}, { timestamps: true });

module.exports = mongoose.model('Cardapio', CardapioSchema);
