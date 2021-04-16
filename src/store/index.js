import { createStore } from 'vuex';

import counterModule from './counter/index';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters
});

export default store;
