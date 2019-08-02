<template>
  <div class="app">
    <Header></Header>
    <div class="block">
      <span>Saldo disponível</span>
      <p class="input">
        $KA
        {{ValorConta}}
      </p>
    </div>
    <div class="actions">
      <button type="depositar" id="login-button" class="center" @click="depositar">Depositar</button>
      <img :src="require('../assets/piggy-bank.svg')" class="icon" />
    </div>
    <div class="actions">
      <button type="pagar" id="login-button" class="center" @click="pagar">Pagar</button>
      <img :src="require('../assets/pay.svg')" class="icon2" />
    </div>
    <div class="actions">
      <button type="transferir" id="login-button" class="center" @click="transferir">tranferir</button>
      <img :src="require('../assets/surface1.svg')" class="icon3" />
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
  data: () => ({
    ValorConta: ""
  }),
  mounted() {
    var saldo;
    const userUid = firebase.auth().currentUser.uid;
    firebase
      .firestore()
      .collection("saldo")
      .where("userUid", "==", userUid)
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          saldo = doc.data().saldo;
          this.ValorConta = saldo;
        });
      })
      .catch(error => {
        throw new Error(error);
      });

    postSnapshotListener = firebase
      .firestore()
      .collection("saldo")
      .where("userUid", "==", userUid)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "modified") {
            firebase
              .firestore()
              .collection("saldo")
              .where("userUid", "==", userUid)
              .get()
              .then(snapshot => {
                snapshot.docs.map(doc => {
                  saldo = doc.data().saldo;
                  this.ValorConta = saldo;
                });
              });
            this.$forceUpdate();
          }
        });
      });
  },
  methods: {
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
.block > .input {
  width: 244px;
  height: 47px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #333333;
}
.actions{
    width: 334px;
  height: 40px;
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
  text-align: right;
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
  text-align: right;
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
  text-align: right;
  font-weight: bold;
  font-size: 20px;
  width: 334px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 15px;
  left: 50%;
  margin-bottom: 20px;
}
.center {
  display: block;
  margin: 0 auto;
}
.icon {
  width: 30px;
  height: 30px;
  position: absolute;
  transform: translate(-50%, -50%);

  bottom: 150px;
  left: 50%;
  padding-right: 215px;
}
.icon2 {
  width: 30px;
  height: 30px;
  position: absolute;
  transform: translate(-50%, -50%);

  bottom: 95px;
  left: 50%;
  padding-right: 215px;
}
.icon3 {
  width: 30px;
  height: 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 45px;
  left: 50%;
  padding-right: 215px;
}
</style>
