// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // para criptografar senhas

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ================== CONEXÃO COM MONGODB ==================
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
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico' },
  data: String,   // exemplo: "2025-10-10"
  hora: String,   // exemplo: "14:00"
  descricao: String,
  status: { type: String, default: 'Agendada' }
});
const Consulta = mongoose.model('Consulta', consultaSchema);


// ================== ROTAS USUÁRIOS ================== //

// Criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, sobrenome, telefone, cpf, cep, nascimento, segundoContato, email, senha } = req.body;
    const hashSenha = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      nome,
      sobrenome,
      telefone,
      cpf,
      cep,
      nascimento,
      segundoContato,
      email,
      senha: hashSenha
    });

    await novoUsuario.save();
    res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', erro });
  }
});

// Listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários', erro });
  }
});

// Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.senha) {
      req.body.senha = await bcrypt.hash(req.body.senha, 10);
    }
    await Usuario.findByIdAndUpdate(id, req.body);
    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro });
  }
});

// Deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.json({ mensagem: 'Usuário removido com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao excluir usuário', erro });
  }
});

// Filtro de usuários
app.get('/usuarios/filtro/:termo', async (req, res) => {
  try {
    const { termo } = req.params;
    const usuariosFiltrados = await Usuario.find({
      $or: [
        { nome: { $regex: termo, $options: 'i' } },
        { sobrenome: { $regex: termo, $options: 'i' } },
        { email: { $regex: termo, $options: 'i' } }
      ]
    });
    res.json(usuariosFiltrados);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao filtrar usuários', erro });
  }
});


// ================== ROTAS MÉDICOS ================== //

// Criar médico
app.post('/medicos', async (req, res) => {
  try {
    const {nome,sobrenome,telefone,cpf,cep,crm,nascimento,especialidade,email,senha } = req.body;
    const hashSenha = await bcrypt.hash(senha, 10);

    const novoMedico = new Medico({
      nome,
      sobrenome,
      telefone,
      cpf,
      cep,
      crm,
      nascimento,
      especialidade,
      email,
      senha: hashSenha
    });

    await novoMedico.save();
    res.json({ mensagem: 'Médico cadastrado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar médico', erro });
  }
});

// Listar médicos
app.get('/medicos', async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar médicos', erro });
  }
});


// ================== ROTAS CONSULTAS ================== //

// Criar consulta
app.post('/consultas', async (req, res) => {
  try {
    const { paciente, medico, data, hora, descricao } = req.body;

    const novaConsulta = new Consulta({
      paciente,
      medico,
      data,
      hora,
      descricao
    });

    await novaConsulta.save();
    res.json({ mensagem: 'Consulta agendada com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao agendar consulta', erro });
  }
});

// Listar consultas (com info do paciente e médico)
app.get('/consultas', async (req, res) => {
  try {
    const consultas = await Consulta.find()
      .populate('paciente', 'nome email telefone')
      .populate('medico', 'nome especialidade crm');
    res.json(consultas);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao buscar consultas', erro });
  }
});

// Atualizar consulta (ex: mudar status para concluída/cancelada)
app.put('/consultas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Consulta.findByIdAndUpdate(id, req.body);
    res.json({ mensagem: 'Consulta atualizada com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar consulta', erro });
  }
});

// Cancelar consulta
app.delete('/consultas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Consulta.findByIdAndDelete(id);
    res.json({ mensagem: 'Consulta removida com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao excluir consulta', erro });
  }
});


// ================== START SERVER ================== //
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
