<template>
  <div class="app">
    <Header></Header>

    <div class="block">
      <span class="texto">Saldo disponível</span>
    </div>
    <div class="actions">
      <button type="depositar" id="login-button" class="center" @click="depositar" >depositar</button>
    </div>
    <div class="actions">
      <button type="pagar" id="login-button" class="center"  @click="pagar" >pagar</button>
    </div>
    <div class="actions">
      <button type="transferir" id="login-button" class="center" @click="transferir" >tranferir</button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import firebase from "firebase";

let postSnapshotListener = null;

export default {
  name: "feed",
  data() {
    return {
      posts: []
    };
  },
  components: {
    Header
  },

  mounted() {
    const userUid = firebase.auth().currentUser.uid;
    postSnapshotListener = firebase
      .firestore()
      .collection("posts")
      .where("userUid", "==", userUid)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            this.posts.push(change.doc.data());
          }

          if (change.type === "modified") {
            const { id } = change.doc.data();
            const currentObject = this.posts.filter(post => post.id === id)[0];

            this.posts[this.posts.indexOf(currentObject)] = change.doc.data();
            this.$forceUpdate();
          }

          if (change.type === "removed") {
            const { id } = change.doc.data();
            const currentObject = this.posts.filter(post => post.id === id)[0];

            this.posts.splice(this.posts.indexOf(currentObject), 1);
            this.$forceUpdate();
          }
        });
      });
  },

  destroyed() {
    // unsubscribe listener
    postSnapshotListener();
  },

  methods: {
     pagar () {
      this.$router.push({ path: '/pagar' })
    },
     transferir () {
      this.$router.push({ path: '/transferir' })
    },
     depositar () {
      this.$router.push({ path: '/depositar' })
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
}
.block > .texto {
  font-family: "Roboto", sans-serif;
  font-weight: thin;
  font-size: 15px;

  padding: 14px 20px 20px 20px;
  cursor: help;
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
  margin-bottom: 150px;
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
  margin-bottom: 95px;
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
  margin-bottom: 25px;
}
.center {
  display: block;
  margin: 0 auto;
}
</style>
