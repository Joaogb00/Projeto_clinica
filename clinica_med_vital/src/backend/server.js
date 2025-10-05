// ================== IMPORTAÇÕES ================== //
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

// ================== MIDDLEWARES ================== //
app.use(express.json());
app.use(cors());

// ================== CONEXÃO COM MONGODB ================== //
mongoose.connect('mongodb://localhost:27017/Clinica_med_vital', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB!'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// ================== SCHEMAS & MODELS ================== //

// Usuário (paciente)
const usuarioSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  telefone: String,
  cpf: String,
  cep: String,
  nascimento: String,
  segundoContato: String,
  email: String,
  senha: String
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Médico
const medicoSchema = new mongoose.Schema({
  nome: String,
  especialidade: String,
  crm: String,
  telefone: String,
  email: String,
  senha: String
});
const Medico = mongoose.model('Medico', medicoSchema);

// Consulta
const consultaSchema = new mongoose.Schema({
  paciente: String, // agora como string
  medico: String,   // agora como string
  data: String,
  hora: String,
  descricao: String,
  status: { type: String, default: 'Agendada' }
});
const Consulta = mongoose.model('Consulta', consultaSchema);

// Serviço
const servicoSchema = new mongoose.Schema({
  img: String,
  titulo: String,
  descricao: String
});
const Servico = mongoose.model('Servico', servicoSchema);

// ================== ROTAS CONSULTAS ================== //

// Marcar consulta via formulário
app.post('/marcar-consulta', async (req, res) => {
  try {
    const { paciente, medico, data, hora, descricao } = req.body;

    const novaConsulta = new Consulta({
      paciente,
      medico,
      data,
      hora,
      descricao,
      status: 'Agendada'
    });

    await novaConsulta.save();
    res.json({ mensagem: 'Consulta marcada com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao marcar consulta', erro });
  }
});

// Listar todas as consultas
app.get('/consultas', async (req, res) => {
  try {
    const consultas = await Consulta.find();
    res.json(consultas);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar consultas', erro });
  }
});

// Deletar consulta
app.delete('/consultas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Consulta.findByIdAndDelete(id);
    res.json({ mensagem: 'Consulta desmarcada com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao desmarcar consulta', erro });
  }
});

// ================== START SERVER ================== //
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
