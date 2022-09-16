<template>
  <div class="container">
    <div class="cart" v-for="item in cart" :key="item.id">
      <ul class="list-group">
        <li class="list-group-item m-2">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img :src="item.imgUrl" class="img-thumbnail" :alt="item.title">
            </div>
            <div class="flex-grow-1 ms-3">
              <ul class="list-group">
                <li class="list-group-item d-flex flex-column">
                  <div class="d-flex flex-row justify-content-between align-items-center">
                    <p class="flex-grow-1 text-left">{{ item.title }}</p>
                    <button
                      type="button"
                      class="btn-amount btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      @click="removeItem(item.id)"
                      >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="d-flex flex-row justify-content-center align-items-center">
                    <button @click="reduceAmount(item.id)" class="btn-amount btn btn-sm m-2">-</button>
                    x {{ item.amount }}
                    <button @click="addAmount(item.id)" class="btn-amount btn btn-sm m-2">+</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductCart',
  components: {},
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions((['getProducts', 'addToCart', 'addAmount', 'reduceAmount', 'removeItem'])),
  },
}
</script>

<style lang="scss" scoped>
.btn-amount {
  border: none;
  color: black;
  background-color: transparent;
}
</style>