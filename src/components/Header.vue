<template>
  <header class="header">
    <div class="action action-left">
      <slot name="action-left" />
    </div>
       <div class="wrapper-logo">
      <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>
    </div>
    <div class="action action-right">
      <slot name="action-right" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #333333;
  padding: .8em .8em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 334px;
  margin: auto;
  display: block;
}
.action {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper-logo {
  flex: 1;
}
</style>
