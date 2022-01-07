
export default({
  state: {
    isLoading: false,
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  getters: {
    isLoading: state => state.isLoading,
  }
})
