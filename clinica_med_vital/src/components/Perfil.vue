<template>
  <section>
    <!-- Ícone do menu -->
    <i id="icon" class="bi bi-list" @click="toggleMenu"></i>

    <!-- Menu lateral -->
    <div class="menu" :class="{ aberto: menuAberto }">
      <i class="bi bi-x close" @click="toggleMenu"></i>
      <ul>
        <li><RouterLink to="/main1">Início</RouterLink></li>
        <li><a href="#agendamento" @click="toggleMenu">Agendamento</a></li>
        <li><a href="#contato" @click="toggleMenu">Contato</a></li>
        <li><i id="icone" class="bi bi-person"></i><RouterLink to="/perfil">Minha conta</RouterLink></li>
      </ul>
    </div>

    <!-- Seção de perfil -->
    <section class="perfil-container">
      <h2>Meu Perfil</h2>

      <form class="perfil-form">
        <div class="campo">
          <label>Nome:</label>
          <input type="text" v-model="usuario.nome" readonly>
        </div>

        <div class="campo">
          <label>Email:</label>
          <input type="text" v-model="usuario.email" readonly>
        </div>

        <div class="campo">
          <label>CPF:</label>
          <input type="text" v-model="usuario.cpf" readonly>
        </div>

        <div class="campo">
          <label>Telefone:</label>
          <input type="text" v-model="usuario.telefone" readonly>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Perfil',
  data() {
    return {
      menuAberto: false,
      usuario: {
        nome: '',
        email: '',
        cpf: '',
        telefone: ''
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto
    }
  },
  mounted() {
    // Buscar os dados do localStorage
    const dadosSalvos = localStorage.getItem('usuario')
    if (dadosSalvos) {
      this.usuario = JSON.parse(dadosSalvos)
    }
  }
}
</script>

<style>
body {
  background-color: white;
}

.menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 250px;
  height: 100%;
  background: #0D3B66;
  color: white;
  padding: 60px 20px;
  transition: 0.3s;
  z-index: 1000;
}

.menu.aberto {
  left: 0;
}

.menu .close {
  font-size: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: 0.3s;
}

.menu ul li a:hover {
  color: #A7CDEE;
}

#icone {
  color: white;
}

#icone:hover {
  color: #A7CDEE;
}

.perfil-container {
  margin: 100px auto;
  width: 400px;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.perfil-form .campo {
  margin-bottom: 20px;
}

.perfil-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.perfil-form input {
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
}
</style>
