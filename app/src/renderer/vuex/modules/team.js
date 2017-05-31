/**
 * Created by wanglei on 17/5/25.
 */
import * as types from '../mutation-types';

const state = {
  currentTeam: {},
  queryErr: null,
  updateErr: null,
  isLoading: false
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
  },
  [types.DELETE_TEAM_SUCCESS] (state, id) {
    if (state.currentTeam.id === id) {
      state.currentTeam = {};
    }
  },
  [types.CREATE_BOARD_SUCCESS] (state, board) {
    if (!state.currentTeam.id || state.currentTeam.id !== board.teamId) {
      return;
    }

    if (!state.currentTeam.boards) {
      state.currentTeam = Object.assign({}, state.currentTeam, {
        boards: []
      });
    }
    state.currentTeam.boards.push({
      id: board.id,
      name: board.name
    });
  }
};

export default {
  state,
  mutations
};
