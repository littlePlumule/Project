import axios from 'axios';

export default({
  state: {
    url: {
      orders(name, item) {
        switch (name) {
          case 'orderId':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${item}`;
        }
      },
    },
    order: {
      products: [],
      user: {},
    },
  },
  mutations: {
    ORDER(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    getOrder({ state, commit }, orderId) {
      const url = state.url.order('orderId', orderId);
      commit('LOADING', true);
      axios.get(url).then((response) => {
        commit('ORDER', response.data.order);
        commit('LOADING', false);
      });
    },
  },
  getters: {

  },
})