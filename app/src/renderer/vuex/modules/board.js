import * as types from '../mutation-types';

const state = {
  data: {},
  editorShown: false,
  editor: {}
};

const mutations = {
  [types.QUERY_BOARD_SUCCESS] (state, result) {
    state.data = Object.assign({}, result);
  },
  [types.SAVE_LIST_NAME_OVER] (state, params) {
    state.data.lists[state.data.lists.findIndex((n) => n.id === params.id)].name = params.name;
  },
  [types.ADD_LIST_TO_BOARD_OVER] (state, params) {
    let list = {id: mockGenerateId(), name: params.name, cards: []};
    state.data.lists.push(list);
  },
  [types.ADD_CARD_TO_LIST_OVER] (state, params) {
    let card = {belongs: params.belongs, id: mockGenerateId(), title: params.title};
    state.data.lists[state.data.lists.findIndex((n) => n.id === params.belongs)].cards.push(card);
  },
  [types.ADD_CARD_TO_LIST_OVER] (state, params) {
    let card = {belongs: params.belongs, id: mockGenerateId(), title: params.title};
    state.data.lists[state.data.lists.findIndex((n) => n.id === params.belongs)].cards.push(card);
  },
  [types.SORT_CARD_LIST_OVER] (state, params) {
    state.data.lists = params;
  },
  [types.SORT_CARD_LIST_OVER_CARD] (state, params) {
    state.data.lists.forEach((list) => {
      if (list.id === params.list.id) {
        list.cards = params.cards;
      }
    });
  },
  [types.HIDE_EDITOR_OVER] (state) {
    state.editorShown = false;
  },
  [types.SHOW_EDITOR_OVER] (state, params) {
    state.editorShown = true;
    state.editor = params;
  },
  [types.SAVE_EDITOR_OVER] (state, params) {
    state.editorShown = true;
    let list = state.data.lists[state.data.lists.findIndex((n) => n.id === params.belongs)].cards;
    list[list.findIndex((m) => m.id === params.id)].title = params.title;
  },
  [types.ARCHIVE_CARD_OVER] (state, params) {
    let list = state.data.lists[state.data.lists.findIndex((n) => n.id === params.belongs)].cards;
    list.splice(list.findIndex((m) => m.id === params.id), 1);
  },
  [types.RENAME_BOARD_OVER] (state, params) {
    state.data.name = params.name;
  },
  [types.ARCHIVE_LIST_OVER] (state, params) {
    state.data.lists.splice(state.data.lists.findIndex((n) => n.id === params.id), 1);
  }
};

function mockGenerateId () {
  return new Date().getTime();
}

export default {
  state,
  mutations
};
