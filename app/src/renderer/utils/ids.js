/**
 * Created by wanglei on 17/6/1.
 */
export function newTeamId () {
  return 't_' + new Date().getTime();
}

export function personalTeamId () {
  return 't_0';
}

export function newBoardId () {
  return 'b_' + new Date().getTime();
}

export function newListId () {
  return 'l_' + new Date().getTime();
}

export function newCardId () {
  return 'c_' + new Date().getTime();
}
