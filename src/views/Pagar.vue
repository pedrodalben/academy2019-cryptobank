<template>
  <div class="pagar">
    <Header>
    </Header>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/form/Button'
import FormControl from '@/components/form/FormControl'
import * as firebase from 'firebase'

export default {
  name: 'transferir',
  components: {
    Header,
    Button,
    FormControl
  }
}
</script>

<style scoped>
  .icon-back {
    width:25px;
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
