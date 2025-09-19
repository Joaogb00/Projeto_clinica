<template>
  <section class="secao-cadastro">
    <form class="form-cadastro">
      <div class="row1">
        <div class="box-form">
          <label for="">Nome:</label>
          <input class="inputs" type="text" required placeholder="Digite seu nome">
        </div>
        <div class="box-form">
          <label for="">Sobrenome:</label>
          <input class="inputs" type="text" required placeholder="Digite seu sobrenome">
        </div>
        <div class="box-form">
          <label for="">Telefone:</label>
          <input class="inputs" type="number" required placeholder="(00) 00000-0000">
        </div>
        <div class="box-form">
          <label for="">CPF:</label>
          <input class="inputs" type="number" required placeholder="000.000.000-00">
        </div>
        <div class="box-form">
          <label for="">CEP:</label>
          <input class="inputs" type="number" required placeholder="00000-000">
        </div>
        <div class="box-form">
          <label for="">Data de nascimento:</label>
          <input class="inputs" type="date" required>
        </div>
        <div class="box-form">
          <label for="">Segundo contato:</label>
          <input class="inputs" type="number" required placeholder="(00) 0000-0000">
        </div>
        <div class="box-form">
          <label for="">Email:</label>
          <input class="inputs" type="email" required placeholder="joaodasilva@gmail.com">
        </div>
        <div class="box-form">
          <label for="">Senha:</label>
          <input class="inputs" type="password" required placeholder="Digite sua senha">
        </div>
      </div>

      <div style="grid-column: span 3; text-align: center; margin-top: 20px;">
        <button class="btn-submit" type="submit">Cadastrar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Cadastro'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.secao-cadastro {
  background-image: url(../assets/img/inicial_formulario.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.form-cadastro {
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  width: 90%;
  max-width: 900px;
  display: grid;
  gap: 20px;
}

.row1 {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 20px;
}

@media (max-width: 900px) {
  .row1 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .row1 {
    grid-template-columns: 1fr;
  }
}

.box-form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
}

.inputs {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 12px;
  outline: none;
  transition: 0.3s;
}
.inputs:focus {
  background-color: #e9f3fc;
  border: 1px solid #3d89cf;
  box-shadow: 0 0 6px rgba(61, 137, 207, 0.6);
}

.btn-submit {
  background-color: #3d89cf;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s;
}
.btn-submit:hover {
  background-color: #2f6fab;
}
</style>
