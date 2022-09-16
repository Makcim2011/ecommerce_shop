<template>
  <div class="home">
    <div class="container">
      <ProductList/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  components: {
    ProductList,
}
}
</script>
