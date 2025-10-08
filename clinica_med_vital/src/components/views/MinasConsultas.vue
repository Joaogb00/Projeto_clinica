<template>
   <RouterLink to="/cadastrado" class="btn-home"> <i class="bi bi-house-door-fill"></i> </RouterLink>
  <section class="minhas-consultas">
    <h1>Minhas Consultas</h1>

    <div v-if="consultas.length === 0" class="nenhuma">
      Nenhuma consulta agendada.
    </div>

    <ul v-else class="lista-consultas">
      <li v-for="consulta in consultas" :key="consulta._id">
        <p><strong>Paciente:</strong> {{ consulta.paciente || 'Não informado' }}</p>
        <p><strong>Médico:</strong> {{ consulta.medico || 'Não informado' }}</p>
        <p><strong>Data:</strong> {{ consulta.data }}</p>
        <p><strong>Horário:</strong> {{ consulta.hora }}</p>
        <p><strong>Descrição:</strong> {{ consulta.descricao }}</p>
        <p><strong>Status:</strong> {{ consulta.status }}</p>
        <button @click="desmarcarConsulta(consulta._id)">Desmarcar</button>
      </li>
    </ul>

    <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "MinhasConsultas",
  data() {
    return {
      consultas: [],
      mensagem: ""
    };
  },
  mounted() {
    this.carregarConsultas();
  },
  methods: {
    async carregarConsultas() {
      try {
        const res = await axios.get("http://localhost:3000/consultas");
        this.consultas = res.data;
      } catch (err) {
        console.error("Erro ao carregar consultas:", err.response ? err.response.data : err);
        this.mensagem = "Erro ao carregar consultas! Veja o console para detalhes.";
        setTimeout(() => { this.mensagem = ""; }, 5000);
      }
    },
    async desmarcarConsulta(id) {
      if (!confirm("Tem certeza que deseja desmarcar esta consulta?")) return;

      try {
        await axios.delete(`http://localhost:3000/consultas/${id}`);
        this.mensagem = "Consulta desmarcada com sucesso!";
        setTimeout(() => { this.mensagem = ""; }, 5000);
        this.carregarConsultas(); // Atualiza a lista após deletar
      } catch (err) {
        console.error("Erro ao desmarcar consulta:", err.response ? err.response.data : err);
        this.mensagem = "Erro ao desmarcar consulta! Veja o console para detalhes.";
        setTimeout(() => { this.mensagem = ""; }, 5000);
      }
    }
  }
};
</script>

<style>
.minhas-consultas {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: #e8f0fe;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
.minhas-consultas h1 {
  text-align: center;
  color: #0D3B66;
  margin-bottom: 20px;
}
.lista-consultas {
  list-style: none;
  padding: 0;
}
.lista-consultas li {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 8px;
}
.lista-consultas li p {
  margin: 4px 0;
}
.lista-consultas li button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.lista-consultas li button:hover {
  background: #a71d2a;
}
.mensagem {
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
  color: #0D3B66;
}
.nenhuma {
  text-align: center;
  font-style: italic;
  color: #555;
}
</style>
