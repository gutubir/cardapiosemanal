const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGO_URI) {
  console.error('Erro: MONGO_URI não está definido no .env');
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rotas
const cardapioRoutes = require('./routes/cardapioRoutes');
app.use('/api/cardapios', cardapioRoutes);

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT} - Ambiente: ${process.env.NODE_ENV || 'development'}`));
