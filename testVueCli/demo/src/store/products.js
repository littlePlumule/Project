import axios from 'axios';

export default{
  // state 屬於模組區域變數
  // actions, mutations, getters 是屬於全域變數
  // namespaced 將所有都改為區域變數
  namespaced: true,
  state: {
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
    getProducts(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  getters: {
    categories: state => state.categories,
    products: state => state.products,
  }
}
