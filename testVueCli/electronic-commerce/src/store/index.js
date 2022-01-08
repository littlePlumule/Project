import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import AlertMessage from './AlertMessage';
import loading from './loading';
import admin from './admin';

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    loading,
    AlertMessage,
    admin,
  },
});