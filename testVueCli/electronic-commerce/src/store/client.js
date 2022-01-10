import axios from 'axios';
import $ from 'jquery';

export default({
  state: {
    url: {
      products(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${item}`;
        }
      },
      product(name, item) {
        switch (name) {
          case 'id':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${item}`
        }
      },
      carts(name, item) {
        switch (name) {
          case 'add':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
          case 'get':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item}`;
        }
      },
      coupons(name) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
        }
      },
    },
    products: [],
    pagination: {},
    product: {},
    loadingItem: '',
    cart: {
      carts:[],
    },
    coupon_code: '',
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    LOADINGITEM(state, payload) {
      state.loadingItem = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
    },
    CART(state, payload) {
      state.cart = payload;
    },
    COUPON_CODE(state, payload) {
      state.coupon_code = payload;
    }
  },
  actions: {
    getProducts({ state, commit }, page) {
      const url = state.url.products('page', page);
      commit('LOADING', true);
      axios.get(url).then((response) => {
        commit('PRODUCTS', response.data.products);
        commit('PAGINATION', response.data.pagination);
        commit('LOADING', false);
      });
    },
    getProduct({ state, commit }, id) {
      const url = state.url.product('id', id);
      commit('LOADINGITEM', id);
      axios.get(url).then((response) => {
        commit('PRODUCT', response.data.product);
        $('#productModal').modal('show');
        commit('LOADINGITEM', '');
      });
    },
    addToCart({ state, commit, dispatch }, {id, qty}) {
      const url = state.url.carts('add');
      commit('LOADINGITEM', id);
      const cart = {
        product_id: id,
        qty,
      }
      axios.post(url, {data: cart}).then(() => {
        commit('LOADINGITEM', '');
        dispatch('getCart');
        $('#productModal').modal('hide');
      });
    },
    getCart({ state, commit }) {
      const url = state.url.carts('get');
      commit('LOADING', true);
      axios.get(url).then((response) => {
        commit('CART', response.data.data);
        commit('LOADING', false);
      });
    },
    removeCartItem({ state, commit, dispatch }, id) {
      const url = state.url.carts('delete', id);
      commit('LOADING', true);
      axios.delete(url).then(() => {
        dispatch('getCart');
      });
      commit('LOADING', false);
    },
    
  },
  getters: {
    products: state => state.products,
    pagination: state => state.pagination,
    product: state => state.product,
    loadingItem: state => state.loadingItem,
    cart: state => state.cart,
  },
})