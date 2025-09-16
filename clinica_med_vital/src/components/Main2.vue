<template>
<section class="main2">
  <h1 id="title">Nossas Especialidades</h1>
 
    <div class="elementos">
            <div class="ele1"><h1>Consultas médicas gerais</h1>
            <p>prevenção, diagnóstico e acompanhamento de doenças comuns.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Pediatria</h1>
              <p>cuidados de saúde para crianças e adolescentes.</p>
              <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Geriatria</h1>
            <p>acompanhamento da saúde do idoso.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Clínica de prevenção</h1>
            <p>check-ups, exames de rotina e vacinação.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Dermatologia básica</h1>
            <p>avaliação de pele, unhas e cabelo.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Acompanhamento de doenças crônicas</h1>
            <p>hipertensão, diabetes, colesterol alto.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Atendimento de urgência leve </h1>
            <p> pequenos cortes, febres, infecções leves.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Exames laboratoriais e de imagem</h1>
            <p>coleta de sangue, raio-X, ultrassom básico.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Nutrição e orientação alimentar</h1>
            <p>aconselhamento para uma alimentação saudável.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

            <div class="ele1"><h1>Saúde mental</h1>
            <p>encaminhamento ou atendimento básico psicológico.</p>
            <img src="/src/assets/img/consulta de pediatria.jpg" alt="">
            <a href="#" class="marcar">Marcar Consulta</a>
            </div>

        
           
       
          </div>
    
</section>
</template>
<script>
export default{
    name: 'Main2'
}
</script>
<style>
.main2{
  margin-top: 10vh;
}
*{
    padding: 0;
    margin: 0
}

.elementos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 30px;
  margin-top: 50px;
}

/* Cartões das especialidades */
.ele1 {
  cursor: pointer;
  background-color: #E3F2FD; /* azul bem suave */
  padding: 30px;
  border-radius: 15px;
  color: #0D3B66; /* azul escuro para o texto */
  box-shadow: 10 10px 15px rgba(13, 59, 102, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ele1, h1 {
  font-size: 25px;
}

/* Hover pulse */
@keyframes pulseHover {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1.05); }
}

.ele1:hover {
  animation: pulseHover 0.4s forwards;
  box-shadow: 0 8px 20px rgba(13, 59, 102, 0.2);
}

/* Entrada suave */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Botões */
.marcar {
  text-decoration: none;
  padding: 15px 20px;
  background-color: #ffffff;
  border-radius: 15px;
  color: #0D3B66;
  font-size: 15px;
  text-align: center;
  width: 120px;
  transition: 0.5s;
  position: absolute;
  bottom: 20px; /* distância do fundo do cartão */
  left: 40%;
  transform: translateY(-50%);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.178);

}

.marcar:hover {
  background-color: #4DB6AC; /* verde suave */
  color: white;
}
#title{
  text-align: center;
  font-size: 30px;
  text-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.24);
 
}

#linha{
  background:linear-gradient(to left,  #0D3B66,#4DB6AC);
  width: 100px;
  display: flex;
  
 
}
.ele1 img {
  max-width: 100%;
  max-height: 200px; /* controla a altura pra não estourar */
  object-fit: cover; /* mantém a proporção */
  margin: 0 auto; /* centraliza horizontalmente */
  display: block;   /* garante que o margin funcione */
  position: absolute;
  bottom: 10px; /* distância do fundo do cartão */
 left: 6%;
 border-radius: 20px;
  transform: translateY(-50%);
}

</style>