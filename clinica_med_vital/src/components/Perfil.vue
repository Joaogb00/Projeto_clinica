<template>

<section>

    <i id="icon" class="bi bi-list" @click="toggleMenu"></i>

    <!-- Menu lateral -->
    <div class="menu" :class="{ aberto: menuAberto }">
      <i class="bi bi-x close" @click="toggleMenu"></i>
      <ul>
        <li><RouterLink to="/main1">Inicio</RouterLink></li>
        
        
        <li><a href="#agendamento" @click="toggleMenu">Agendamento</a></li>
        <li><a href="#contato" @click="toggleMenu">Contato</a></li>
        <li>  <i id="icone" class="bi bi-person"></i><RouterLink to="/perfil">Minha conta</RouterLink></li>
      </ul>
    </div>
  </section>

  <!-- Seções abaixo -->
 
</template>

<script>
export default{
    name:  'Perfil',
    data(){
        return{
            menuAberto: false
        }
    },
    methods:{
        toggleMenu() {
      this.menuAberto = !this.menuAberto
    }
    }
}
</script>
<style>
body{
    background-color: white;
}
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
</style>