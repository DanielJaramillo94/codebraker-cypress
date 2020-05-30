<template>
  <div id="app">
    <MercadoAPI/>
  </div>
</template>

<script>
import MercadoAPI from './views/MercadoAPI'
export default {
  name: 'app',
  components: {
    MercadoAPI,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
