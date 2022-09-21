<template>
  <div class="container">
    <BunnerHeader/>
    <router-view/>
  </div>
</template>

<script>
import BunnerHeader from './components/BunnerHeader.vue';

export default {
  name: "App",
  components: {
    BunnerHeader
},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
