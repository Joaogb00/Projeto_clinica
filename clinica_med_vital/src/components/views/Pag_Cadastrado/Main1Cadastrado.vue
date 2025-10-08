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
        <li><a href="#sobre" @click="toggleMenu">Sobre</a></li>
        <li><a href="#servicos" @click="toggleMenu">Serviços</a></li>
        <li><RouterLink to="/agendamento" @click="toggleMenu">Agendar Cosulta</RouterLink></li>
        <li><RouterLink to="/medicos" @click="toggleMenu">Medicos</RouterLink></li>
        <li><RouterLink to="/minhasconsultas" @click="toggleMenu">Minhas Consultas</RouterLink></li>
        <li>
          <i id="icone" class="bi bi-person"></i>
          <RouterLink to="/conta" @click="toggleMenu">Minha conta</RouterLink>
        </li>
      </ul>
    </div>
  </section>

  <!-- Outras seções -->
  <Main2/>
</template>

<script>


export default {
  name: 'Main1Cadastrado',
  data() {
    return {
      menuAberto: false
    }
  },
  components: {
    
  },
  methods: {
    toggleMenu() {
      this.menuAberto = !this.menuAberto
    }
  },
  mounted() {
    const icon = document.getElementById("icon");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        icon.classList.add("scrolled");
      } else {
        icon.classList.remove("scrolled");
      }
    });
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* --- Hero section --- */
.secao_inicial {
  background: url(@/assets/img/inicio2.jpg) no-repeat center center/cover;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.25);
}

.conteudo {
  text-align: center;
  margin-bottom: 180px;
  color: #fff;
  z-index: 2;
}

.titulo {
  font-family: "Poppins", sans-serif;
  font-size: 72px;
  color: #1c4272;
  opacity: 0;
  animation: fadeIn 1.8s ease forwards;
  -webkit-text-stroke: 1px #fff;
  margin-bottom: 15px;
  position: relative;
}

.titulo::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 4px;
  background: #0D3B66;
  animation: underline 2s ease forwards 2s;
}

.txt1 {
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  color: #0D3B66;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  -webkit-text-stroke: 0.5px #fff;
  margin-top: 8px;
  font-weight: 600;
}

/* Botão */
.agendamento {
  display: inline-block;
  margin-top: 50px;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #0D3B66;
  background: linear-gradient(135deg, #fff, #f1f1f1);
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  transition: all 0.4s ease;
}
.agendamento:hover {
  background: linear-gradient(135deg, #0D3B66, #145a92);
  color: #fff;
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 18px rgba(0,0,0,0.25);
}

/* Ícone menu */
#icon {
  font-size: 38px;
  position: fixed;
  top: 20px;
  left: 25px;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 1001;
  color: #A7CDEE;
}

#icon:hover {
  color: #0D3B66;
}

/* classe que será aplicada ao descer a página */
#icon.scrolled {
  color: #0D3B66;
}

/* Menu lateral */
.menu {
  position: fixed;
  top: 0;
  left: -280px;
  width: 250px;
  height: 100%;
  background: #0D3B66;
  color: white;
  padding: 60px 20px;
  transition: left 0.35s ease;
  z-index: 1000;
  box-shadow: 4px 0 12px rgba(0,0,0,0.3);
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
  margin-top: 60px;
}

.menu ul li {
  margin: 22px 0;
  display: flex;
  align-items: center;
  gap: 10px;
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
  font-size: 20px;
}
#icone:hover {
  color: #A7CDEE;
}

/* Animações */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes underline {
  from { width: 0; }
  to { width: 100%; }
}
</style>
