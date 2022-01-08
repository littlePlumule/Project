import axios from 'axios';
import router from '../router';

export default({
  state: {
    url: {
      account(name) {
        switch (name) {
          case 'signin':
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
          case 'signout':
            return `${process.env.VUE_APP_APIPATH}/logout`;
          default:
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
        }
      },
      products(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${item}`;
        }
      }
    },
    products: [],
    pagination: {},
  },
  actions: {
    signin({ state, dispatch }, user) {
      const api = state.url.account('signin');
      axios.post(api, user).then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          router.push('/admin/products');
        } else {
          dispatch('updateMessage', { 
            message: response.data.message, 
            status: 'danger', 
          })
        }
      })
    },
    signout({ state }) {
      const url = state.url.account('signout');
      axios.post(url).then((response) => {
        if (response.data.success) {
          router.push('/login');
        }
      });
    },
    getProducts({ commit, state }, page) {
      const api = state.url.products('page', page);
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('LOADING', false);
        commit('PRODUCTS', response.data.products);
        commit('PAGINATION', response.data.pagination);
      });
    },
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination,
  },
});