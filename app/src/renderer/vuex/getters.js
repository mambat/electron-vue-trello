export const popoverShown = state => state.popover.shown;
export const popoverPos = state => state.popover.pos;
export const popoverContent = state => state.popover.content;

export const personalBoards = state => state.home.personalBoards;
export const teamBoards = state => state.home.teamBoards;
export const createTeamErr = state => state.home.createTeamErr;
export const newTeam = state => state.home.newTeam;

export const currentTeam = state => state.team.currentTeam;
export const queryTeamErr = state => state.team.queryErr;
export const updateTeamErr = state => state.team.updateErr;

export const editorShown = state => state.editor.shown;
