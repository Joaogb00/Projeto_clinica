<template>
  <footer class="footer">
    <div class="footer-container">
     
      <div class="footer-logo">
        <h2>Med vital</h2>
        <p>© 2025 Todos os direitos reservados.</p>
      </div>

      
      <nav class="footer-links">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          
          <li><a href="#sobre">Sobre</a></li>
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
export default {
  name: "Footer",
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

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

.footer-links a:hover {
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
