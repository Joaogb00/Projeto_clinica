// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // 🔹 importar bcrypt

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Conexão com o MongoDB local
mongoose.connect('mongodb://localhost:27017/Med_vital', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB!'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Esquema do usuário (todos os campos do formulário)
const usuarioSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  telefone: String,
  cpf: String,
  cep: String,
  nascimento: String,
  segundoContato: String,
  email: String,
  senha: String // aqui vamos salvar a senha criptografada
});

// Model
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Criar usuário (com senha criptografada)
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, sobrenome, telefone, cpf, cep, nascimento, segundoContato, email, senha } = req.body;

    // Criptografar a senha
    const hashSenha = await bcrypt.hash(senha, 10);

    // Criar usuário com a senha criptografada
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

// Listar todos usuários
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

    // Se tiver senha no update, criptografa antes
    if (req.body.senha) {
      req.body.senha = await bcrypt.hash(req.body.senha, 10);
    }

    await Usuario.findByIdAndUpdate(id, req.body);
    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro });
  }
});

// Excluir usuário
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

// Inicia servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
