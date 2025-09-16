<template>
  <section >
    <header>
      <div class="links">
        <a href="#" class="elementos">Serviços</a>
        <a href="#" class="elementos">Equipe</a>
        <a href="#" class="elementos">Agendamento</a>
        <a href="#" class="elementos">Contato</a>
      <div id="acessar">
        <a href="#"><i class="bi bi-person-circle" heigth="100px"></i></a>
        </div>
      </div>
    
    </header>
  </section>
</template>

<script>
export default{
    name: 'Header',
    components:{

    },
    data(){
        return{
        
    }
    }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
header{
  background-color: transparent;
  height: 100px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.295);
  display: flex;
  align-items: center;
  justify-content: center;
}
.links{
  display: flex;
  gap: 20px;
  
}
.elementos {
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 20px;
}

.elementos::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px; /* distancia da linha do texto */
  width: 100%;
  height: 2px;
  background: black;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.elementos:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
#acessar{
  position: absolute;
  right: 1px;
  margin-right: 100px;
  
}
.bi{
  font-size: 30px;
  color: black;
transition: .5s;
}
.bi:hover{

  font-size: 30px;
  color: gray;
  
}
</style>