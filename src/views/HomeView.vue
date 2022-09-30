<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 my-5">
          <div class="d-flex justify-content-start" v-for="category in productsCategory" :key="category.id">
            <button class="btn btn-light my-2">{{ category }}</button>
          </div>
        </div>
        <div class="col-10">
          <div class="container">
            <form class="d-flex ms-auto pt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchText">
              <button v-show="searchText.length >= 0" class="btn btn-outline-success" type="submit" @click="searchProduct(searchText)">Search</button>
              <button v-show="searchText.length > 0" class="btn btn-outline-danger" type="submit" @click="cancelSearchProducts()">Cancel</button>
            </form>
            <ProductList v-bind:products="products"/>
          </div>
        </div>
      </div>
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
      searchText: '',
      productsCategory: [],
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
          this.products = res.products
        })
    },
    cancelSearchProducts() {
      this.getProducts()
      this.searchText = ''
    },

    getCategory() {
      fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then((res) => {
          this.productsCategory = res
          console.log(this.productsCategory)
        })

    }
  },
  created() {
    this.getProducts(),
    this.getCategory()
  }
}
</script>

<style scoped>
.home{
  padding-top: 60px;
}
</style>
