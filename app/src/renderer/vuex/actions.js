import * as data from '../utils/data';
import * as types from './mutation-types';

export const hidePopOver = ({commit}) => {
  commit(types.HIDE_POP_OVER);
  commit(types.CREATE_TEAM_CLOSE);
};

export const showCreateTeamPopOver = ({commit}) => {
  commit(types.SHOW_CREATE_TEAM_POP_OVER);
};

export const createTeam = ({commit}, team) => {
  try {
    team.id = data.newTeamId();
    data.saveTeam(team);
    commit(types.CREATE_TEAM_SUCCESS, team);
    this.hidePopOver({commit});
  } catch (err) {
    commit(types.CREATE_TEAM_FAILURE, err);
  }
};
