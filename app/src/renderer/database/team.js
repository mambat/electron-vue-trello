/**
 * Created by wanglei on 17/6/2.
 */
import path from 'path';
import PouchDB from 'pouchdb';
import boardDB from './board';
import * as ids from '../utils/ids';

let userDataPath = require('electron').remote.getGlobal('sharedObject').userDataPath;
let db = new PouchDB(path.join(userDataPath, '/team'));

const addPersonalTeamIfMissed = function (retrieveAllResult) {
  let missed = true;
  let rows = retrieveAllResult.rows || [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].id === ids.personalTeamId()) {
      missed = false;
      break;
    }
  }
  if (missed) {
    db.put({
      _id: ids.personalTeamId(),
      id: ids.personalTeamId(),
      name: '个人看板',
      desc: 'add by default'
    }).then(function (result) {
      console.log('add default personal team successful: ' + result);
    }).catch(function (err) {
      alert('add default personal team failed: ' + JSON.stringify(err));
    });
  }
};

const retrieveAll = function (success, failure) {
  db.allDocs({include_docs: true})
    .then(function (result) {
      addPersonalTeamIfMissed(result);
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const addTeam = function (team, success, failure) {
  let teamId = ids.newTeamId();
  team = Object.assign({}, team, {_id: teamId, id: teamId});
  db.put(team)
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const getTeam = function (id, success, failure) {
  db.get(id)
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const deleteTeam = function (id, success, failure) {
  db.get(id).then(function (doc) {
    return db.remove(doc);
  }).then(function (result) {
    success && success(result);
  }).catch(function (err) {
    failure && failure(err);
  });
};

const updateTeam = function (team, success, failure) {
  db.get(team.id)
    .then(function (doc) {
      return db.put(Object.assign({}, doc, team, {_rev: doc._rev}));
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const addBoard = function (board, success, failure) {
  board.id = ids.newBoardId();
  db.get(board.teamId)
    .then(function (doc) {
      let boards = doc.boards || [];
      boards.push(board);
      return db.put(Object.assign({}, doc, {boards: boards}));
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const renameBoard = function (params, success, failure) {
  db.get(params.teamId)
    .then(function (doc) {
      let boards = doc.boards;
      for (let i = 0; i < boards.length; i++) {
        let board = boards[i];
        if (board.id !== params.id) continue;
        let assign = Object.assign({}, board, {name: params.name});
        boards[i] = assign;
        return db.put(Object.assign({}, doc, {boards: boards}));
      }
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const queryBoardNameById = function (id, success, failure) {
  db.allDocs({include_docs: true})
    .then(function (result) {
      let rows = result.rows || [];
      for (let i = 0; i < rows.length; i++) {
        let doc = rows[i].doc;
        for (let j = 0; j < doc.boards.length; j++) {
          if (doc.boards[j].id === id) {
            success && success(doc.boards[j].name);
          }
        }
      }
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const archiveBoard = function ({teamId, id}, success, failure) {
  db.get(teamId)
    .then(function (doc) {
      for (let i = 0; i < doc.boards.length; i++) {
        let board = doc.boards[i];
        if (board.id !== id) continue;
        doc.boards.splice(i, 1);
        return db.put(doc);
      }
    })
    .then(function (result) {
      boardDB.archiveBoard(id, success);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

export default {
  retrieveAll,
  addTeam,
  getTeam,
  updateTeam,
  deleteTeam,
  addBoard,
  renameBoard,
  queryBoardNameById,
  archiveBoard
};
