<template>
  <section class="main2" id="servicos">
    <h1 class="title">Serviços</h1>

    <div class="elementos">
      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta.geral1.jpg" alt="Consulta geral">
        </div>
        <h2>Consultas médicas gerais</h2>
        <p>Prevenção, diagnóstico e acompanhamento de doenças comuns.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta de pediatria.jpg" alt="Pediatria">
        </div>
        <h2>Pediatria</h2>
        <p>Cuidados de saúde para crianças e adolescentes.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta.Geriatria1.jpg" alt="Geriatria">
        </div>
        <h2>Geriatria</h2>
        <p>Acompanhamento da saúde do idoso.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta.preveçao.jpg" alt="Clínica de prevenção">
        </div>
        <h2>Clínica de prevenção</h2>
        <p>Check-ups, exames de rotina e vacinação.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/dermatologia.jpg" alt="Dermatologia">
        </div>
        <h2>Dermatologia básica</h2>
        <p>Avaliação de pele, unhas e cabelo.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/Acompanhamento de doenças crônicas1.jpg" alt="Doenças crônicas">
        </div>
        <h2>Acompanhamento de doenças crônicas</h2>
        <p>Hipertensão, diabetes, colesterol alto.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/leve.jpg" alt="Urgência leve">
        </div>
        <h2>Atendimento de urgência leve</h2>
        <p>Pequenos cortes, febres, infecções leves.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/laboratorio (2).jpg" alt="Exames laboratoriais">
        </div>
        <h2>Exames laboratoriais e de imagem</h2>
        <p>Coleta de sangue, raio-X, ultrassom básico.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta.nutriçao.jpg" alt="Nutrição">
        </div>
        <h2>Nutrição e orientação alimentar</h2>
        <p>Aconselhamento para uma alimentação saudável.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
      </div>

      <div class="ele1">
        <div class="imagens">
          <img src="/src/assets/img/consulta saude mental.jpg" alt="Saúde mental">
        </div>
        <h2>Saúde mental</h2>
        <p>Encaminhamento ou atendimento básico psicológico.</p>
        <RouterLink to="/agendamento" class="marcar">Marcar Consulta</RouterLink>
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main2 {
  margin-top: 10vh;
  padding: 20px;
  text-align: center;
}

.title {
  position: relative;
  display: inline-block;
  font-size: 36px;
  font-weight: bold;
  color: #0D3B66;
  margin-bottom: 30px;
}

.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #00E5FF, #6A00FF, #FF5DA2, #00E5FF);
  background-size: 300% 100%;
  animation: moverLinha 3s linear infinite;
  border-radius: 2px;
}

@keyframes moverLinha {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.elementos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.ele1 {
  background-color: #E3F2FD;
  padding: 25px;
  border-radius: 15px;
  color: #0D3B66;
  box-shadow: 0 6px 12px rgba(13, 59, 102, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.ele1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(13, 59, 102, 0.25);
}

.ele1 h2 {
  font-size: 22px;
  font-weight: bold;
}

.ele1 p {
  font-size: 15px;
  color: #333;
}

.imagens img {
  border-radius: 12px;
  object-fit: cover;
  height: 180px;
  width: 100%;
}

.marcar {
  text-decoration: none;
  padding: 12px 18px;
  background-color: #0D3B66;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  transition: 0.3s;
  margin-top: auto;
}

.marcar:hover {
  background-color: #4DB6AC;
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
  width: 55px;
  height: 55px;
  z-index: 999;
}

.btn-topo:hover {
  background: #4DB6AC;
}
</style>
