<template>
  <div class="home">
    <div class="container">
      <ProductList/>
      <FooterCompany/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import FooterCompany from '../components/FooterCompany.vue';

export default {
  name: 'HomeView',
  components: {
    ProductList,
    FooterCompany,
  }
}
</script>
