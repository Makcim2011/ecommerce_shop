import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    cart: state =>  state.cart
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addItemToCart', item);
      const addedItem = this.state.cart.find(product => product.id === item.id);
      console.log(addedItem)
      if(addedItem) {
        addedItem.amount = 1
      } else {
        addedItem.amount++
      }
    },
    addAmount({commit}, id) {
      commit('addAmount', id)
      // commit('addAmount', currentItem)
      // const currentItem = this.state.cart.find(product => product.id === id);
      // currentItem.amount++
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
      console.log(item)
      state.cart.push({ ...item, amount: this.addedItem })

    },
    addAmount(state, id) {
      console.log(state, id)
        const currentItem = state.cart.find(cart => cart.id === id);
        // mutate state
        currentItem.amount++
      // state.cart.push({ ...item, amount: this.addAmount })
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
