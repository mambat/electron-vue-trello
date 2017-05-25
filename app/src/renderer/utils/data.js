/**
 * Created by wanglei on 17/5/23.
 */
function ExpectedError () {
  this.message = 'expected error';
  this.toString = function () {
    return this.message;
  };
}

export const personalBoards = [
  {id: 'p000_000', name: '欢迎看板'}
];

export const teamBoards = [
  // {
  //   id: 't000',
  //   name: '小猩猩队',
  //   boards: [
  //     {id: 't000_000', name: '201705'},
  //     {id: 't000_001', name: '201706'}
  //   ]
  // },
  // {
  //   id: 't001',
  //   name: '自由意志',
  //   boards: [
  //     {id: 't001_000', name: '201705'},
  //     {id: 't001_001', name: '201706'}
  //   ]
  // },
  // {
  //   id: 't002',
  //   name: '帝江混沌',
  //   boards: [
  //     {id: 't002_000', name: '201705'},
  //     {id: 't002_001', name: '201706'}
  //   ]
  // }
];

export function newTeamId () {
  return 't' + new Date().getTime();
}

export function saveTeam (team) {
  if (Math.random() < 0.5) {
    throw new ExpectedError();
  }
  console.log(JSON.stringify(team));
}
