/**
 * Created by wanglei on 17/6/2.
 */
import path from 'path';
import PouchDB from 'pouchdb';

let userDataPath = require('electron').remote.getGlobal('sharedObject').userDataPath;
let db = new PouchDB(path.join(userDataPath, '/team'));

const retrieveAll = function (success, failure) {
  db.allDocs({include_docs: true})
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const addTeam = function (team, success, failure) {
  team = Object.assign({}, team, {_id: team.id});
  db.put(team)
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

export default {
  retrieveAll,
  addTeam
};
