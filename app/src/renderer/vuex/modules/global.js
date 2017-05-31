/**
 * Created by wanglei on 17/5/27.
 */
import * as data from '../../utils/data';
import * as types from '../mutation-types';

const state = {
  isLoading: false,
  personalBoards: data.personalBoards,
  teamBoards: data.teamBoards
};

const mutations = {
  [types.SHOW_LOADING] (state) {
    state.isLoading = true;
  },
  [types.HIDE_LOADING] (state) {
    state.isLoading = false;
  },
  [types.CREATE_TEAM_SUCCESS] (state, team) {
    state.teamBoards.push(team);
  },
  [types.DELETE_TEAM_SUCCESS] (state, id) {
    for (let i = 0; i < state.teamBoards.length; i++) {
      let team = state.teamBoards[i];
      if (team.id === id) {
        state.teamBoards.splice(i, 1);
        break;
      }
    }
  },
  [types.CREATE_BOARD_SUCCESS] (state, board) {
    if (!board.teamId) {
      state.personalBoards.push({
        id: board.id,
        name: board.name
      });
      return;
    }
    for (let i = 0; i < state.teamBoards.length; i++) {
      let team = state.teamBoards[i];
      if (team.id === board.teamId) {
        let boards = team.boards || [];
        boards.push({
          id: board.id,
          name: board.name
        });
        team.boards = boards;
        break;
      }
    }
  }
};

export default {
  state,
  mutations
};
