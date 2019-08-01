<template>
  <div class="app">
    <Header></Header>
        <div class="block">
    <span>Saldo disponível</span>
          <p class="input">
            $KA
              <output class="input" id="inputValor"/>
          </p>
        
      <button type="pagar" id="login-button" class="center" @click="getvalor">pagar</button>
    </div>
    <div class="actions">
      <button type="depositar" id="login-button" class="center" @click="depositar">depositar</button>
    </div>
    <div class="actions">
      <button type="pagar" id="login-button" class="center" @click="pagar">pagar</button>
    </div>
    <div class="actions">
      <button type="transferir" id="login-button" class="center" @click="transferir">tranferir</button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import firebase from "firebase";
import { log } from "util";


let postSnapshotListener = null;
document.getElementById("inputValor");

export default {
  components: {
    Header  
  },
  methods: {
    getvalor() {
      const userUid = firebase.auth().currentUser.uid;
      firebase
        .firestore()
        .collection("saldo")
        .where("userUid", "==", userUid)
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            console.log(doc.data().saldo);
            var saldo = doc.data().saldo;
            document.getElementById('inputValor').value = saldo
          });
        })
        .catch(error => {
          throw new Error(error);
        });
    },

    pagar() {
      this.$router.push({ path: "/pagar" });
    },
    transferir() {
      this.$router.push({ path: "/transferir" });
    },
    depositar() {
      this.$router.push({ path: "/depositar" });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Desconectado com sucesso!");
          this.$router.push("/login");
        })
        .catch(error => {
          alert("Erro ao desconectar. \n\n" + error);
        });
    }
  }
};
</script>

<style>
.block {
  width: 334px;
  height: 104px;
  background-color: #ffff;
  border: 0;
  border-radius: 5px;
  position: absolute;
  top: 173px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;
  font-weight: thin;
  font-size: 15px;
  padding: 12px 14px;
  cursor: help;
}
.block > .input{
  width: 244px;
  height: 47px;
   font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #333333;
 
}
.actions > button[type="depositar"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 334px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0%;
  left: 50%;
  margin-bottom: 140px;
}
.actions > button[type="pagar"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 334px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 50%;
  margin-bottom: 85px;
}
.actions > button[type="transferir"] {
  background-color: #fa7268;
  border: 0;
  border-radius: 5px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 334px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 15px;
  left: 50%;
  margin-bottom: 15px;
}
.center {
  display: block;
  margin: 0 auto;
}
</style>
