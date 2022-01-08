export default({
  state: {
    isLoading: false,
  },
  actions: {
    updateLoading({commit}, payload) {
      commit('LOADING', payload);
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  getters: {
    isLoading: state => state.isloading,
  },
});