<template>
  <div class="pagar">
    <Header></Header>
    <div class="blockTop">
      <p align="center">Depositar</p>
      <div class="blockPrincipal">
        <p align="center">
          Informe a
          <b>quantia</b> desejada
        </p>
        <form action="#" class="input">
          <p class="input">
            $KA
            <input class="box" type="number" min="10" max="15000" value="10" />
          </p>
          <p align="center" class="informacao">Digite um valor entre $KA 10,00 e $KA 15.000,00</p>
          <button type="acao" id="login-button" class="center" @click="Depositar">Depositar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/form/Button'
import FormControl from '@/components/form/FormControl'
import * as firebase from 'firebase'
import { METHODS } from 'http';

export default {
  name: 'transferir',
  components: {
    Header,
    Button,
    FormControl
  }
}
METHODS:{
  
}
</script>

<style scoped>
button[type="acao"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 350px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 175px;
  left: 50%;
  margin-bottom: 25px;
}
.blockPrincipal {
  width: 380px;
  height: 240px;
  background-color: #ffff;
  border: 0;
  border-radius: 10px;
  position: absolute;
  top: 164px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto", "sans-serif";
  font-weight: light;
  font-size: 20px;
  color: rgb(3, 3, 3);
  cursor: help;
}
.blockTop {
  width: 380px;
  height: 208px;
  background-color: #4076ad;
  border: 0;
  border-radius: 10px;
  position: absolute;
  top: 232px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto", "sans-serif";
  font-weight: light;
  font-size: 13px;
  color: #ffff;
  cursor: help;
}
.input {
  display: block;
  margin: 0 auto;
  font-family: "Roboto", "sans-serif";
  font-weight: light;
  font-size: 30px;
  color: #707070;
  cursor: help;
  text-align: center;
}
.input > .box {
  width: 120px;
  height: 35px;
  font-family: "Roboto", "sans-serif";
  font-weight: light;
  font-size: 30px;
  color: #707070;
  border: 0;
}
.informacao {
  font-family: "Roboto", "sans-serif";
  font-weight: regular;
  font-size: 10px;
  padding: 5px;
  color: #333333;
}

.icon-back {
  width: 25px;
  height: 25px;
}
.back-button {
  background: none;
  border: none;
  cursor: pointer;
}
.form {
  max-width: 900px;
  width: 90%;
  margin: 1em auto;
}
</style>
