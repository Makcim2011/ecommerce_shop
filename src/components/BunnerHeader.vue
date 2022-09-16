<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand mb-0 h1" to="/">Home</router-link> |
        <router-link to="/productCart">Cart (0)</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BunnerHeader',
  components: {}
}
</script>

<style lang="scss">

</style>