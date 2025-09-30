// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/cadastro_usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Esquema do usuário atualizado para todos os campos do formulário
const EsquemaUsuario = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    telefone: String,
    cpf: String,
    cep: String,
    nascimento: String,   // pode ser String (YYYY-MM-DD) ou Date
    segundoContato: String,
    email: String,
    senha: String
});

// Model
const Usuario = mongoose.model('Usuario', EsquemaUsuario);

// Criar usuário
app.post('/usuarios', async (req, res) => {
    try {
        const novoUsuario = new Usuario(req.body);
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

// Filtro de usuários por nome ou email
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

// Servidor
app.listen(3000, () => {
    console.log('✅ Servidor rodando na porta 3000');
});
