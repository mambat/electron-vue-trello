import * as data from '../utils/data';
import * as types from './mutation-types';

export const hidePopOver = ({commit}) => {
  commit(types.HIDE_POP_OVER);
  commit(types.CLEAR_CREATE_TEAM_ERR);
};

export const showPopOverCreateTeam = ({commit}, pos) => {
  commit(types.SHOW_POP_OVER_CREATE_TEAM, pos);
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
