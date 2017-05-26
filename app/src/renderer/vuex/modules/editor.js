import * as types from '../mutation-types';

const state = {
  shown: false
};

const mutations = {
  [types.HIDE_EDITOR_OVER] (state) {
    state.shown = false;
  },
  [types.SHOW_EDITOR_OVER] (state, pos) {
    state.shown = true;
  }
};

export default {
  state,
  mutations
};
