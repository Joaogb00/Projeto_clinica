<template>
  <section class="marcar-consulta">
    <h1>📅 Marcar Consulta</h1>
    <form>
      <label for="nome">Nome:</label>
      <input type="text" id="nome" />

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
  margin: 50px auto;
  padding: 30px;
  background: #e3f2fd;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.marcar-consulta h1 {
  text-align: center;
  color: #0D3B66;
  margin-bottom: 20px;
}
.marcar-consulta form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.marcar-consulta input,
.marcar-consulta select,
.marcar-consulta button {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.marcar-consulta button {
  background: #4DB6AC;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
}
.marcar-consulta button:hover {
  background: #0D3B66;
}
</style>
