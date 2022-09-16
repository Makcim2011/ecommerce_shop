<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand mb-0 h1" to="/">Home</router-link> |
        <router-link to="/productCart">Cart ({{ totalAmount }})</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BunnerHeader',
  components: {},
  computed: {
    ...mapGetters(['cart']),
    totalAmount() {
      return this.cart.length;
      // return this.cart.reduce((a,b) => a + b.item, 0);
    }
  },
}
</script>

<style lang="scss">

</style>