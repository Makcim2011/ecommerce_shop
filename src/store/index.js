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
  actions: {
    getProducts({ commit }) {
      commit('getProductData')
    },
    addToCart({ commit }, item) {
      commit('addItemToCart', item);
    },
    addAmount({commit}, id) {
      commit('addAmount', id)
    },
    reduceAmount({commit}, id) {
      commit('reduceAmount', id)
    },
    removeItem({commit}, id) {
      commit('removeItem', id)
    },
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    },
    addItemToCart(state, item) {

      const addedItem = state.cart.find(product => product.id === item.id);
      if(addedItem) {
        addedItem.amount++
      } else {
        state.cart.push({ ...item, amount: 1 })
      }
    },
    addAmount(state, id) {
      const currentItem = state.cart.find(product => product.id === id);
      currentItem.amount++
    },
    reduceAmount(state, id) {
      const currentItem = state.cart.find(product => product.id === id);
      if (currentItem.amount > 1) {
        currentItem.amount--
      } else {
        currentItem.amount
      }
    },
    removeItem(state, id) {
      state.cart = state.cart.filter(product => product.id !== id)
    },
  },
  modules: {
  }
})
