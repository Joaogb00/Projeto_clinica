<template>
  <section class="secao_inicial">
    <h1 class="titulo">Med Vital</h1>

  </section>
</template>

<script>
export default {
  name: 'Main1'
}
</script>

<style>
.secao_inicial {
    background-image: url(../assets/img/inicio2.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 100vh; 
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.425)
}
.titulo {
  font-family: "Poppins", sans-serif;
  font-size: 80px;
  color:#E3F2FD;
  position: relative;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  text-align: center;
  display: flex;
  justify-content: center;
  -webkit-text-stroke: 1px white; /* largura + cor da borda */
}

.titulo::after {
  content: "";
  position: absolute;
  left: 0;
 
  bottom: 20px;
  width: 0;
  height: 4px;
  background:  #0D3B66;
  animation: underline 2s ease forwards 2s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes underline {
  from { width: 0; }
  to { width: 100%; }
}

</style>
