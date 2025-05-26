const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapioController');

router.post('/', cardapioController.criarCardapio);
router.get('/', cardapioController.listarCardapios);
router.put('/:id', cardapioController.atualizarCardapio);
router.delete('/:id', cardapioController.deletarCardapio);

module.exports = router;
