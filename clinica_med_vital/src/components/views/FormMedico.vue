<template>
  <section class="secao-cadastro">
    <form class="form-cadastro" @submit.prevent="validarFormulario">
      
      <!-- TÍTULO CENTRAL -->
      <h1 class="medic">Sou Médico</h1>

      <div class="row1">
        <div class="box-form">
          <label for="">Nome:</label>
          <input v-model="form.nome" class="inputs" type="text" placeholder="Digite seu nome" name="nome"/>
        </div>
        <div class="box-form">
          <label for="">Sobrenome:</label>
          <input v-model="form.sobrenome" class="inputs" type="text" placeholder="Digite seu sobrenome" name="sobrenome"/>
        </div>
        <div class="box-form">
          <label for="">Telefone:</label>
          <input v-model="form.telefone" class="inputs" type="text" placeholder="(00) 00000-0000" @input="mascararTelefone" maxlength="15" name="telefone"/>
        </div>
        <div class="box-form">
          <label for="">CPF:</label>
          <input v-model="form.cpf" class="inputs" type="text" placeholder="000.000.000-00" @input="mascararCPF" maxlength="14" name="cpf"/>
        </div>
        <div class="box-form">
          <label for="">CEP:</label>
          <input v-model="form.cep" class="inputs" type="text" placeholder="00000-000" @input="mascararCEP" maxlength="9" name="cep"/>
        </div>
        <div class="box-form">
          <label for="">CRM:</label>
          <input v-model="form.crm" class="inputs" type="text" placeholder="123456" name="crm"/>
        </div>
        <div class="box-form">
          <label for="">Data de nascimento:</label>
          <input v-model="form.nascimento" class="inputs" type="date" name="nascimento"/>
        </div>
        <div class="box-form">
          <label for="">Segundo contato:</label>
          <input v-model="form.segundoContato" class="inputs" type="text" placeholder="(00) 0000-0000" @input="mascararTelefone2" maxlength="14" name="segundoContato"/>
        </div>
        <div class="box-form">
          <label for="">Email:</label>
          <input v-model="form.email" class="inputs" type="email" placeholder="joaodasilva@gmail.com" name="email"/>
        </div>
        <div class="box-form">
          <label for="">Senha:</label>
          <input v-model="form.senha" class="inputs" type="password" placeholder="Digite sua senha" name="senha"/>
        </div>
      </div>

      <div style="grid-column: span 3; text-align: center; margin-top: 20px;" class="conteiner-submit">
        <button class="btn-submit" type="submit">Cadastrar</button>
        <RouterLink to="/" class="btn-submit">Sou Paciente</RouterLink>
      </div>
    </form>

    <!-- Modal -->
    <div id="modal" class="modal" v-show="mostrarModal">
      <div class="modal-content">
        <h2>Atenção!</h2>
        <p>Por favor, preencha todos os campos do formulário.</p>
        <button class="close" @click="fecharModal">Fechar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CadastroMedico",
  data() {
    return {
      form: {
        nome: "",
        sobrenome: "",
        telefone: "",
        cpf: "",
        cep: "",
        crm: "",
        nascimento: "",
        segundoContato: "",
        email: "",
        senha: "",
      },
      mostrarModal: false,
    };
  },
  methods: {
    validarFormulario() {
      const camposPreenchidos = Object.values(this.form).every(
        (valor) => valor.trim() !== ""
      );

      if (!camposPreenchidos) {
        this.mostrarModal = true;
      } else {
        // Limpar máscaras antes de enviar
        const payload = { ...this.form };
        payload.cpf = payload.cpf.replace(/\D/g, "");
        payload.telefone = payload.telefone.replace(/\D/g, "");
        payload.segundoContato = payload.segundoContato.replace(/\D/g, "");

        fetch("http://localhost:3000/medicos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(resposta => {
          console.log(resposta.mensagem);
          this.resetForm();
          // Redireciona usando o nome da rota definido no Vue Router
          this.$router.push({ name: "MedicoCadastrado" });
        })
        .catch(err => {
          console.error("Erro ao cadastrar médico:", err);
        });
      }
    },
    fecharModal() {
      this.mostrarModal = false;
    },
    resetForm() {
      for (let campo in this.form) {
        this.form[campo] = "";
      }
    },
    mascararCPF() {
      let v = this.form.cpf.replace(/\D/g, "").slice(0, 11);
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{2})$/, "$1-$2");
      this.form.cpf = v;
    },
    mascararCEP() {
      let v = this.form.cep.replace(/\D/g, "").slice(0, 8);
      v = v.replace(/(\d{5})(\d)/, "$1-$2");
      this.form.cep = v;
    },
    mascararTelefone() {
      let v = this.form.telefone.replace(/\D/g, "").slice(0, 11);
      if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      } else {
        v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      }
      this.form.telefone = v;
    },
    mascararTelefone2() {
      let v = this.form.segundoContato.replace(/\D/g, "").slice(0, 10);
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      this.form.segundoContato = v;
    },
  },
};
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
  grid-template-columns: repeat(3, 1fr);
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
  text-decoration: none;
}
.btn-submit:hover {
  background-color: #2f6fab;
}

/* Modal */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.modal-content h2 {
  margin-bottom: 15px;
}

.close {
  margin-top: 10px;
  padding: 8px 15px;
  background: #dc3545;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.conteiner-submit{
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 0 auto;
}

.medic {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #0D3B66;
  margin-bottom: 30px;
  grid-column: span 3;
  position: relative;
  display: block;
}

.medic::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #00E5FF, #6A00FF, #FF5DA2, #00E5FF);
  background-size: 300% 100%;
  animation: moverLinha 3s linear infinite;
  border-radius: 2px;
}

@keyframes moverLinha {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
</style>
