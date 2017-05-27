/**
 * Created by wanglei on 17/5/27.
 */
import * as types from '../mutation-types';

const state = {
  isLoading: false
};

const mutations = {
  [types.SHOW_LOADING] (state) {
    state.isLoading = true;
  },
  [types.HIDE_LOADING] (state) {
    state.isLoading = false;
  }
};

export default {
  state,
  mutations
};
