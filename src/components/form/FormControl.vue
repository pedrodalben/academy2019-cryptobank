<template>
  <div class="form-control">
    <label class="label">{{label}}</label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormControl',
  props: {
    label: {
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  display: block;
  margin-top: 1.3em;
  margin-bottom: 1.3em;
}
.label {
  display: block;
  color: #354463;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
.form-control > input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  background:#333333;
  border: 1px solid #333333;
  font-family: 'Montserrat', sans-serif;
  border-radius: 4px;
  font-size: 1.2em;
  height: 2em;
  text-indent: .4em;
}
.form-control > input:focus {
  outline: 2px solid #354463;
}
</style>
