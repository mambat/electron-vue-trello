/**
 * Created by wanglei on 17/5/27.
 */
import * as ids from '../../utils/ids';
import * as types from '../mutation-types';

const state = {
  isLoading: false,
  personalBoards: [],
  teamBoards: []
};

const mutations = {
  [types.INIT_APP] (state, result) {
    state.teamBoards = [];
    let rows = result.rows || [];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === ids.personalTeamId()) {
        state.personalBoards = rows[i].doc.boards || [];
        continue;
      }
      state.teamBoards.push(rows[i].doc);
    }
  },
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
  [types.UPDATE_TEAM_SUCCESS] (state, team) {
    for (let i = 0; i < state.teamBoards.length; i++) {
      let item = state.teamBoards[i];
      if (team.id === item.id) {
        let assign = Object.assign({}, item, team);
        state.teamBoards.splice(i, 1, assign);
      }
    }
  },
  [types.CREATE_BOARD_SUCCESS] (state, board) {
    if (board.teamId === ids.personalTeamId()) {
      state.personalBoards.push({
        id: board.id,
        name: board.name
      });
      return;
    }
    for (let i = 0; i < state.teamBoards.length; i++) {
      if (state.teamBoards[i].id === board.teamId) {
        if (!state.teamBoards[i].boards) {
          let assign = Object.assign({}, state.teamBoards[i], {boards: []});
          state.teamBoards.splice(i, 1, assign);
        }
        state.teamBoards[i].boards.push({
          id: board.id,
          name: board.name
        });
        break;
      }
    }
  },
  [types.COPY_BOARD_SUCCESS] (state, params) {
    if (params.teamId === ids.personalTeamId()) {
      let index = state.personalBoards.findIndex((n) => n.id === params.sourceId);
      if (index >= 0) {
        state.personalBoards.splice(index + 1, 0, {
          id: params.id,
          name: params.name
        });
      }
      return;
    }

    let teamIndex = state.teamBoards.findIndex((n) => n.id === params.teamId);
    if (teamIndex < 0) return;
    let boardIndex = state.teamBoards[teamIndex].boards.findIndex((n) => n.id === params.sourceId);
    if (boardIndex < 0) return;
    state.teamBoards[teamIndex].boards.splice(boardIndex + 1, 0, {
      id: params.id,
      name: params.name
    });
  }
};

export default {
  state,
  mutations
};
