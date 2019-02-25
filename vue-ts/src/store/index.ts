import Vue from 'vue';
import Vuex, { Store } from 'vuex'

import state from './state';
import actions from './actions';
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

const store: Store<any> = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
export default store;