<template>
  <div class="home">
    <BunnerHeader/>
  </div>
</template>

<script>
import BunnerHeader from '@/components/BunnerHeader.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    BunnerHeader
}
}
</script>
