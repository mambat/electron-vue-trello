/**
 * Created by wanglei on 17/5/23.
 */
import * as types from '../mutation-types';

const state = {
  createTeamErr: null,
  newTeam: {}
};

const mutations = {
  [types.CREATE_TEAM_SUCCESS] (state, team) {
    state.newTeam = Object.assign({}, team);
  },
  [types.DELETE_TEAM_SUCCESS] (state, id) {
    if (state.newTeam.id === id) {
      state.newTeam = {};
    }
  }
};

export default {
  state,
  mutations
};
