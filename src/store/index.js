import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
    cart: state =>  state.cart
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addItemToCart', item);
      const addedItem = this.state.cart.find(product => product.id === item.id);
      if(addedItem) {
        addedItem.amount++
      } else {
        addedItem.amount = 1
      }
    },
    addAmount({commit}, id) {
      commit('addAmount', currentItem)
      const currentItem = this.state.cart.find(product => product.id === id);
      currentItem.amount++
    },
    reduceAmount({commit}, id) {
      commit('reduceAmount', id)
    },
    removeItem({commit}, id) {
      commit('removeItem', id)
    },
    emptyCart({ commit }) {
      commit('emptyCart')
    },
  },
  mutations: {
    addItemToCart(state, item) {
      state.cart.push({ ...item, amount: this.addedItem })
    },
    addAmount(state, item) {
      state.cart.push({ ...item, amount: this.addAmount })
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
    emptyCart(state) {
      state.cart = [];
    }
  },
  modules: {
  }
})
