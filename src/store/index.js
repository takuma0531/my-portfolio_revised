import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    display: false,
  },
  mutations: {
    renderMenu(state) {
      state.display = true;
    },
    unrenderMenu(state) {
      state.display = false;
    },
  },
  actions: {
  },
});
