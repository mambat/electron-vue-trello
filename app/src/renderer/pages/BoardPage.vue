<template>
  <div>
    <div class="board-wrapper">
      <div class="board-main-content">
        <div class="board-header u-clearfix">
          <a class="board-header-btn board-header-btn-name" href="#">
            <span class="board-header-btn-text" dir="auto">Welcome Board</span>
          </a>
        </div>
        <div class="board-canvas">
          <div id="board" class="u-fancy-scrollbar">
            <draggable v-model="lists" class="draggable-lists">
              <list v-for="list in lists" :list="list" :target="target" @addCardToList="addCardToList" @syncTarget="syncTarget"></list>
            </draggable>
              <div class="list-wrapper mod-add" :class="{'is-idle': !addList}">
              <span class="placeholder" @click="openAddListBox">Add a list…</span>
              <input class="list-name-input" type="text" name="name" placeholder="Add a list…" autocomplete="off" dir="auto" maxlength="512"
                     v-model="listContent">
              <div class="list-add-controls u-clearfix">
                <input class="primary mod-list-add-button" type="submit" value="Save" @click="addListToBoard()">
                <a class="icon-lg icon-close dark-hover" @click="closeAddListBox"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import List from '../components/Boards/List.vue';
  import bodyClassMixin from '../mixins/body-class-mixin';

  export default {
    name: 'board-page',
    mixins: [bodyClassMixin],
    data: () => ({
      target: {adding: '', editing: ''},
      addList: false,
      lists: [{id: '1', name: 'Stuff to try (this is a list)', cards: [{title: 'Cards do many cool things. Click on this card to open it and learn more...'}, {title: 'Add members to a board (via the sidebar) to collaborate, share and discuss.'}]}, {id: '2', name: 'Tried it (another list)', cards: []}],
      listContent: '',
      bodyClass: 'body-board-view'
    }),
    methods: {
      openAddListBox () {
        this.addList = true;
      },
      closeAddListBox () {
        this.addList = false;
      },
      addListToBoard () {
        if (this.isEmpty(this.listContent)) return;
        let list = {id: this.mockGenerateListId(), name: this.listContent, cards: []};
        this.lists.push(list);
        this.listContent = '';
      },
      addCardToList (listId, cardContent) {
        let card = {title: cardContent};
        this.lists[this.lists.findIndex((n) => n.id === listId)].cards.push(card);
      },
      syncTarget (obj) {
        this.target = Object.assign({}, this.target, obj);
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str.trim() === '';
      },
      mockGenerateListId () {
        return new Date().getTime();
      }
    },
    components: {
      List
    }
  };
</script>

<style scoped>
  .draggable-lists {
    display: inline-block;
  }
</style>
