<template>
  <div class="home">
    <div class="container">
      <form class="d-flex ms-auto pt-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchText">
        <button v-show="searchText.length >= 0" class="btn btn-outline-success" type="submit" @click="searchProduct(searchText)">Search</button>
        <button v-show="searchText.length > 0" class="btn btn-outline-danger" type="submit" @click="cancelSearchProducts()">Cancel</button>
      </form>
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
      products: [],
      searchText: ''
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
    },
    searchProduct(text) {
      console.log(text)
      fetch('https://dummyjson.com/products/search?q='+text)
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          this.products = res.products
          console.log(res.products)
        })
    },
    cancelSearchProducts() {
      this.getProducts()
      this.searchText = ''
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped>
.home{
  padding-top: 60px;
}
</style>
