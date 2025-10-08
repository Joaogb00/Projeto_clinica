<template>
  <section class="sobre-clinica" id="sobre">
    <div class="container">
      <h1>Sobre a Med Vital</h1>
      <p class="slogan">Cuidar da sua saúde é o nosso compromisso vital.</p>

      <p class="descricao">
        A <strong>Med Vital</strong> nasceu com o propósito de transformar o modo como as pessoas 
        enxergam o cuidado com a saúde. Unimos tecnologia, empatia e profissionais dedicados para 
        oferecer um atendimento moderno, humanizado e acessível a todos.
      </p>

      <div class="historia">
        <h2>Nossa História</h2>
        <p>
          Fundada em <strong>2012</strong> por um grupo de médicos apaixonados pelo que fazem, a Med Vital 
          começou como uma pequena clínica de bairro. O que nos diferenciava desde o início era a 
          vontade de escutar — entender o paciente como um ser completo, não apenas um diagnóstico.
        </p>
        <p>
          Com o tempo, a clínica cresceu, incorporou novas especialidades e tecnologias de ponta, mas 
          manteve o mesmo princípio: <em>o cuidado começa pela confiança</em>. Hoje, somos referência em 
          atendimentos personalizados e exames de alta precisão, sempre guiados por ética e humanidade.
        </p>
      </div>

      <div class="valores">
        <h2>Nossos Valores</h2>
        <ul>
          <li><strong>Humanização:</strong> cada paciente é tratado com carinho e atenção.</li>
          <li><strong>Excelência:</strong> contamos com profissionais altamente qualificados.</li>
          <li><strong>Tecnologia:</strong> usamos equipamentos modernos para diagnósticos precisos.</li>
          <li><strong>Confiança:</strong> sua saúde é nossa prioridade.</li>
        </ul>
      </div>

      <div class="missao-visao">
        <div class="card">
          <h3>Missão</h3>
          <p>
            Promover saúde e bem-estar por meio de um atendimento ético, humano e inovador, 
            colocando o paciente sempre em primeiro lugar.
          </p>
        </div>

        <div class="card">
          <h3>Visão</h3>
          <p>
            Ser referência nacional em cuidados médicos, reconhecida pela excelência e pela 
            confiança construída com cada pessoa que passa por nossas portas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sobre"
}
</script>

<style scoped>
/* ===========================
   ESTILOS GERAIS
=========================== */
.sobre-clinica {
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
 
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* ===========================
   CONTAINER
=========================== */
.container {
  max-width: 1000px;
  margin: auto;
  text-align: center;
}

/* ===========================
   TÍTULOS E SLOGAN
=========================== */
h1 {
  font-size: 2.6rem;
  color: #0D3B66; /* verde principal */
  margin-bottom: 10px;
}

.slogan {
  font-size: 1.25rem;
  color: #0D3B66; /* verde claro */
  margin-bottom: 35px;
  font-style: italic;
}

/* ===========================
   DESCRIÇÃO E HISTÓRIA
=========================== */
.descricao {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 40px;
  color: #3a3a3a;
}

.historia {
  margin-bottom: 50px;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.historia h2 {
  color: #0D3B66;
  margin-bottom: 10px;
  text-align: center;
}

.historia p {
  margin: 10px 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #444;
}

/* ===========================
   VALORES
=========================== */
.valores h2 {
  color: #0D3B66;
  margin-bottom: 10px;
}

.valores ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0 auto;
  max-width: 700px;
  background: #e7f9f0;
  border-radius: 10px;
  padding: 20px 30px;
}

.valores li {
  margin: 10px 0;
  font-size: 1.05rem;
  color: #2f4f4f;
}

/* ===========================
   MISSÃO E VISÃO
=========================== */
.missao-visao {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 40px;
}

.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  padding: 25px;
  max-width: 300px;
  transition: all 0.3s ease;
  border-top: 4px solid #0D3B66;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  border-top: 4px solid #02735E;
}

.card h3 {
  color: #02735E;
  margin-bottom: 10px;
}

.card p {
  color: #333;
  line-height: 1.5;
}
</style>
