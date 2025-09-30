<template>
  <RouterLink to="/main1" class="btn-home">
    <i class="bi bi-house-door-fill"></i> 
  </RouterLink>
  <section class="marcar-consulta">

    <h1 class="fade-in">Marcar Consulta</h1>
    <form class="fade-in" @submit.prevent>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" placeholder="Digite seu nome completo" />

      <label for="especialidade">Especialidade:</label>
      <select id="especialidade">
        <option>Consultas médicas gerais</option>
        <option>Pediatria</option>
        <option>Geriatria</option>
        <option>Clínica de prevenção</option>
        <option>Dermatologia básica</option>
        <option>Acompanhamento de doenças crônicas</option>
        <option>Atendimento de urgência leve</option>
        <option>Exames laboratoriais e de imagem</option>
        <option>Nutrição e orientação alimentar</option>
        <option>Saúde mental</option>
      </select>

      <label for="data">Data:</label>
      <input type="date" id="data" />

      <label for="hora">Horário:</label>
      <input type="time" id="hora" />

      <button type="submit">Confirmar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "MarcarConsulta",
};
</script>

<style>
.marcar-consulta {
  max-width: 500px;
  margin: 60px auto;
  padding: 35px;
  background: #e3f2fd;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  animation: slideUp 1s ease forwards;
  opacity: 0;
}
.marcar-consulta h1 {
  text-align: center;
  color: #0D3B66;
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: bold;
  position: relative;
}
.marcar-consulta h1::after {
  content: "";
  width: 60px;
  height: 3px;
  background: #0D3B66;
  display: block;
  margin: 8px auto 0;
  border-radius: 2px;
}
.marcar-consulta form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.marcar-consulta label {
  font-weight: 600;
  color: #0D3B66;
}
.marcar-consulta input,
.marcar-consulta select {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s;
  font-size: 15px;
}
.marcar-consulta input:focus,
.marcar-consulta select:focus {
  border-color: #0D3B66;
  box-shadow: 0 0 8px rgba(13,59,102,0.3);
}
.marcar-consulta button {
  padding: 14px;
  background: linear-gradient(135deg, #4DB6AC, #0D3B66);
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: 0.4s ease;
  font-size: 16px;
}
.marcar-consulta button:hover {
  transform: translateY(-3px) scale(1.02);
  background: linear-gradient(135deg, #0D3B66, #145a92);
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* Animações */
.fade-in {
  opacity: 0;
  animation: fadeInUp 1.2s ease forwards;
}
.fade-in:nth-child(1) { animation-delay: 0.3s; }
.fade-in:nth-child(2) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #0D3B66;
  background: linear-gradient(135deg, #ffffff, #f1f1f1);
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  transition:  all 0.4s ease;
  margin: 20px;
}

.btn-home i {
  font-size: 18px;
}

.btn-home:hover {
  background: linear-gradient(135deg, #0D3B66, #145a92);
  color: #fff;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  padding: 12px 20px;
}
</style>
