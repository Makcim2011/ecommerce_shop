<template>
  <nav class="navbar fixed-top navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand mb-0 h1" to="/">Home</router-link> |
      <router-link to="/productCart">Cart (0)</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BunnerHeader',
  components: {}
}
</script>

<style>

</style>