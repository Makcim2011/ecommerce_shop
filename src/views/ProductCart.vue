<template>
  <div class="container">
    <div
      v-if="!cart.length"
      class="alert alert-secondary mt-2"
      role="alert"
      >
      No product in cart!
    </div>
    <div
      v-if="orderPlaced"
      class="alert alert-success"
      role="alert"
      >
      Order successfully placed!
    </div>

    <div class="cart" v-for="item in cart" :key="item.id">
      <ul class="list-group">
        <li class="list-group-item m-2">
          <div class="d-flex flex-column flex-md-row justify-content-center">
            <div class="flex-shrink-0" style="width: 10rem;">
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
    <button
      class="btn btn-lg btn-block btn-success mt-3"
      v-if="cart.length"
      :disabled="isProcessing"
      @click="placeOrder"
      >
      <span v-if="!isProcessing" >Checkout ({{ totalPrice }} $)</span>
      <div v-else class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductCart',
  components: {},
  data() {
    return {
      isProcessing: false,
      orderPlaced: false,
    }
  },
  computed: {
    ...mapGetters(['cart']),
    totalPrice() {
      return this.cart.reduce((a,b) => a+b.amount*b.price, 0)
    }
  },
  methods: {
    ...mapActions((['getProducts', 'addToCart', 'addAmount', 'reduceAmount', 'removeItem', 'emptyCart'])),

    placeOrder() {
      this.isProcessing = true,
      setTimeout(() => {
        this.orderPlaced = true;
        this.isProcessing = false;
        this.emptyCart();
        this.doNotShowPlaceOrder();
      }, 1000);
    },
    doNotShowPlaceOrder() {
      setTimeout(() => {
      this.orderPlaced = false;
      }, 1500);
    },
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