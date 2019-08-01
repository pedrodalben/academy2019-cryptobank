<template>
  <div class="createaccount">
    <div class="content center">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>

      <form class="createaccount-form" @submit.prevent="createAccount">
        <div class="input-control">
          <label for="email-input">E-mail</label>
          <input v-model="email" type="email" id="email-input" required name="email" class="input" placeholder="Digite seu e-mail">
        </div>

        <div class="input-control">
          <label for="password-input">Senha</label>
          <input v-model="password" type="password" id="password-input" required name="password" class="input" placeholder="Digite sua senha">
        </div>

        <div class="actions">
          <button type="submit" id="create-account-button" class="center">
            Criar conta
          </button>
        </div>

        <br/>

        <div class="actions">
          <span type="navigate" id="back-button" class="voltar-login" @click="returnToLogin">
            Já possui conta?
            <a href="#" class="link-voltar-login">
              Acessar
            </a>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    createAccount () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('Conta criada com sucesso !')
          this.$router.push({ path: '/login' })

      const docId = firebase.firestore().collection('saldo').doc().id
      const userUid = firebase.auth().currentUser.uid
      const saldo = 0
      firebase.firestore()
        .collection('saldo').doc(docId).set({ id: docId, userUid, saldo })
        }).catch((error) => {
          alert('Erro ao criar conta \n\n' + error)
        })
    },
    returnToLogin () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
  .createaccount {
   overflow: auto;
    background: url("../assets/fundo.png") no-repeat center center fixed;
    background-color: #54C780;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .createaccount > .content {
   position: absolute;
      top: 50%;
      left: 50%;
      transform:  translate(-50%, -50%);
  }

  .center {
    display: block;
    margin: 0 auto;
  }

  .createaccount-form {
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
    background: #FFF;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;

    padding: 0 25px;
  }

  .input-control > .input:focus {
    background: #F2F2F2;
  }

  .createaccount-form > .actions > button[type="submit"] {
    background-color: #FA7268;
    border: 0;
    border-radius: 5px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 160px;
    height: 48px;
    cursor: pointer;
  }
  .actions{
    text-align: center;
  }

  .createaccount-form > .actions >  span.voltar-login {
  color: #FFF;
    font-family: 'Roboto', sans-serif;
    width: 160px;
    height: 48px;
    cursor: pointer;
    font-weight: thin;
  }
    .link-voltar-login:link,
  .link-voltar-login:visited {
      text-decoration: none;
      color: #ffff;
      font-weight: bold;
  }
  .logo {
    margin: auto;
    display: block;
  }

</style>
