<template>
  <RouterLink to="/cadastrado" class="btn-home"> <i class="bi bi-house-door-fill"></i> </RouterLink>
  <section class="marcar-consulta">
    <h1>Marcar Consulta</h1>
    <form @submit.prevent="enviarFormulario">

      <!-- Nome do paciente -->
      <label>Paciente:</label>
      <input v-model="form.paciente" type="text" placeholder="Digite seu nome completo" required />

      <!-- Seleção do médico -->
      <label>Médico:</label>
      <select v-model="form.medico" required>
        <option value="" disabled>Selecione um médico</option>
        <option value="Dr João Gabriel">Dr João Gabriel</option>
        <option value="Dr Miguel Augusto">Dr Miguel Augusto</option>
        <option value="Dr Pietro">Dr Pietro</option>
        <option value="Dr Vitor Vieira">Dr Vitor Vieira</option>
      </select>

      <!-- Data -->
      <label>Data:</label>
      <input v-model="form.data" type="date" required />

      <!-- Horário -->
      <label>Horário:</label>
      <input v-model="form.hora" type="time" required />

      <!-- Descrição -->
      <label>Descrição:</label>
      <textarea v-model="form.descricao" placeholder="Ex: Dores, alergias..." required></textarea>

      <button type="submit">Confirmar</button>
    </form>

    <!-- Mensagem só aparece depois do envio -->
    <p v-if="mensagemVisivel" :class="['mensagem', sucesso ? 'sucesso' : 'erro']">{{ mensagem }}</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "MarcarConsulta",
  data() {
    return {
      form: {
        paciente: "",
        medico: "",
        data: "",
        hora: "",
        descricao: ""
      },
      mensagem: "",
      mensagemVisivel: false,
      sucesso: true
    };
  },
  methods: {
    async enviarFormulario() {
      try {
        const res = await axios.post("http://localhost:3000/marcar-consulta", this.form, {
          headers: { "Content-Type": "application/json" }
        });
        this.mensagem = res.data.mensagem;
        this.sucesso = true;
        this.mensagemVisivel = true;

        // Limpa formulário
        this.form = { paciente: "", medico: "", data: "", hora: "", descricao: "" };

        // Esconde mensagem depois de 5 segundos
        setTimeout(() => {
          this.mensagemVisivel = false;
        }, 5000);

      } catch (err) {
        console.error("Erro ao marcar consulta:", err.response ? err.response.data : err);
        this.mensagem = "Erro ao marcar consulta! Veja o console para detalhes.";
        this.sucesso = false;
        this.mensagemVisivel = true;

        // Esconde mensagem depois de 5 segundos
        setTimeout(() => {
          this.mensagemVisivel = false;
        }, 5000);
      }
    }
  }
};
</script>

<style>
.marcar-consulta {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: #e3f2fd;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}
.marcar-consulta h1 {
  text-align: center;
  color: #0D3B66;
  margin-bottom: 20px;
}
.marcar-consulta form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.marcar-consulta input, 
.marcar-consulta select, 
.marcar-consulta textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}
.marcar-consulta button {
  padding: 12px;
  background: #0D3B66;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}
.marcar-consulta button:hover {
  background: #145a92;
}

/* Mensagem */
.mensagem {
  margin-top: 15px;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  animation: fadeOut 0.5s ease-in-out 4.5s forwards; /* some suavemente após 4.5s */
}
.sucesso {
  color: #fff;
  background-color: #28a745;
}
.erro {
  color: #fff;
  background-color: #dc3545;
}

/* Animação de desaparecimento */
@keyframes fadeOut {
  to { opacity: 0; }
}
</style>
