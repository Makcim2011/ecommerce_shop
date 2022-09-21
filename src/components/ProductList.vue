<template>
  <div class="container">
    <form class="d-flex ms-auto mt-3" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div class="row justify-content-center">
      <div
        class="card align-items-center justify-content-center align-self-end"
        style="width: 15rem;"
        v-for="item in products"
        :key="item.id"
        >
        <img :src="item.imgUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">Price: {{ item.price }} $</p>
          <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to card</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  components: {},

  methods: {
    ...mapActions((['getProducts', 'addToCart'])),
  },

  computed: {
    ...mapGetters(['products']),
  },

  mounted() {
    this.getProducts();
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  margin: 2em;
}
</style>>