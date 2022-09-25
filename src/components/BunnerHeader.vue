<template>
  <div>
    <nav class="navbar sticky navbar-white bg-white mb-5">
      <div class="container-fluid">
        <router-link class="navbar-brand mb-0 h1" to="/">ecommerse_shop</router-link>
        <router-link to="/productCart"><font-awesome-icon :icon="['fas', 'cart-plus']"/> ({{ totalAmount }})</router-link>
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
}
</script>

<style lang="scss">
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  // margin-bottom: 60px;
}


</style>