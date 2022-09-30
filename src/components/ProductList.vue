<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div
        class="card align-items-center justify-content-center align-self-end"
        style="width: 15rem;"
        v-for="item in products"
        :key="item.id"
        >
        <img :src="item.images[0]" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">Price: {{ item.price }} $</p>
          <div class="d-flex justify-content-center mx-2">
            <div
              v-for="star in 5"
              :key="`your-rating-star-${star}`"
              class="mx-2"
              >
              <template v-if="item.rating >= star">
                <font-awesome-icon :icon="['fas', 'star']" class="text-warning"/>
              </template>
              <template v-else-if="item.rating <= 0.5">
                <font-awesome-icon :icon="['fas', 'star-half-stroke']" class="text-warning"/>
              </template>
              <template v-else>
                <font-awesome-icon :icon="['fas', 'star']" class="text-secondary"/>
              </template>
            </div>
            {{ item.rating }}
          </div>
          <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to card</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
    }
  },
  components: {},
  props: {
    products: []
  },

  methods: {
    ...mapActions((['addToCart'])),
  },

  computed: {
  },

  created() {
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  margin: 2em;
}
</style>>