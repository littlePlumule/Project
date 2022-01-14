import axios from 'axios';

export default{
  namespaced: true,
  state: {
    url: {
      carts(name, payload) {
        switch (name) {
          case 'get': 
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${payload}`;
          case 'post': 
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        }
      },
    },
    cart: {
      carts: [],
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    }
  },
  actions: {
    getCart({ state, commit }) {
      const url = state.url.carts('get');
      commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          commit('CART', response.data.data);
        }
        commit('LOADING', false, { root: true });
      });
    },
    removeCart({ state, commit, dispatch }, id) {
      const url = state.url.carts('delete', id);
      commit('LOADING', true, { root: true });
      axios.delete(url).then((response) => {
        commit('LOADING', false, { root: true });
        dispatch('getCart');
      });
    },
    addtoCart({ state, commit, dispatch}, { id, qty }) {
      const url = state.url.carts('post');
      commit('LOADING', true, { root: true });
      const item = {
        product_id: id,
        qty,
      };
      commit('LOADING', true, { root: true });
      axios.post(url, { data: item }).then((response) => {
        commit('LOADING', false, { root: true });
        dispatch('getCart');
      });
    },
  },
  getters: {
    cart: state => state.cart,
  }
}
