<template>
  <RouterLink to="/" class="btn-home"> <i class="bi bi-house-door-fill"></i> </RouterLink>
  <section class="secao-cadastro">
    <form class="form-cadastro" @submit.prevent="validarFormulario">
      <div class="row1">
        
        <div class="box-form">
          <label>Nome:*</label>
          <input v-model="form.nome" class="inputs" type="text" placeholder="Digite seu nome" name="nome" />
        </div>

        <div class="box-form">
          <label>Sobrenome:*</label>
          <input v-model="form.sobrenome" class="inputs" type="text" placeholder="Digite seu sobrenome"  name="sobrenome"/>
        </div>

        <div class="box-form">
          <label>Telefone:*</label>
          <input v-model="form.telefone" class="inputs" type="text" placeholder="(00) 00000-0000" @input="mascararTelefone" maxlength="15" />
        </div>

        <div class="box-form">
          <label>CPF:*</label>
          <input v-model="form.cpf" class="inputs" type="text" placeholder="000.000.000-00" @input="mascararCPF" maxlength="14" />
        </div>

        <div class="box-form">
          <label>CEP:*</label>
          <input v-model="form.cep" class="inputs" type="text" placeholder="00000-000" @input="mascararCEP" maxlength="9" />
        </div>

        <div class="box-form">
          <label>Data de nascimento:*</label>
          <input v-model="form.nascimento" class="inputs" type="date" />
        </div>

        <div class="box-form">
          <label>Segundo contato:*</label>
          <input v-model="form.segundoContato" class="inputs" type="text" placeholder="(00) 0000-0000" @input="mascararTelefone2" maxlength="14" />
        </div>

        <div class="box-form">
          <label>Email:*</label>
          <input v-model="form.email" class="inputs" type="email" placeholder="joaodasilva@gmail.com" />
        </div>

        <div class="box-form">
          <label>Senha:*</label>
          <input v-model="form.senha" class="inputs" type="password" placeholder="Digite sua senha" />
        </div>
      </div>  

      <div class="conteiner-submit">
        <button class="btn-submit" type="submit">Cadastrar</button>
        <RouterLink to="/FormMedico" class="btn-submit">Sou Médico</RouterLink>
      </div>
    </form>

    <!-- Modal -->
    <div class="modal" v-if="mostrarModal">
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
  name: "Cadastro",
  data() {
    return {
      form: {
        nome: "",
        sobrenome: "",
        telefone: "",
        cpf: "",
        cep: "",
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
      // checa se todos os campos estão preenchidos
      const preenchido = Object.values(this.form).every(v => v.trim() !== "");
      if (!preenchido) {
        this.mostrarModal = true;
        return;
      }

      // SALVA NO LOCALSTORAGE
      localStorage.setItem('usuario', JSON.stringify(this.form));

      // faz POST para backend
      fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.form),
      })
        .then(async res => {
          if (!res.ok) {
            const erro = await res.json();
            throw new Error(erro.mensagem || "Erro no servidor");
          }
          return await res.json();
        })
        .then(resposta => {
          console.log(resposta.mensagem);
          this.resetForm();
          this.$router.push("/cadastrado");

        })
        .catch(err => {
          console.error("Erro ao cadastrar usuário:", err);
          alert(err.message || "Erro ao cadastrar usuário. Verifique se o servidor está ativo em http://localhost:3000");
        });
    },
    fecharModal() {
      this.mostrarModal = false;
    },
    resetForm() {
      Object.keys(this.form).forEach(campo => this.form[campo] = "");
    },

    // Máscaras
    mascararCPF() {
      let v = this.form.cpf.replace(/\D/g, ""); // remove tudo que não é número
      if (v.length > 11) v = v.slice(0, 11); // limita a 11 números

      // aplica a máscara progressivamente
      if (v.length > 9) {
        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
      } else if (v.length > 6) {
        v = v.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
      } else if (v.length > 3) {
        v = v.replace(/(\d{3})(\d{0,3})/, "$1.$2");
      }

      this.form.cpf = v;
    },
    mascararCEP() {
      let v = this.form.cep.replace(/\D/g, "").slice(0, 8);
      v = v.replace(/(\d{5})(\d)/, "$1-$2");
      this.form.cep = v;
    },
    mascararTelefone() {
      let v = this.form.telefone.replace(/\D/g, "").slice(0, 11);
      if (v.length <= 10) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      this.form.telefone = v;
    },
    mascararTelefone2() {
      let v = this.form.segundoContato.replace(/\D/g, "").slice(0, 10);
      this.form.segundoContato = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
  }
};
</script>

<style>
* { margin:0; padding:0; box-sizing:border-box; font-family:"Poppins", sans-serif; }

.secao-cadastro {
  background-image: url(../assets/img/inicial_formulario.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

.form-cadastro {
  background-color: rgba(255,255,255,0.85);
  border-radius: 20px;
  padding:30px;
  width:90%;
  max-width:900px;
  display:grid;
  gap:20px;
  box-shadow:0 10px 25px rgba(0,0,0,0.25);
}

.row1 {
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:20px;
}
@media(max-width:900px){ .row1{ grid-template-columns: repeat(2,1fr); } }
@media(max-width:600px){ .row1{ grid-template-columns: 1fr; } }

.box-form { display:flex; flex-direction:column; }
label { margin-bottom:6px; font-weight:500; color:#333; }
.inputs {
  border-radius:10px;
  border:1px solid #ccc;
  padding:12px;
  outline:none;
  transition:.3s;
}
.inputs:focus {
  background-color:#e9f3fc;
  border:1px solid #3d89cf;
  box-shadow:0 0 6px rgba(61,137,207,.6);
}

.btn-submit {
  background-color:#3d89cf;
  color:#fff;
  border:none;
  padding:12px 25px;
  border-radius:10px;
  cursor:pointer;
  font-weight:600;
  text-decoration:none;
  transition:.3s;
}
.btn-submit:hover{ background-color:#2f6fab; }

.conteiner-submit {
  display:flex;
  justify-content:center;
  gap:30px;
  margin-top:20px;
}

/* Modal */
.modal {
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1000;
}
.modal-content {
  background:#fff;
  padding:20px;
  border-radius:8px;
  text-align:center;
  width:300px;
}
.modal-content h2{ margin-bottom:15px; }
.close {
  margin-top:10px;
  padding:8px 15px;
  background:#dc3545;
  border:none;
  color:#fff;
  border-radius:5px;
  cursor:pointer;
}
</style>
