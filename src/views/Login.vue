<template>
  <div class="login">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo" />

      <form class="login-form" @submit.prevent="submitLogin">
        <div class="input-control">
          <label for="email-input">E-mail</label>
          <input
            v-model="email"
            type="email"
            id="email-input"
            required
            name="email"
            class="input"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div class="input-control">
          <label for="password-input">Senha</label>
          <input
            v-model="password"
            type="password"
            id="password-input"
            required
            name="password"
            class="input"
            placeholder="Digite sua senha"
          />
        </div>

        <div class="actions">
          <button type="submit" id="login-button" class="center">Entrar</button>
        </div>

        <br />

        <div class="actions">
          <span
            type="navigate"
            id="new-account-button"
            class="criar-conta"
            @click="handleNewAccount"
          >
            Novo usuário ?
            <a href="#" class="link-criar-conta">Criar Conta</a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    submitLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Autenticado com sucesso!");
          this.$router.push({ path: "/feed" });
        })
        .catch(() => {
          alert("Falha na autenticação!");
        });
    },

    handleNewAccount() {
      this.$router.push({ path: "/create_account" });
    }
  }
};
</script>

<style scoped>
.login {
  overflow: auto;
  background: url("../assets/fundo.png") no-repeat center center fixed;
  background-color: #54c780;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.login > .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center {
  display: block;
  margin: 0 auto;
}

.login-form {
  margin-top: 78px;
}

.input-control {
  margin-bottom: 20px;
}

.input-control > label {
  display: block;
  margin-bottom: 12px;
  color: #fff;
  font-weight: bold;
}

.input-control > .input {
  height: 48px;
  width: calc(100% - 50px);
  border-radius: 5px;
  border-width: 0;
  background: #fff;

  font-family: "Roboto", sans-serif;
  font-size: 14px;

  padding: 0 25px;
}

.input-control > .input:focus {
  background: #f2f2f2;
}

.login-form > .actions > button[type="submit"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 18px;
  width: 160px;
  height: 48px;
  cursor: pointer;
}

.actions {
  text-align: center;
}

.login-form > .actions > span.criar-conta {
  color: #fff;
  font-family: "Roboto", sans-serif;
  width: 160px;
  height: 48px;
  cursor: pointer;
  font-weight: thin;
}

.link-criar-conta:link,
.link-criar-conta:visited {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.logo {
  margin: auto;
  display: block;
}
</style>
