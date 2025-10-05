<template>
  <section class="secao-cadastro">
    <h1 class="medic">Dashboard Médico</h1>

    <div v-if="consultas.length === 0" style="text-align:center; margin-top:20px;">
      Nenhuma consulta cadastrada.
    </div>

    <div v-else class="consultas-container">
      <div v-for="consulta in consultas" :key="consulta._id" class="consulta-card">
        <p><strong>Paciente:</strong> {{ consulta.paciente || "Não informado" }}</p>
        <p><strong>Médico:</strong> {{ consulta.medico || "Não informado" }}</p>
        <p><strong>Data:</strong> {{ consulta.data }}</p>
        <p><strong>Hora:</strong> {{ consulta.hora }}</p>
        <p><strong>Descrição:</strong> {{ consulta.descricao }}</p>
        <p><strong>Status:</strong> {{ consulta.status }}</p>

        <div class="botoes">
          <button @click="concluirConsulta(consulta._id)" class="btn-concluir">Concluída</button>
          <button @click="desmarcarConsulta(consulta._id)" class="btn-desmarcar">Desmarcar</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      consultas: []
    };
  },
  created() {
    if(localStorage.getItem("medicoLogado") !== "true") {
      this.$router.push({ name: "LoginMedico" });
    } else {
      this.carregarConsultas();
    }
  },
  methods: {
    async carregarConsultas() {
      try {
        const res = await axios.get("http://localhost:3000/consultas");
        this.consultas = res.data;
      } catch(err) {
        console.error("Erro ao carregar consultas:", err);
      }
    },

    async concluirConsulta(id) {
      try {
        await axios.put(`http://localhost:3000/consultas/${id}`, { status: "Concluída" });
        this.carregarConsultas();
      } catch(err) {
        console.error("Erro ao concluir consulta:", err);
      }
    },

    async desmarcarConsulta(id) {
      try {
        await axios.delete(`http://localhost:3000/consultas/${id}`);
        this.carregarConsultas();
      } catch(err) {
        console.error("Erro ao desmarcar consulta:", err);
      }
    }
  }
};
</script>

<style>
.secao-cadastro {
  background: #e3f2fd;
  min-height: 100vh;
  padding: 30px;
}

.medic {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #0D3B66;
  margin-bottom: 20px;
}

.consultas-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.consulta-card {
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.botoes {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.btn-concluir {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-desmarcar {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-concluir:hover { background: #218838; }
.btn-desmarcar:hover { background: #c82333; }
</style>
