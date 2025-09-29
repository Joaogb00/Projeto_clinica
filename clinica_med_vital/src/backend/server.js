// Importa o framework Express, que é utilizado para 
//      criar e gerenciar o servidor web de forma simples e eficiente.
const express = require('express');

// Importa o Mongoose, uma biblioteca que permite interagir 
//      com o banco de dados MongoDB usando JavaScript.
const mongoose = require('mongoose');

// Importa o CORS (Cross-Origin Resource Sharing), que permite 
//      que a API seja acessada por outros domínios diferentes 
//      do servidor original.
const cors = require('cors');

// Cria uma instância do Express, que será a base 
//      para o servidor da aplicação.
const app = express();

// Configura o Express para interpretar requisições 
//      com o formato JSON.
// Isso permite que o servidor compreenda e manipule 
//      dados enviados no formato JSON.
app.use(express.json());

// Habilita o uso do CORS, permitindo que a API aceite 
//      requisições de diferentes origens (como frontend e mobile).
// Sem essa configuração, o navegador pode bloquear 
//      requisições de domínios diferentes por questões de segurança.
app.use(cors());


// Conecta ao banco de dados MongoDB local.
// "mongodb://localhost:27017/cadastro_usuarios" é o 
//      endereço do banco de dados.
// - "localhost" indica que o banco de dados está rodando na 
//      máquina local (servidor local).
// - "27017" é a porta padrão do MongoDB.
// - "cadastro_usuarios" é o nome do banco de dados onde os 
//      dados dos usuários serão armazenados.
mongoose.connect('mongodb://localhost:27017/cadastro_usuarios', {
    
    // useNewUrlParser: true -> Usa o novo analisador de URLs do MongoDB, 
    //      necessário para evitar erros de compatibilidade.
    useNewUrlParser: true,

    // useUnifiedTopology: true -> Habilita o novo mecanismo de 
    //      gerenciamento de conexões do MongoDB, garantindo 
    //      mais estabilidade.
    useUnifiedTopology: true

});

// Define o esquema (modelo) do usuário no MongoDB.
// O esquema define como os dados serão armazenados no banco de 
//      dados, ou seja, quais campos um usuário terá.
const EsquemaUsuario = new mongoose.Schema({

    // Define o campo "nome", que armazena o nome do usuário.
    // O tipo de dado é String (texto).
    nome: String,

    // Define o campo "email", que armazena o email do usuário.
    // O tipo de dado é String (texto).
    email: String,

    // Define o campo "idade", que armazena a idade do usuário.
    // O tipo de dado é Number (número).
    idade: Number

});


// Cria um modelo de usuário baseado no esquema 
//      definido anteriormente.
// "Usuario" será o nome da coleção no banco de dados 
//      MongoDB (o Mongoose transforma automaticamente 
//      para "usuarios" no plural).
// Esse modelo permitirá que interajamos com o banco de 
//      dados de forma fácil, como salvar, buscar e excluir usuários.
const Usuario = mongoose.model('Usuario', EsquemaUsuario);

// Cria uma rota HTTP do tipo POST para cadastrar um novo usuário.
// Quando um cliente (exemplo: frontend ou Postman) enviar 
//      uma requisição POST para a URL "/usuarios",
//      esta função será executada para processar os dados 
//      recebidos e salvar um novo usuário no banco de dados.
app.post('/usuarios', async (req, res) => {

    // Extrai os valores enviados no corpo da requisição (JSON 
    //      enviado pelo cliente) e armazena em variáveis.
    // Essas variáveis contêm os dados do novo usuário a ser cadastrado.
    const { nome, email, idade } = req.body;

    // Cria um novo objeto do modelo "Usuario" com os 
    //      dados extraídos da requisição.
    // Esse objeto representa um novo usuário que será 
    //      salvo no banco de dados.
    const novoUsuario = new Usuario({ nome, email, idade });

    // Salva o novo usuário no banco de dados.
    // "await" significa que o código vai esperar o MongoDB 
    //      salvar o usuário antes de continuar.
    await novoUsuario.save();

    // Retorna uma resposta em formato JSON informando que o 
    //      usuário foi cadastrado com sucesso.
    // O cliente que fez a requisição receberá essa 
    //      mensagem como resposta.
    res.json({ mensagem: 'Usuário cadastrado com sucesso!' });

});


// Cria uma rota HTTP do tipo GET para listar todos os 
//      usuários cadastrados no banco de dados.
// Sempre que um cliente (exemplo: frontend, Postman ou um 
//      navegador) fizer uma requisição GET para "/usuarios",
//      esta função será executada e retornará a lista de 
//      todos os usuários cadastrados.
app.get('/usuarios', async (req, res) => {

    // Usa o modelo "Usuario" para buscar todos os documentos (registros) 
    //      dentro da coleção "usuarios" no MongoDB.
    // A função "find()" sem parâmetros retorna todos os 
    //      registros encontrados.
    // O "await" faz com que o código espere a resposta do 
    //      banco antes de continuar.
    const usuarios = await Usuario.find();

    // Retorna a lista de usuários encontrados no banco de 
    //      dados em formato JSON.
    // O cliente que fez a requisição receberá essa lista 
    //      para exibição ou manipulação.
    res.json(usuarios);

});


// Rota para atualizar os dados de um usuário
// Cria uma rota HTTP do tipo PUT para atualizar um usuário 
//      existente no banco de dados.
// O método PUT é usado para modificar os dados de um 
//      usuário já cadastrado.
// A URL "/usuarios/:id" significa que o ID do usuário será 
//      passado como um parâmetro na URL.
// Exemplo de requisição: PUT http://localhost:3000/usuarios/65a123bcde456f7890123456
app.put('/usuarios/:id', async (req, res) => {

    // Utiliza um bloco "try-catch" para capturar possíveis 
    //      erros na atualização do usuário.
    try {

        // Obtém o ID do usuário a partir dos parâmetros da URL.
        // O ":id" na URL significa que qualquer valor passado nessa 
        //      posição será capturado e armazenado na variável "id".
        const { id } = req.params;

        // Obtém os novos valores enviados no corpo da requisição.
        // O cliente enviará um JSON contendo os novos valores 
        //      para os campos "nome", "email" e "idade".
        const { nome, email, idade } = req.body;

        // Usa o modelo "Usuario" para localizar o usuário 
        //      pelo ID e atualizar seus dados.
        // A função "findByIdAndUpdate()" recebe:
        // - O ID do usuário a ser atualizado.
        // - Um objeto contendo os novos valores dos campos a serem modificados.
        await Usuario.findByIdAndUpdate(id, { nome, email, idade });

        // Retorna uma resposta JSON informando que a 
        //      atualização foi realizada com sucesso.
        res.json({ mensagem: 'Usuário atualizado com sucesso!' });

    // Caso ocorra algum erro, o código dentro deste 
    //      bloco será executado.
    } catch (erro) { 

        // Define o status da resposta HTTP como 500 (Erro interno do servidor).
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro });

    }
});


// Rota para excluir um usuário
// Cria uma rota HTTP do tipo DELETE para excluir um 
//      usuário existente no banco de dados.
// O método DELETE é usado para remover um registro do 
//      banco de dados permanentemente.
// A URL "/usuarios/:id" significa que o ID do usuário será 
//      passado como um parâmetro na URL.
// Exemplo de requisição: DELETE http://localhost:3000/usuarios/65a123bcde456f7890123456
app.delete('/usuarios/:id', async (req, res) => {

    // Utiliza um bloco "try-catch" para capturar possíveis 
    //      erros durante a exclusão do usuário.
    try {

        // Obtém o ID do usuário a ser excluído a partir dos parâmetros da URL.
        // O ":id" na URL significa que qualquer valor passado nessa 
        //      posição será capturado e armazenado na variável "id".
        const { id } = req.params;

        // Usa o modelo "Usuario" para localizar o usuário pelo ID e 
        //      removê-lo do banco de dados.
        // A função "findByIdAndDelete()" recebe o ID do usuário e 
        //      exclui o registro correspondente no banco de dados.
        await Usuario.findByIdAndDelete(id);

        // Retorna uma resposta JSON informando que a exclusão 
        //      foi realizada com sucesso.
        res.json({ mensagem: 'Usuário removido com sucesso!' });

    // Caso ocorra algum erro, o código dentro deste 
    //      bloco será executado.
    } catch (erro) { 

        // Define o status da resposta HTTP como 500 (Erro interno do servidor).
        res.status(500).json({ mensagem: 'Erro ao excluir usuário', erro });

    }

});


// Rota para filtrar usuários por nome ou email
// Cria uma rota HTTP do tipo GET para buscar usuários com base 
//      em um termo de pesquisa (nome ou e-mail).
// O método GET é utilizado para buscar informações no banco de 
//      dados sem modificar nada.
// A URL "/usuarios/filtro/:termo" significa que o cliente enviará um 
//      termo de busca como parte da URL.
// Exemplo de requisição: GET http://localhost:3000/usuarios/filtro/jose
app.get('/usuarios/filtro/:termo', async (req, res) => {

    // Utiliza um bloco "try-catch" para capturar possíveis erros 
    //      durante a busca dos usuários filtrados.
    try {

        // Obtém o termo de busca enviado na URL e armazena na variável "termo".
        // O ":termo" na URL significa que qualquer palavra colocada 
        //      nesta posição será capturada e armazenada em req.params.termo.
        const { termo } = req.params;

        // Usa o modelo "Usuario" para buscar no banco de dados usuários 
        //      cujo nome ou email contenha o termo pesquisado.
        // A função "find()" recebe um objeto com critérios de pesquisa.
        const usuariosFiltrados = await Usuario.find({

            // O operador "$or" significa que a busca retornará usuários 
            //      que atendam a pelo menos um dos critérios abaixo.
            $or: [ 

                // Procura o termo no campo "nome", ignorando 
                //      maiúsculas e minúsculas.
                { nome: { $regex: termo, $options: 'i' } }, 

                // Procura o termo no campo "email", ignorando 
                //      maiúsculas e minúsculas.
                { email: { $regex: termo, $options: 'i' } } 

            ]
        });

        // Retorna a lista de usuários que correspondem ao 
        //      filtro em formato JSON.
        res.json(usuariosFiltrados);

    // Caso ocorra algum erro, este bloco será executado.
    } catch (erro) { 

        // Define o status da resposta HTTP como 500 (Erro interno do servidor).
        // Retorna uma mensagem de erro informando que houve um 
        //      problema ao buscar os usuários filtrados.
        res.status(500).json({ mensagem: 'Erro ao filtrar usuários', erro });

    }
});


// Inicia o servidor na porta 3000
// Inicia o servidor Express na porta 3000.
// A função "listen()" faz com que o servidor fique ativo e pronto 
//      para receber requisições de clientes (frontend, 
//      Postman, navegadores, etc.).
app.listen(3000, () => { 

    // Quando o servidor inicia com sucesso, esta mensagem é 
    //      exibida no console do terminal.
    // Isso indica que o backend está rodando corretamente e 
    //      pronto para receber requisições.
    console.log('Servidor rodando na porta 3000'); 

});