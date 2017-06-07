/**
 * Created by wanglei on 17/6/2.
 */
import path from 'path';
import PouchDB from 'pouchdb';
import * as ids from '../utils/ids';

let userDataPath = require('electron').remote.getGlobal('sharedObject').userDataPath;
let db = new PouchDB(path.join(userDataPath, '/board'));

const initBoard = function (id, success, failure) {
  db.put({_id: id, id: id})
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const retrieveBoard = function (id, success, failure) {
  db.get(id)
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      if (err.status === 404) {
        initBoard(id, success, failure);
        return;
      }
      failure && failure(err);
    });
};

const addList = function (params, success, failure) {
  let list = {id: ids.newListId(), name: params.name};
  db.get(params.boardId)
    .then(function (doc) {
      let lists = doc.lists || [];
      lists.push(list);
      doc.lists = lists;
      return db.put(doc);
    })
    .then(function (result) {
      success && success(list);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const renameListName = function (params, success, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.id) {
          doc.lists[i].name = params.name;
          return db.put(doc);
        }
      }
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const addCard = function (params, success, failure) {
  let card = {id: ids.newCardId(), title: params.title};
  db.get(params.boardId)
    .then(function (doc) {
      let lists = doc.lists;
      for (let i = 0; i < lists.length; i++) {
        let list = lists[i];
        if (list.id === params.belongs) {
          let cards = list.cards || [];
          cards.push(Object.assign(card));
          list.cards = cards;
          lists[i] = list;
          return db.put(Object.assign({}, doc, {lists: lists}));
        }
      }
    })
    .then(function (result) {
      success && success(card);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const editCard = function (params, success, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.belongs) {
          for (let j = 0; j < doc.lists[i].cards.length; j++) {
            if (doc.lists[i].cards[j].id === params.id) {
              doc.lists[i].cards[j].title = params.title;
              return db.put(Object.assign({}, doc));
            }
          }
        }
      }
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const archiveList = function (params, success, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.id) {
          doc.lists.splice(i, 1);
          return db.put(Object.assign({}, doc));
        }
      }
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const archiveCard = function (params, success, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.belongs) {
          for (let j = 0; j < doc.lists[i].cards.length; j++) {
            if (doc.lists[i].cards[j].id === params.id) {
              doc.lists[i].cards.splice(j, 1);
              return db.put(Object.assign({}, doc));
            }
          }
        }
      }
    })
    .then(function (result) {
      success && success(result);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const swapList = function (params, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      let temp = doc.lists[params.oldIndex];
      doc.lists[params.oldIndex] = doc.lists[params.newIndex];
      doc.lists[params.newIndex] = temp;
      return db.put(doc);
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const dndMoveCard = function (params, failure) {
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.belongs) {
          let temp = doc.lists[i].cards[params.oldIndex];
          doc.lists[i].cards[params.oldIndex] = doc.lists[i].cards[params.newIndex];
          doc.lists[i].cards[params.newIndex] = temp;
          return db.put(doc);
        }
      }
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const dndAddCard = function (params, failure) {
  let listToAdd = '';
  db.get(params.boardId)
    .then(function (doc) {
      for (let i = 0; i < doc.lists.length; i++) {
        if (doc.lists[i].id === params.belongs) {
          listToAdd = i;
          let cards = doc.lists[i].cards || [];
          cards.splice(params.newIndex, 0, params.element);
          doc.lists[i].cards = cards;
          return db.put(doc);
        }
      }
    })
    .then(function (result) {
      db.get(params.boardId)
        .then(function (doc) {
          for (let i = 0; i < doc.lists.length; i++) {
            if (i === listToAdd) continue;
            for (let j = 0; j < doc.lists[i].cards.length; j++) {
              if (doc.lists[i].cards[j].id === params.element.id) {
                doc.lists[i].cards.splice(j, 1);
                return db.put(doc);
              }
            }
          }
        });
    })
    .catch(function (err) {
      failure && failure(err);
    });
};

const archiveBoard = function (id, success) {
  db.get(id)
    .then(function (doc) {
      db.remove(doc);
    })
    .then(function (result) {
      success && success(result);
    });
};

export default {
  retrieveBoard,
  addList,
  renameListName,
  addCard,
  editCard,
  archiveList,
  archiveCard,
  swapList,
  dndMoveCard,
  dndAddCard,
  archiveBoard
};
