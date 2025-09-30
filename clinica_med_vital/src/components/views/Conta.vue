<template>
  <section class="minha-conta">
    <div class="perfil fade-in">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Foto de perfil" class="foto-perfil" />
      <h2>{{ form.nome }} {{ form.sobrenome }}</h2>
      <p><strong>Telefone:</strong> {{ form.telefone }}</p>
      <p><strong>Segundo contato:</strong> {{ form.segundoContato }}</p>
      <p><strong>CPF:</strong> {{ form.cpf }}</p>
      <p><strong>CEP:</strong> {{ form.cep }}</p>
      <p><strong>Data de nascimento:</strong> {{ form.nascimento }}</p>
      <p><strong>Email:</strong> {{ form.email }}</p>
    </div>

    <div class="acoes fade-in">
      <button class="btn editar" @click="editar = !editar">{{ editar ? 'Salvar' : 'Editar Dados' }}</button>
      <button class="btn logout">Sair</button>
      <RouterLink to="/main1" class="btn-home">
        <i class="bi bi-house-door-fill"></i> Início
      </RouterLink>
    </div>

    <!-- Formulário de edição -->
    <form v-if="editar" class="form-edicao fade-in" @submit.prevent="salvarEdicao">
      <div class="row-edicao">
        <input v-model="form.nome" placeholder="Nome"/>
        <input v-model="form.sobrenome" placeholder="Sobrenome"/>
        <input v-model="form.telefone" placeholder="Telefone" @input="mascararTelefone"/>
        <input v-model="form.segundoContato" placeholder="Segundo contato" @input="mascararTelefone2"/>
        <input v-model="form.cpf" placeholder="CPF" @input="mascararCPF"/>
        <input v-model="form.cep" placeholder="CEP" @input="mascararCEP"/>
        <input v-model="form.nascimento" type="date"/>
        <input v-model="form.email" type="email" placeholder="Email"/>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "MinhaConta",
  data() {
    return {
      editar: false,
      form: {
        nome: "João",
        sobrenome: "Gabriel",
        telefone: "(11) 99999-9999",
        segundoContato: "(11) 98888-8888",
        cpf: "123-456-789.00",
        cep: "12345-678",
        nascimento: "2005-06-02",
        email: "joao@email.com",
      }
    };
  },
  methods: {
    salvarEdicao() {
      this.editar = false;
    },
    mascararCPF() {
      let v = this.form.cpf.replace(/\D/g, "");
      v = v.slice(0, 11);
      v = v.replace(/(\d{3})(\d)/, "$1-$2");
      v = v.replace(/(\d{3})(\d)/, "$1-$2");
      v = v.replace(/(\d{3})(\d{2})$/, "$1.$2");
      this.form.cpf = v;
    },
    mascararCEP() {
      let v = this.form.cep.replace(/\D/g, "");
      v = v.slice(0, 8);
      v = v.replace(/(\d{5})(\d)/, "$1-$2");
      this.form.cep = v;
    },
    mascararTelefone() {
      let v = this.form.telefone.replace(/\D/g, "");
      v = v.slice(0, 11);
      if (v.length <= 10) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
      this.form.telefone = v;
    },
    mascararTelefone2() {
      let v = this.form.segundoContato.replace(/\D/g, "");
      v = v.slice(0, 10);
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      this.form.segundoContato = v;
    }
  }
};
</script>

<style>
.minha-conta {
  max-width: 650px;
  margin: 70px auto;
  padding: 40px;
  background: #e3f2fd;
  border-radius: 18px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  text-align: center;
  animation: slideUp 1s ease forwards;
  opacity: 0;
}
.perfil {
  margin-bottom: 30px;
}
.foto-perfil {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #0D3B66;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.perfil h2 {
  color: #0D3B66;
  margin-bottom: 8px;
}
.perfil p {
  color: #333;
  margin: 3px 0;
  font-size: 15px;
}

/* Ações */
.acoes {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}
.btn {
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}
.editar {
  background: #4DB6AC;
  color: #fff;
}
.editar:hover {
  background: #37968c;
  transform: translateY(-3px);
}
.logout {
  background: #e53935;
  color: #fff;
}
.logout:hover {
  background: #c62828;
  transform: translateY(-3px);
}

/* Botão Home */
.btn-home {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 600;
  color: #0D3B66;
  background: linear-gradient(135deg, #ffffff, #f1f1f1);
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  transition: all 0.4s ease;
}
.btn-home:hover {
  background: linear-gradient(135deg, #0D3B66, #145a92);
  color: #fff;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}
.btn-home i {
  font-size: 18px;
}

/* Formulário de edição */
.form-edicao {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 15px;
  margin-top: 20px;
}
.form-edicao input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s;
}
.form-edicao input:focus {
  border-color: #0D3B66;
  box-shadow: 0 0 6px rgba(13,59,102,0.3);
}
@media (max-width: 600px) {
  .form-edicao {
    grid-template-columns: 1fr;
  }
}

/* Animações */
.fade-in {
  opacity: 0;
  animation: fadeInUp 1.2s ease forwards;
}
.fade-in:nth-child(1) { animation-delay: 0.3s; }
.fade-in:nth-child(2) { animation-delay: 0.6s; }
@keyframes fadeInUp { from { opacity:0; transform:translateY(40px);} to {opacity:1; transform:translateY(0);} }
@keyframes slideUp { from {opacity:0; transform:translateY(50px);} to {opacity:1; transform:translateY(0);} }
</style>
