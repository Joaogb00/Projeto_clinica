<template>
   <RouterLink to="/Formulario" class="btn-home"> <i class="bi bi-box-arrow-left"></i> </RouterLink>
  <section class="secao-cadastro">
    <h1 class="medic">Dashboard Médico</h1>

    <div v-if="consultas.length === 0" class="vazio">
      Nenhuma consulta cadastrada.
    </div>

    <div v-else class="consultas-container">
      <div
        v-for="consulta in consultas"
        :key="consulta._id"
        class="consulta-card"
      >
        <div class="info-consulta">
          <p><strong>Paciente:</strong> {{ consulta.paciente || "Não informado" }}</p>
          <p><strong>Médico:</strong> {{ consulta.medico || "Não informado" }}</p>
          <p><strong>Data:</strong> {{ consulta.data }}</p>
          <p><strong>Hora:</strong> {{ consulta.hora }}</p>
          <p><strong>Descrição:</strong> {{ consulta.descricao }}</p>
          <p><strong>Status:</strong> 
            <span :class="{'status-agendada': consulta.status === 'Agendada', 'status-concluida': consulta.status === 'Concluída'}">
              {{ consulta.status }}
            </span>
          </p>
        </div>

        <div class="botoes">
          <button @click="abrirModal('concluir', consulta._id)" class="btn-concluir">
            Concluir
          </button>
          <button @click="abrirModal('desmarcar', consulta._id)" class="btn-desmarcar">
            Desmarcar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmação -->
    <div v-if="modalVisivel" class="modal-overlay">
      <div class="modal">
        <h2>Confirmação</h2>
        <p>
          Tem certeza que deseja
          <strong v-if="acaoAtual === 'concluir'">concluir</strong>   <!-- esta linha faz isso-->
          <strong v-else>desmarcar</strong>
          esta consulta?
        </p>
        <div class="modal-botoes">
          <button @click="confirmarAcao" class="btn-confirmar">Sim</button>
          <button @click="fecharModal" class="btn-cancelar">Cancelar</button>
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
      consultas: [],
      modalVisivel: false,
      acaoAtual: null,
      idSelecionado: null
    };
  },
  created() {
    if (localStorage.getItem("medicoLogado") !== "true") {
      this.$router.push({ name: "FormMedico" }); // redireciona pro login se não estiver logado
    } else {
      this.carregarConsultas();
    }
  },
  methods: {
    async carregarConsultas() {
      try {
        const res = await axios.get("http://localhost:3000/consultas");
        this.consultas = res.data;
      } catch (err) {
        console.error("Erro ao carregar consultas:", err);
      }
    },

    abrirModal(acao, id) {
      this.acaoAtual = acao;
      this.idSelecionado = id;
      this.modalVisivel = true;
    },

    fecharModal() {
      this.modalVisivel = false;
      this.acaoAtual = null;
      this.idSelecionado = null;
    },

    async confirmarAcao() {
      try {
        if (this.acaoAtual === "concluir") {
          await axios.delete(`http://localhost:3000/consultas/${this.idSelecionado}`, {
            status: "Concluída"
          });
        } else if (this.acaoAtual === "desmarcar") {
          await axios.delete(`http://localhost:3000/consultas/${this.idSelecionado}`);
        }
        this.fecharModal();
        this.carregarConsultas();
      } catch (err) {
        console.error("Erro ao realizar ação:", err);
      }
    }
  }
};
</script>

<style scoped>
/* ====== CONTAINER PRINCIPAL ====== */
.secao-cadastro {
  background: linear-gradient(135deg, #e3f2fd, #f1f8e9);
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medic {
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #0D3B66;
  margin-bottom: 25px;
}

.vazio {
  font-size: 18px;
  text-align: center;
  color: #555;
  margin-top: 50px;
}

/* ====== CONSULTAS ====== */
.consultas-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 700px;
}

.consulta-card {
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.consulta-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.info-consulta p {
  margin: 6px 0;
  color: #333;
}

.status-agendada {
  color: #0D3B66;
  font-weight: 600;
}
.status-concluida {
  color: #28a745;
  font-weight: 600;
}

.botoes {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.btn-concluir,
.btn-desmarcar {
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-concluir {
  background-color: #28a745;
}
.btn-desmarcar {
  background-color: #dc3545;
}

.btn-concluir:hover {
  background-color: #218838;
}
.btn-desmarcar:hover {
  background-color: #c82333;
}

/* ====== MODAL ====== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal {
  background: white;
  padding: 30px 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  animation: fadeIn 0.3s ease;
}

.modal h2 {
  margin-bottom: 10px;
  color: #0D3B66;
}

.modal p {
  margin-bottom: 20px;
  color: #333;
}

.modal-botoes {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-confirmar {
  background: #28a745;
  color: white;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.btn-cancelar {
  background: #ccc;
  color: #333;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.btn-confirmar:hover {
  background: #218838;
}
.btn-cancelar:hover {
  background: #bbb;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
