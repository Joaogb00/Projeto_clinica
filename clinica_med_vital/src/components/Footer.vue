<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo -->
      <div class="footer-logo">
        <h2>Med Vital</h2>
        <p>© 2025 Todos os direitos reservados.</p>
      </div>

      <!-- Links -->
      <nav class="footer-links">
        <ul>
          <!-- Seções da página -->
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>

          <!-- 🔹 Link para a rota ou seção 'Sobre' -->
          <!-- Se quiser usar rolagem para seção, mantenha a linha abaixo -->
          <li><a href="#sobre" @click.prevent="scrollToSection('sobre')">Sobre</a></li>

          <!-- Se quiser ir para outra rota, descomente esta linha e comente a de cima -->
          <!-- <li><RouterLink to="/sobre">Sobre</RouterLink></li> -->
        </ul>
      </nav>

      <!-- Redes sociais -->
      <div class="footer-social">
        <p id="ctt">Contato:</p>
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"><i class="bi bi-instagram"></i></a>
        <a href="#"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "Footer",
  components: { RouterLink },

  methods: {
    // 🔹 Faz o scroll suave até a seção (caso esteja na mesma página)
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
};
</script>

<style scoped>
.footer {
  background: #0d3b66;
  color: #fff;
  padding: 30px 20px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

.footer-logo h2 {
  margin: 0;
  font-size: 22px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.footer-links a,
.footer-links RouterLink {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}

.footer-links a:hover,
.footer-links RouterLink:hover {
  color: #ffd700;
}

.footer-social a {
  color: #fff;
  margin: 0 8px;
  font-size: 20px;
  transition: 0.3s;
}

.footer-social a:hover {
  color: #ffd700;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
</style>
