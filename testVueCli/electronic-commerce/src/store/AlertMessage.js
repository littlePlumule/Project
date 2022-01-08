export default({
  state: {
    messages: [],
  },
  actions: {
    updateMessage({ commit }, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      commit('UPDATEMESSAGES', { message, status, timestamp });
      setTimeout(() => {
        commit('TIMEREMOVE', timestamp);
      }, 1500);
    },
    removeMessage({ commit }, num) {
      commit('REMOVEMESSAGE', num);
    },
  },
  mutations: {
    UPDATEMESSAGES(state, { message, status, timestamp }) {
      state.messages.push({
        message,
        status,
        timestamp,
      });
    },
    REMOVEMESSAGE(state, num) {
      state.messages.splice(num, 1);
    },
    TIMEREMOVE(state, timestamp) {
      state.messages.forEach((item, i) => {
        if (item.timestamp === timestamp) {
          state.messages.splice(i, 1);
        }
      });
    }
  },
  getters: {
    messages: state => state.messages,
  },
});