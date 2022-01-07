import Vue from 'vue';
import Vuex from 'vuex';

import productsModules from './products';
import cartModules from './cart';
import loadingModules from './loading';

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
    productsModules,
    cartModules,
    loadingModules,
  },
  getters: {
  }
})
