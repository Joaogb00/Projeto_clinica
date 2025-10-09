<template>
     <RouterLink to="/" class="btn-home"> <i class="bi bi-house-door-fill"></i> </RouterLink>
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
      qrCodeSrc: "/img/qr_code.jpeg", // Coloque seu QR Code em public/img/qrcode.png
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
.planos {
  padding: 80px 20px;
 
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 10vh;
}
.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 30px;
  width: 300px;
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}
.botao {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.botao:hover {
  background: #1e3a8a;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  text-align: center;
}
.opcoes-pagamento {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.qrcode {
  width: 250px;
  height: 250px;
  margin-top: 10px;
  border-radius: 8px;
}
.cartao-container input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.linha {
  display: flex;
  gap: 10px;
}
.btn-confirmar {
  background: #10b981;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
.btn-confirmar:hover {
  background: #047857;
}
.btn-fechar {
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
