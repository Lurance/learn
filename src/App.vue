<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Goods/>
  </div>
</template>

<script>
import Goods from './components/Goods'

export default {
  name: 'App',
  components: {
    Goods
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
