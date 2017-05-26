/**
 * Created by wanglei on 17/5/25.
 */
import * as types from '../mutation-types';

const state = {
  currentTeam: {},
  queryErr: null,
  updateErr: null
};

const mutations = {
  [types.QUERY_TEAM_SUCCESS] (state, team) {
    state.currentTeam = Object.assign({}, team);
    state.queryErr = '';
  },
  [types.QUERY_TEAM_FAILURE] (state, err) {
    state.queryErr = err;
  },
  [types.UPDATE_TEAM_SUCCESS] (state, team) {
    state.currentTeam = Object.assign({}, team);
  },
  [types.UPDATE_TEAM_FAILURE] (state, err) {
    state.updateErr = err;
  },
  [types.CLEAR_UPDATE_TEAM_ERR] (state) {
    state.updateErr = '';
  }
};

export default {
  state,
  mutations
};
