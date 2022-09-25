<template>
  <div class="home">
    <div class="container">
      <ProductList v-bind:products="products"/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      products: []
    }
  },
  props: {
  },
  components: {
    ProductList,
  },
  methods: {
    getProducts() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          this.products = res.products
          console.log(res.products)
        });
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
