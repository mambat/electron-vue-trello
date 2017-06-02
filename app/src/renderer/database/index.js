import path from 'path';
import PouchDB from 'pouchdb';
import * as ids from '../utils/ids';

let userDataPath = require('electron').remote.getGlobal('sharedObject').userDataPath;
let db = new PouchDB(path.join(userDataPath, '/data'));

export function addTeam (team) {
  team = Object.assign({}, team, {_id: ids.newTeamId()});
  db.put(team, function (err, result) {
    if (!err) {
      alert('Successfully put a team!');
      console.log('Successfully put a team!');
    } else {
      alert(err.message);
    }
  });
};
