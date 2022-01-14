import axios from 'axios';

export default{
  // state 屬於模組區域變數
  // actions, mutations, getters 是屬於全域變數
  // namespaced 將所有都改為區域變數
  namespaced: true,
  state: {
    url: {
      products(name) {
        switch (name) {
          case 'getAll':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
        }
      }
    },
    products: [],
    categories: [],    
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
  },
  actions: {
    getProducts({ state, commit }) {
      const url = state.url.products('getAll');
      commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        commit('PRODUCTS', response.data.products);
        commit('CATEGORIES', response.data.products);
        commit('LOADING', false, { root: true });
      });
    },
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
  }
}
