/**
 * Created by wanglei on 17/6/2.
 */
import path from 'path';
import PouchDB from 'pouchdb';

let userDataPath = require('electron').remote.getGlobal('sharedObject').userDataPath;
let db = new PouchDB(path.join(userDataPath, '/board'));

const initBoard = function (params, success, failure) {
  db.put(Object.assign({_id: params.id}, params))
    .then(function (result) {
      success && success(params);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const retrieveBoard = function (params, success, failure) {
  db.get(params.id)
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      if (err.status === 404) {
        initBoard(params, success, failure);
        return;
      }
      failure && failure(err);
    });
};

export default {
  retrieveBoard
};
