/**
 * Created by wanglei on 17/5/23.
 */
import * as data from '../../utils/data';
import * as types from '../mutation-types';

const state = {
  personalBoards: data.personalBoards,
  teamBoards: data.teamBoards,
  createTeamErr: null,
  newTeam: {}
};

const mutations = {
  [types.CREATE_TEAM_SUCCESS] (state, team) {
    state.newTeam = Object.assign({}, team);
    state.teamBoards.push(team);
  },
  [types.CREATE_TEAM_FAILURE] (state, err) {
    state.createTeamErr = err;
  },
  [types.CLEAR_CREATE_TEAM_ERR] (state) {
    state.createTeamErr = null;
  },
  [types.DELETE_TEAM_SUCCESS] (state, id) {
    if (state.newTeam.id === id) {
      state.newTeam = {};
    }
    for (let i = 0; i < state.teamBoards.length; i++) {
      let team = state.teamBoards[i];
      if (team.id === id) {
        state.teamBoards.splice(i, 1);
        break;
      }
    }
  }
};

export default {
  state,
  mutations
};
