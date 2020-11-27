<template>
  <div id="app">
    <h3><router-link class="nav-link" to="/">Home</router-link></h3>
    <router-link class="nav-link" to="/ex">ex</router-link>
    <router-link class="nav-link" to="/hello">hello</router-link>
    <router-link class="nav-link" to="/example">example</router-link>
    <router-view/> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
}
</style>
