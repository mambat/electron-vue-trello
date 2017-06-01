/**
 * Created by wanglei on 17/5/23.
 */
import * as vals from '../../utils/vals';
import * as types from '../mutation-types';

const state = {
  shown: false,
  pos: {},
  params: {},
  content: '',
  err: null
};

const mutations = {
  [types.HIDE_POP_OVER] (state) {
    state.shown = false;
  },
  [types.CLEAR_POP_OVER_ERR] (state) {
    state.err = null;
  },
  [types.POP_OVER_SUBMIT_FAILURE] (state, err) {
    state.err = err;
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
  },
  [types.SHOW_POP_OVER_CREATE_BOARD] (state, data) {
    state.shown = true;
    state.pos = Object.assign({}, data.pos);
    state.params = Object.assign({}, data.params);
    state.content = vals.POP_OVER_CREATE_BOARD;
  },
  [types.SHOW_POP_OVER_RENAME_BOARD] (state, data) {
    state.shown = true;
    state.pos = Object.assign({}, data.pos);
    state.params = Object.assign({}, data.params);
    state.content = vals.POP_OVER_RENAME_BOARD;
  },
  [types.SHOW_POP_OVER_LIST_ACTIONS] (state, data) {
    state.shown = true;
    state.pos = Object.assign({}, data.pos);
    state.params = Object.assign({}, data.params);
    state.content = vals.POP_OVER_LIST_ACTIONS;
  }
};

export default {
  state,
  mutations
};
