<template>
    <RouterLink to="/main1" class="btn-home">
    <i class="bi bi-house-door-fill"></i> 
  </RouterLink>
  <section class="medicos">
    <h1 class="titulo fade-in">Nossos Médicos</h1>

    <div class="grid-medicos">
      <div class="card-medico fade-in" v-for="(medico, i) in medicos" :key="i">
        <img :src="medico.foto" alt="Foto do médico" class="foto-medico" />
        <h2>{{ medico.nome }}</h2>
        <p class="especialidade">{{ medico.especialidade }}</p>
        <RouterLink to="/agendamento" class="btn-marcar">Marcar Consulta</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Medicos",
  data() {
    return {
      medicos: [
        {
          nome: "Dr. João Gabriel",
          especialidade: "Cardiologista e Psicologo ",
          foto: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
        },
        {
          nome: "Dra. Mariana Costa",
          especialidade: "Dermatologista, Acompanhamento de doenças crônicas e Preveção",
          foto: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
        },
        {
          nome: "Dr. Pietro Moreira",
          especialidade: "Ortopedista e Nutrição",
          foto: "https://cdn-icons-png.flaticon.com/512/3774/3774253.png",
        },
        {
          nome: "Dr. Miguel Augusto",
          especialidade: "Pediatria, Geriatria, Raio-X e Ultrassom",

          foto: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
        },
      ],
    };
  },
};
</script>

<style>
.medicos {
  max-width: 1100px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
}
.titulo {
  font-size: 2.3rem;
  color: #0D3B66;
  margin-bottom: 40px;
}
.grid-medicos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.card-medico {
  background: #fff;
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-medico:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}
.foto-medico {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #0D3B66;
  margin-bottom: 15px;
}
.card-medico h2 {
  color: #0D3B66;
  font-size: 1.3rem;
  margin-bottom: 6px;
}
.especialidade {
  font-size: 15px;
  color: #444;
  margin-bottom: 18px;
}
.btn-marcar {
  background: #4DB6AC;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
}
.btn-marcar:hover {
  background: #37968c;
  transform: translateY(-3px);
}

/* Animações */
.fade-in {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}
.fade-in:nth-child(1) { animation-delay: 0.2s; }
.fade-in:nth-child(2) { animation-delay: 0.4s; }
.fade-in:nth-child(3) { animation-delay: 0.6s; }
.fade-in:nth-child(4) { animation-delay: 0.8s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
