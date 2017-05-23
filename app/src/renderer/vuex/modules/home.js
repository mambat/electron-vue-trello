/**
 * Created by wanglei on 17/5/23.
 */
import * as mock from '../../utils/mock';
import * as types from '../mutation-types';

const state = {
  personalBoards: mock.personalBoards,
  teamBoards: mock.teamBoards
};

const mutations = {
  [types.CREATE_TEAM] (state, team) {
    team.teamId = '2333';
    team.boards = [];
    state.teamBoards.push(team);
    console.log(state.teamBoards);
  }
};

export default {
  state,
  mutations
};
