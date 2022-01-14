import Vue from 'vue';
import Vuex from 'vuex';

import products from './products';
import cart from './cart';
import loading from './loading';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart,
    loading,
  },
  getters: {
  }
})
