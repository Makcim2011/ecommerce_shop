<template>
  <div class="container">
    <div class="row">
      <div
        class="card align-items-center align-self-end"
        style="width: 15rem;"
        v-for="item in products"
        :key="item.id"
        >
        <img :src="item.imgUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">Price: {{ item.price }} $</p>
          <a href="#" class="btn btn-primary">Add to card</a>
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
    ...mapActions((['getProducts'])),
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