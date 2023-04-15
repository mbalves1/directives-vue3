<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>Click Outside</h2>
  <div v-click-outside="handleClickedOutside" class="box">Here is some text</div>
</template>

<script setup>
const handleClickedOutside = () => alert("you clicked outside")
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  border: 1px solid black;
  width: 200px;
  margin: auto;
  height: 100px;
  padding: 20px;
}
</style>
