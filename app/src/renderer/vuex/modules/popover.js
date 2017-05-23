/**
 * Created by wanglei on 17/5/23.
 */
import * as vals from '../../utils/vals';
import * as types from '../mutation-types';

const state = {
  shown: false,
  content: vals.POP_OVER_CREATE_TEAM
};

const mutations = {
  [types.SHOW_CREATE_TEAM_POP_OVER] (state) {
    state.shown = true;
    state.content = vals.POP_OVER_CREATE_TEAM;
  },
  [types.HIDE_POP_OVER] (state) {
    state.shown = false;
  }
};

export default {
  state,
  mutations
};
