/**
 * Created by wanglei on 17/5/23.
 */
import * as data from '../../utils/data';
import * as types from '../mutation-types';

const state = {
  personalBoards: data.personalBoards,
  teamBoards: data.teamBoards,
  createTeamErr: null
};

const mutations = {
  [types.CREATE_TEAM_SUCCESS] (state, team) {
    state.teamBoards.push(team);
  },
  [types.CREATE_TEAM_FAILURE] (state, err) {
    state.createTeamErr = err;
  },
  [types.CREATE_TEAM_CLOSE] (state) {
    state.createTeamErr = null;
  }
};

export default {
  state,
  mutations
};
