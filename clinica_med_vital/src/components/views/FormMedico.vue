<template>
  <section class="secao-cadastro">
    <form class="form-cadastro" @submit.prevent="fazerLogin">
      <h1 class="medic">Login Médico</h1>

      <div class="row1">
        <div class="box-form">
          <label>Usuário:</label>
          <input v-model="usuario" type="text" placeholder="Digite seu usuário" required />
        </div>

        <div class="box-form">
          <label>Senha:</label>
          <input v-model="senha" type="password" placeholder="Digite sua senha" required />
        </div>
      </div>

      <div class="conteiner-submit">
        <button class="btn-submit" type="submit">Entrar</button>
      </div>

      <p v-if="mensagem" style="color:red; text-align:center; margin-top:10px;">{{ mensagem }}</p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      senha: "",
      mensagem: ""
    };
  },
  methods: {
    fazerLogin() {
      // Usuário e senha fixos
      if(this.usuario === "ConeMedicina" && this.senha === "1011321") {
        localStorage.setItem("medicoLogado", "true");
        this.$router.push("./Pag_medico/DashboardMedico");
      } else {
        this.mensagem = "Nenhum médico com essas credenciais!";
      }
    }
  }
}
</script>

<style>
/* Reaproveitando CSS do FormMedico */
.secao-cadastro {
  background: #e3f2fd;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.form-cadastro {
  background: rgba(255,255,255,0.9);
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  display: grid;
  gap: 20px;
}

.row1 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.box-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: 500;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}

input:focus {
  border: 1px solid #0D3B66;
  background-color: #e9f3fc;
}

.btn-submit {
  background: #0D3B66;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-submit:hover {
  background: #145a92;
}

.conteiner-submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.medic {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #0D3B66;
  margin-bottom: 20px;
}
</style>
