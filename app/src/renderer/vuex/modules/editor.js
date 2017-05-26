import * as types from '../mutation-types';

const state = {
  shown: false,
  params: {}
};

const mutations = {
  [types.HIDE_EDITOR_OVER] (state) {
    state.shown = false;
  },
  [types.SHOW_EDITOR_OVER] (state, params) {
    state.shown = true;
    state.params = params;
  }
};

export default {
  state,
  mutations
};
