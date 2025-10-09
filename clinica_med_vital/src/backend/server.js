// server.js
// ================== IMPORTAÇÕES ================== //
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const QrCodePix = require('qrcode-pix').default; // ✅ Importação corrigida

const app = express();
const PORT = 3000;

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
  email: { type: String, unique: true },
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
  paciente: String,
  medico: String,
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

// ================== ROTAS USUÁRIOS (PACIENTES) ================== //

// Cadastrar novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, sobrenome, telefone, cpf, cep, nascimento, segundoContato, email, senha } = req.body;

    if (!nome || !sobrenome || !telefone || !cpf || !cep || !nascimento || !segundoContato || !email || !senha) {
      return res.status(400).json({ mensagem: 'Por favor, preencha todos os campos.' });
    }

    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'E-mail já cadastrado!' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      nome,
      sobrenome,
      telefone,
      cpf,
      cep,
      nascimento,
      segundoContato,
      email,
      senha: senhaCriptografada
    });

    await novoUsuario.save();

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao cadastrar usuário:', erro);
    res.status(500).json({ mensagem: 'Erro interno no servidor', erro });
  }
});

// Listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários', erro });
  }
});

// ================== ROTAS CONSULTAS ================== //

// Marcar consulta
app.post('/marcar-consulta', async (req, res) => {
  try {
    const { paciente, medico, data, hora, descricao } = req.body;

    if (!paciente || !medico || !data || !hora || !descricao) {
      return res.status(400).json({ mensagem: 'Todos os campos da consulta são obrigatórios.' });
    }

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

// ================== ROTA DE PAGAMENTO PIX ================== //
app.post('/gerar-pix', async (req, res) => {
  try {
    const { plano, valor } = req.body;

    if (!plano || !valor) {
      return res.status(400).json({ mensagem: 'Plano e valor são obrigatórios.' });
    }

    // ✅ Gera o código Pix dinâmico corretamente
    const qrCodePix = new QrCodePix({
      version: '01',
      key: 'seu_email@dominio.com', // 🔑 Substitua pela sua chave PIX real
      name: 'Clínica Med Vital',
      city: 'SAOPAULO',
      message: plano,
      value: Number(valor),
    });

    const payload = qrCodePix.payload();
    const imagem = await qrCodePix.base64();

    res.json({
      mensagem: 'QR Code Pix gerado com sucesso!',
      payload,
      imagem
    });
  } catch (erro) {
    console.error('Erro ao gerar QR Code Pix:', erro);
    res.status(500).json({ mensagem: 'Erro ao gerar QR Code Pix', erro });
  }
});

// ================== START SERVER ================== //
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
