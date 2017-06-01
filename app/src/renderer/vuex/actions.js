import * as data from '../utils/data';
import * as types from './mutation-types';

export const hidePopOver = ({commit}) => {
  commit(types.HIDE_POP_OVER);
};

export const clearPopOverErr = ({commit}) => {
  commit(types.CLEAR_POP_OVER_ERR);
};

export const showPopOverCreateTeam = ({commit}, pos) => {
  commit(types.SHOW_POP_OVER_CREATE_TEAM, pos);
};

export const showPopOverDeleteTeam = ({commit}, pos) => {
  commit(types.SHOW_POP_OVER_DELETE_TEAM, pos);
};

export const showPopOverCreateBoard = ({commit}, data) => {
  commit(types.SHOW_POP_OVER_CREATE_BOARD, data);
};

export const createTeam = ({commit}, team) => {
  try {
    team.id = data.newTeamId();
    data.saveTeam(team);
    commit(types.CREATE_TEAM_SUCCESS, team);
    this.hidePopOver({commit});
  } catch (err) {
    commit(types.POP_OVER_SUBMIT_FAILURE, err.message);
  }
};

export const queryTeam = ({commit}, id) => {
  try {
    let team = data.queryTeam(id);
    commit(types.QUERY_TEAM_SUCCESS, team);
  } catch (err) {
    commit(types.QUERY_TEAM_FAILURE, err.message);
  }
};

export const updateTeam = ({commit}, team) => {
  try {
    data.updateTeam(team);
    commit(types.UPDATE_TEAM_SUCCESS, team);
    this.clearUpdateTeamErr({commit});
  } catch (err) {
    commit(types.UPDATE_TEAM_FAILURE, err.message);
  }
};

export const clearUpdateTeamErr = ({commit}) => {
  commit(types.CLEAR_UPDATE_TEAM_ERR);
};

export const deleteTeam = ({commit}, id) => {
  data.deleteTeam(id);
  commit(types.DELETE_TEAM_SUCCESS, id);
  this.hidePopOver({commit});
};

export const createBoard = ({commit}, board) => {
  try {
    data.createBoard(board);
    commit(types.CREATE_BOARD_SUCCESS, board);
    this.hidePopOver({commit});
  } catch (err) {
    commit(types.POP_OVER_SUBMIT_FAILURE, err.message);
  }
};

export const saveListName = ({commit}, params) => {
  commit(types.SAVE_LIST_NAME_OVER, params);
};

export const addListToBoard = ({commit}, params) => {
  commit(types.ADD_LIST_TO_BOARD_OVER, params);
};

export const addCardToList = ({commit}, params) => {
  commit(types.ADD_CARD_TO_LIST_OVER, params);
};

export const sortCardList = ({commit}, params) => {
  commit(types.SORT_CARD_LIST_OVER, params);
};

export const sortCardFromCardList = ({commit}, params) => {
  commit(types.SORT_CARD_LIST_OVER_CARD, params);
};

export const showQuickCardEditor = ({commit}, params) => {
  commit(types.SHOW_EDITOR_OVER, params);
};

export const hideQuickCardEditor = ({commit}) => {
  commit(types.HIDE_EDITOR_OVER);
};

export const saveQuickCardEditor = ({commit}, params) => {
  commit(types.SAVE_EDITOR_OVER, params);
};

export const archiveCard = ({commit}, params) => {
  commit(types.ARCHIVE_CARD_OVER, params);
};

export const showPopOverRenameBoard = ({commit}, params) => {
  commit(types.SHOW_POP_OVER_RENAME_BOARD, params);
};

export const renameBoard = ({commit}, params) => {
  commit(types.RENAME_BOARD_OVER, params);
};

export const showPopOverListActions = ({commit}, params) => {
  commit(types.SHOW_POP_OVER_LIST_ACTIONS, params);
};

export const archiveList = ({commit}, params) => {
  commit(types.ARCHIVE_LIST_OVER, params);
};
