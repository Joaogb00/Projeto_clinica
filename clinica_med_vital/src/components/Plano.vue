<template>
  <RouterLink to="/" class="btn-home">
    <i class="bi bi-house-door-fill"></i>
  </RouterLink>

  <section class="planos">
    <div class="container">
      <h2 class="titulo">Nossos Planos</h2>
      <p class="descricao">
        Escolha o plano ideal para cuidar da sua saúde com conforto, agilidade e acompanhamento especializado.
      </p>

      <div class="cards">
        <div class="card" v-for="plano in planos" :key="plano.nome">
          <h3 class="nome-plano">{{ plano.nome }}</h3>
          <p class="detalhe">{{ plano.descricao }}</p>
          <ul>
            <li v-for="item in plano.itens" :key="item">✔ {{ item }}</li>
          </ul>
          <p class="preco">R$ {{ plano.valor }}/mês</p>
          <button class="botao" @click="abrirPagamento(plano.nome, plano.valor)">Escolher</button>
        </div>
      </div>
    </div>

    <!-- MODAL DE PAGAMENTO -->
    <div v-if="mostrarModal" class="overlay" @click.self="fecharModal">
      <div class="modal">
        <h3>Pagamento - {{ planoSelecionado }}</h3>
        <p class="valor">Valor: R$ {{ valorSelecionado }}/mês</p>

        <div class="opcoes-pagamento">
          <label><input type="radio" value="boleto" v-model="metodoPagamento" /> Boleto Bancário</label>
          <label><input type="radio" value="pix" v-model="metodoPagamento" /> Pix</label>
          <label><input type="radio" value="cartao" v-model="metodoPagamento" /> Cartão de Crédito</label>
        </div>

        <!-- PIX -->
        <div v-if="metodoPagamento === 'pix'" class="pix-container">
          <p>Escaneie o QR Code abaixo para efetuar o pagamento:</p>
          <img :src="qrCodeSrc" alt="QR Code Pix" class="qrcode" />
        </div>

        <!-- BOLETO -->
        <div v-if="metodoPagamento === 'boleto'" class="boleto-container">
          <p>Um boleto será gerado e enviado para seu e-mail cadastrado.</p>
          <button class="btn-confirmar">Gerar Boleto</button>
        </div>

        <!-- CARTÃO -->
        <div v-if="metodoPagamento === 'cartao'" class="cartao-container">
          <p>Preencha os dados do seu cartão:</p>
          <input type="text" placeholder="Número do Cartão" />
          <input type="text" placeholder="Nome no Cartão" />
          <div class="linha">
            <input type="text" placeholder="Validade (MM/AA)" />
            <input type="text" placeholder="CVV" />
          </div>
          <button class="btn-confirmar">Pagar com Cartão</button>
        </div>

        <button class="btn-fechar" @click="fecharModal">Fechar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlanosClinica",
  data() {
    return {
      planos: [
        { nome: "Plano Básico", descricao: "Consultas de rotina e exames simples.", itens: ["2 Consultas por mês", "Exames laboratoriais básicos", "Teleatendimento"], valor: 99 },
        { nome: "Plano Completo", descricao: "Perfeito para quem busca cobertura completa.", itens: ["Consultas ilimitadas", "Exames laboratoriais e de imagem", "Acompanhamento nutricional", "Telemedicina 24h"], valor: 199 },
        { nome: "Plano Premium", descricao: "Cuidado completo com prioridade total.", itens: ["Consultas ilimitadas", "Todos os exames inclusos", "Atendimento domiciliar", "Check-up anual completo"], valor: 299 },
      ],
      mostrarModal: false,
      planoSelecionado: "",
      valorSelecionado: 0,
      metodoPagamento: "",
      qrCodeSrc: "/img/qr_code.jpeg",
    };
  },
  methods: {
    abrirPagamento(plano, valor) {
      this.planoSelecionado = plano;
      this.valorSelecionado = valor;
      this.metodoPagamento = "";
      this.mostrarModal = true;
    },
    fecharModal() {
      this.mostrarModal = false;
    },
  },
};
</script>

<style scoped>
/* ---------- SEÇÃO PRINCIPAL ---------- */
.planos {
  padding: 80px 20px;
  
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #1e293b;
}

.titulo {
  font-size: 2.2rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 10px;
}

.descricao {
  font-size: 1.1rem;
  color: #475569;
  max-width: 650px;
  margin: 0 auto 50px;
}

/* ---------- CARDS ---------- */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 10px 25px rgba(3, 102, 214, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(3, 102, 214, 0.15);
}

.nome-plano {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0284c7;
  margin-bottom: 8px;
}

.detalhe {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.card ul {
  list-style: none;
  padding: 0;
  color: #334155;
  margin-bottom: 15px;
  text-align: left;
}

.card li {
  margin-bottom: 6px;
  font-size: 0.95rem;
}

.preco {
  font-size: 1.3rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 10px;
}

/* ---------- BOTÕES ---------- */
.botao {
  background: #0284c7;
  color: #fff;
  border: none;
  padding: 12px 26px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.botao:hover {
  background: #0369a1;
}

/* ---------- MODAL ---------- */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(4px);
}

.modal {
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  width: 90%;
  max-width: 520px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(3, 102, 214, 0.15);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.valor {
  font-size: 1.2rem;
  color: #0284c7;
  margin-bottom: 10px;
}

.opcoes-pagamento {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  color: #334155;
}

.qrcode {
  width: 250px;
  height: 250px;
  margin-top: 15px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(2, 132, 199, 0.1);
}

/* ---------- CAMPOS DE CARTÃO ---------- */
.cartao-container input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 0.95rem;
}

.linha {
  display: flex;
  gap: 10px;
}

.btn-confirmar {
  background: #0ea5e9;
  color: #fff;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 12px;
  font-weight: 500;
  transition: background 0.3s;
}

.btn-confirmar:hover {
  background: #0284c7;
}

.btn-fechar {
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 500;
  transition: background 0.3s;
}

.btn-fechar:hover {
  background: #dc2626;
}
</style>
