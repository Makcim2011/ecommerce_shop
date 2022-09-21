<template>
  <div>
    <nav class="navbar navbar-white">
      <div class="container-fluid">
        <router-link class="navbar-brand mb-0 h1" to="/">ecommerse_shop</router-link>
        <router-link to="/productCart"><fa :icon="['fas', 'cart-plus']"/> ({{ totalAmount }})</router-link>
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
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="scss">


</style>