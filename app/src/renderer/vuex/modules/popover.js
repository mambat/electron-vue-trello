/**
 * Created by wanglei on 17/5/23.
 */
import * as vals from '../../utils/vals';
import * as types from '../mutation-types';

const state = {
  shown: false,
  pos: {},
  content: ''
};

const mutations = {
  [types.HIDE_POP_OVER] (state) {
    state.shown = false;
  },
  [types.SHOW_POP_OVER_CREATE_TEAM] (state, pos) {
    state.shown = true;
    state.pos = Object.assign({}, pos);
    state.content = vals.POP_OVER_CREATE_TEAM;
  },
  [types.SHOW_POP_OVER_DELETE_TEAM] (state, pos) {
    state.shown = true;
    state.pos = Object.assign({}, pos);
    state.content = vals.POP_OVER_DELETE_TEAM;
  }
};

export default {
  state,
  mutations
};
