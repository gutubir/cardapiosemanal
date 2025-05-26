const Cardapio = require('../models/Cardapio');

// Criar
exports.criarCardapio = async (req, res) => {
  try {
    const novo = await Cardapio.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar
exports.listarCardapios = async (req, res) => {
  try {
    const lista = await Cardapio.find();
    res.json(lista);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar
exports.atualizarCardapio = async (req, res) => {
  try {
    const atualizado = await Cardapio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar
exports.deletarCardapio = async (req, res) => {
  try {
    await Cardapio.findByIdAndDelete(req.params.id);
    res.json({ message: "Cardápio removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
