import * as types from './mutation-types';

export const hidePopOver = ({commit}) => {
  commit(types.HIDE_POP_OVER);
};

export const showCreateTeamPopOver = ({commit}) => {
  commit(types.SHOW_CREATE_TEAM_POP_OVER);
};

export const createTeam = ({commit}, team) => {
  commit(types.CREATE_TEAM, team);
};
