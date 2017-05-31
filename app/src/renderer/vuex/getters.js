export const popoverShown = state => state.popover.shown;
export const popoverPos = state => state.popover.pos;
export const popoverParams = state => state.popover.params;
export const popoverContent = state => state.popover.content;

export const personalBoards = state => state.home.personalBoards;
export const teamBoards = state => state.home.teamBoards;
export const createTeamErr = state => state.home.createTeamErr;
export const newTeam = state => state.home.newTeam;

export const currentTeam = state => state.team.currentTeam;
export const queryTeamErr = state => state.team.queryErr;
export const updateTeamErr = state => state.team.updateErr;

export const lists = state => state.board.lists;
export const editorShown = state => state.board.editorShown;
export const editorParams = state => state.board.editor;
