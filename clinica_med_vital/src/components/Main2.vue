<template>
<section class="main2" id="servicos">
  <h1 id="title">Serviços</h1>
 
  <div class="elementos">
    <div class="ele1"><h1>Consultas médicas gerais</h1>
      <p>prevenção, diagnóstico e acompanhamento de doenças comuns.</p>
      <div class="imagens"><img src="/src/assets/img/consulta.geral1.jpg" alt=""></div> 
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Pediatria</h1>
      <p>cuidados de saúde para crianças e adolescentes.</p>
      <div class="imagens"><img src="/src/assets/img/consulta de pediatria.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Geriatria</h1>
      <p>acompanhamento da saúde do idoso.</p>
      <div class="imagens"><img src="/src/assets/img/consulta.Geriatria1.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Clínica de prevenção</h1>
      <p>check-ups, exames de rotina e vacinação.</p>
      <div class="imagens"><img src="/src/assets/img/consulta.preveçao.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Dermatologia básica</h1>
      <p>avaliação de pele, unhas e cabelo.</p>
      <div class="imagens"><img src="/src/assets/img/dermatologia.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Acompanhamento de doenças crônicas</h1>
      <p>hipertensão, diabetes, colesterol alto.</p>
      <div class="imagens"><img src="/src/assets/img/Acompanhamento de doenças crônicas1.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Atendimento de urgência leve </h1>
      <p>pequenos cortes, febres, infecções leves.</p>
      <div class="imagens"><img src="/src/assets/img/leve.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Exames laboratoriais e de imagem</h1>
      <p>coleta de sangue, raio-X, ultrassom básico.</p>
      <div class="imagens"><img src="/src/assets/img/laboratorio (2).jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Nutrição e orientação alimentar</h1>
      <p>aconselhamento para uma alimentação saudável.</p>
      <div class="imagens"><img src="/src/assets/img/consulta.nutriçao.jpg" alt=""></div>
      <RouterLink to="/marcar" class="marcar">Marcar Consulta</RouterLink>
    </div>

    <div class="ele1"><h1>Saúde mental</h1>
      <p>encaminhamento ou atendimento básico psicológico.</p>
      <div class="imagens"><img src="/src/assets/img/consulta saude mental.jpg" alt=""></div>
      <RouterLink to="" class="marcar">Marcar Consulta</RouterLink>
    </div>
  </div>

  <button v-show="mostrarTopo" class="btn-topo" @click="voltarAoTopo">⬆</button>
</section>
</template>

<script>
export default {
  name: 'Main2',
  data() {
    return {
      mostrarTopo: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.verificarScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.verificarScroll);
  },
  methods: {
    verificarScroll() {
      this.mostrarTopo = window.scrollY > 200;
    },
    voltarAoTopo() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
</script>

<style>
.main2{
  margin-top: 10vh;
}
*{
    padding: 0;
    margin: 0
}
.elementos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 30px;
  margin-top: 50px;
}
.ele1 {
  cursor: pointer;
  background-color: #E3F2FD;
  padding: 30px;
  border-radius: 15px;
  color: #0D3B66;
  box-shadow: 10 10px 15px rgba(13, 59, 102, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ele1, h1 {
  font-size: 25px;
}
@keyframes pulseHover {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1.05); }
}
.ele1:hover {
  animation: pulseHover 0.4s forwards;
  box-shadow: 0 8px 20px rgba(13, 59, 102, 0.2);
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.marcar {
  text-decoration: none;
  padding: 15px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  color: #0D3B66;
  font-size: 15px;
  text-align: center;
  width: 200px;
  transition: 0.5s;
  position: absolute;
  bottom: -16px;
  left: 20%;
  transform: translateY(-50%);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.178);
  
}
.marcar:hover {
  background-color: #4DB6AC;
  color: white;
}
#title{
  text-align: center;
  font-size: 30px;
  text-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
  color: black;
}
#linha{
  background:linear-gradient(to left,  #0D3B66,#4DB6AC);
  width: 100px;
  display: flex;
}
#title{
  font-family: "Poppins", sans-serif;
  font-size: 0px;
  color: #1c4272;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  -webkit-text-stroke: 1px white;
  margin-bottom: 20px;
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 4px;
  background: #0D3B66;
  animation: underline 2s ease forwards 2s;
}
img{
  border-radius: 20px;
  object-fit: cover;
  height: 200px;
  width: 250px;
  margin-top: 40px;
}
.imagens{
  position: absolute;
  margin-top: 40vh;
}
.btn-topo {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #0D3B66;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: 0.3s;
  width: 60px;
  z-index: 999;
}
.btn-topo:hover {
  background: #4DB6AC;
}
</style>
