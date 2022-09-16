import { createStore } from 'vuex'
import products from '../mock/products.json'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    products: state => state.products,
    cart: state =>  state.cart
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    }
  },
  actions: {
    getProducts({ commit }) {
      commit('getProductData')
    }
  },
  modules: {
  }
})
