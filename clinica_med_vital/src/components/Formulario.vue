<template>
  <section class="secao-cadastro">
    
    <a href="#" class="btn-home">
      <i class="bi bi-house-fill"></i>
    </a>

    <div class="conteiner2">
      <h1 id="txt1">Preencha seus dados para Cadastrar-se</h1>
      <form action="" class="form-cadastro">

        <div class="box-form">
          <label for="nome">Digite seu nome:</label>
          <input type="text" id="nome" class="inputs" placeholder="Digite seu nome" required>
        </div>

        <div class="box-form">
          <label for="sobrenome">Digite seu sobrenome:</label>
          <input type="text" id="sobrenome" class="inputs" placeholder="Digite seu sobrenome" required>
        </div>

        <div class="box-form">
          <label for="cpf">Digite seu CPF:</label>
          <input type="text" id="cpf" class="inputs" placeholder="000.000.000-00" required>
        </div>

        <div class="box-form">
          <label for="senha">Digite sua senha: </label>
          <input type="password" id="senha" class="inputs" placeholder="Digite sua senha" required>
        </div>

        <button type="submit" class="btn-submit">Cadastrar</button>
        <button type="submit" class="btn-submit">Cadastrar</button>
      </form>
    </div>
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.btn-home {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  color: #fff;
  transition: 0.3s;
}
.btn-home:hover {
  color: #3d89cf;
}

.conteiner2 {
  background-color: rgba(255, 255, 255, 0.85);
  width: 420px;
  min-height: 70vh;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
}

#txt1 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #3d89cf;
  font-weight: 600;
}

.form-cadastro {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  margin-top: 15px;
  background-color: #3d89cf;
  color: #fff;
  border: none;
  padding: 12px;
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
