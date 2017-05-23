import * as types from './mutation-types';

export const hidePopOver = ({commit}) => {
  commit(types.HIDE_POP_OVER);
};

export const showCreateTeamPopOver = ({commit}) => {
  commit(types.SHOW_CREATE_TEAM_POP_OVER);
};
