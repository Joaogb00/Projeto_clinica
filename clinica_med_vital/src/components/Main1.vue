<template>
  <section class="secao_inicial" id="inicio">
    <div class="conteudo">
      <h1 class="titulo">Med Vital</h1>
      <div class="txt">
        <p class="txt1">Bem-estar começa aqui.</p>
        <p class="txt1">Seu corpo merece o melhor cuidado.</p>
        <RouterLink class="agendamento" to="/agendamento">Agende sua consulta</RouterLink>
      </div>
    </div>

    <!-- Ícone do menu -->
    <i id="icon" class="bi bi-list" @click="toggleMenu"></i>

    <!-- Menu lateral -->
    <div class="menu" :class="{ aberto: menuAberto }">
      <i class="bi bi-x close" @click="toggleMenu"></i>
      <ul>
        <li><a href="#inicio" @click="toggleMenu">Início</a></li>
        <li><a href="#servicos" @click="toggleMenu">Serviços</a></li>
        
        <li><RouterLink to="/agendamento">Agendamento</RouterLink></li>
        <li><a href="#contato" @click="toggleMenu">Contato</a></li>
        <li>  <i id="icone" class="bi bi-person"></i><RouterLink to="/perfil">Minha conta</RouterLink></li>
      </ul>
    </div>
  </section>

  <!-- Seções abaixo -->
  <Main2/>
</template>

<script>
import Main2 from './Main2.vue';

export default {
  name: 'Main1',
  data() {
    return {
      menuAberto: false
    }
  },
  components: {
    Main2
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth; /* scroll suave */
}

/* --- SEU CSS já existente --- */
.secao_inicial {
  background-image: url(../assets/img/inicio2.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.34);
}
.conteudo {
  text-align: center;
  margin-bottom: 200px;
}

.titulo {
  font-family: "Poppins", sans-serif;
  font-size: 80px;
  color: #1c4272;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  -webkit-text-stroke: 1px white;
  margin-bottom: 20px;
  position: relative;
}

.titulo::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 4px;
  background: #0D3B66;
  animation: underline 2s ease forwards 2s;
}

.txt1 {
  font-family: "Poppins", sans-serif;
  font-size: 25px;
  color: #0D3B66;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  -webkit-text-stroke: 0.5px white;
  margin-top: 10px;
  font-weight: bolder;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes underline {
  from { width: 0; }
  to { width: 100%; }
}

#icon {
  font-size: 40px;
  position: fixed;
  top: 10px;
  left: 30px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1001;
}
#icon:hover {
  color: white;
}

/* Menu lateral */
.menu {
  position: fixed;
  top: 0;
  left: -300px; /* escondido */
  width: 250px;
  height: 100%;
  background: #0D3B66;
  color: white;
  padding: 60px 20px;
  transition: 0.3s;
  z-index: 1000;
}

.menu.aberto {
  left: 0; /* aparece */
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
#icone{
  color: white;
}
#icone:hover{
 
  color:  #A7CDEE;
}
.agendamento {
  text-decoration: none;
  padding: 15px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  color: #0D3B66;
  font-size: 15px;
  text-align: center;
  width: 200px;
  transition: 0.5s;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.178);
  position: relative;
  top: 80px;
 
  animation: fadeIn 2s ease forwards;
  
  
}
.agendamento:hover {
  background-color: #0D3B66;
  color: white;
  
  animation: fadeIn 2s ease forwards;
  
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes underline {
  from { width: 0; }
  to { width: 100%; }
}

</style>
