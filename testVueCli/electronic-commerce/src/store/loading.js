export default({
  state: {
    isLoading: false,
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    updateLoading({ commit }, payload) {
      commit('LOADING', payload);
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  },
});