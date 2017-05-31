import * as types from '../mutation-types';

const state = {
  lists: [{id: '1', name: 'Stuff to try (this is a list)', cards: [{belongs: '1', id: '11', title: 'Cards do many cool things. Click on this card to open it and learn more...'}, {belongs: '1', id: '12', title: 'Add members to a board (via the sidebar) to collaborate, share and discuss.'}]}, {id: '2', name: 'Tried it (another list)', cards: []}],
  editorShown: false,
  editor: {}
};

const mutations = {
  [types.SAVE_LIST_NAME_OVER] (state, params) {
    state.lists[state.lists.findIndex((n) => n.id === params.id)].name = params.name;
  },
  [types.ADD_LIST_TO_BOARD_OVER] (state, params) {
    let list = {id: mockGenerateId(), name: params.name, cards: []};
    state.lists.push(list);
  },
  [types.ADD_CARD_TO_LIST_OVER] (state, params) {
    let card = {belongs: params.belongs, id: mockGenerateId(), title: params.title};
    state.lists[state.lists.findIndex((n) => n.id === params.belongs)].cards.push(card);
  },
  [types.ADD_CARD_TO_LIST_OVER] (state, params) {
    let card = {belongs: params.belongs, id: mockGenerateId(), title: params.title};
    state.lists[state.lists.findIndex((n) => n.id === params.belongs)].cards.push(card);
  },
  [types.SORT_CARD_LIST_OVER] (state, params) {
    state.lists = params;
  },
  [types.SORT_CARD_LIST_OVER_CARD] (state, params) {
    state.lists.forEach(function (list) {
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
    let list = state.lists[state.lists.findIndex((n) => n.id === params.belongs)].cards;
    list[list.findIndex((m) => m.id === params.id)].title = params.title;
  },
  [types.ARCHIVE_CARD_OVER] (state, params) {
    let list = state.lists[state.lists.findIndex((n) => n.id === params.belongs)].cards;
    list.splice(list.findIndex((m) => m.id === params.id), 1);
  }
};

function mockGenerateId () {
  return new Date().getTime();
}

export default {
  state,
  mutations
};
