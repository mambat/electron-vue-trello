/**
 * Created by wanglei on 17/6/12.
 */
import PouchDB from 'pouchdb';

const doSync = function (local, remote) {
  return PouchDB.sync(local, remote, {
    live: true,
    retry: true
  }).on('change', function (info) {
    // handle change
    console.log('pouch sync change: ' + JSON.stringify(info));
  }).on('paused', function (err) {
    // replication paused (e.g. replication up to date, user went offline)
    console.log('pouch sync paused: ' + JSON.stringify(err));
  }).on('active', function () {
    // replicate resumed (e.g. new changes replicating, user went back online)
    console.log('pouch sync active');
  }).on('denied', function (err) {
    // a document failed to replicate (e.g. due to permissions)
    console.log('pouch sync denied: ' + JSON.stringify(err));
  }).on('complete', function (info) {
    // handle complete
    console.log('pouch sync complete: ' + JSON.stringify(info));
  }).on('error', function (err) {
    // handle error
    console.log('pouch sync error: ' + JSON.stringify(err));
  });
};

const cancelSync = function (sync) {
  sync.cancel();
};

export default {
  doSync,
  cancelSync
};
