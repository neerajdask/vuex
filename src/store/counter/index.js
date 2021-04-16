import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namedSpace: true,
  state() {
    return {
      counter: 0
    };
  },
  getters,
  actions,
  mutations
};
