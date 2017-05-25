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
            <div v-for="list in lists" class="list-wrapper">
              <div class="list">
                <div class="list-header u-clearfix is-menu-shown">
                  <div class="list-header-target"></div>
                  <h2 class="list-header-name-assist" dir="auto">Advanced</h2>
                  <textarea class="list-header-name mod-list-name" spellcheck="false" dir="auto" maxlength="512"
                            style="overflow: hidden; word-wrap: break-word; height: 24px;">{{list.name}}</textarea>
                  <p class="list-header-num-cards hide">6 cards</p>
                  <div class="list-header-extras">
                  <span class="list-header-extras-subscribe hide">
                    <span class="icon-sm icon-subscribe"></span>
                  </span>
                    <a class="list-header-extras-menu dark-hover" href="#">
                      <span class="icon-sm icon-overflow-menu-horizontal"></span>
                    </a>
                  </div>
                </div>
                <div class="list-cards u-fancy-scrollbar u-clearfix">
                  <div v-for="card in list.cards" class="list-card">
                    <div class="list-card-cover"></div>
                    <span class="icon-sm icon-edit list-card-operation dark-hover"></span>
                    <div class="list-card-stickers-area hide">
                      <div class="stickers"></div>
                    </div>
                    <div class="list-card-details">
                      <div class="list-card-labels"></div>
                      <a class="list-card-title" dir="auto" href="/c/kDjRHbGk/14-use-as-many-boards-as-you-want-we-ll-make-more">
                        <span class="card-short-id hide">#14</span>
                        {{card.title}}
                      </a>
                      <div class="badges">
                      <span>
                        <div class="badge is-icon-only" title="This card has a description.">
                          <span class="badge-icon icon-sm icon-description"></span>
                        </div>
                      </span>
                        <span><span></span></span>
                      </div>
                      <div class="list-card-members"></div>
                    </div>
                    <p class="list-card-dropzone">Drop files to upload.</p>
                  </div>
                  <div v-show="target.list===list.id && addCard" class="card-composer">
                    <div class="list-card">
                      <div class="list-card-details u-clearfix">
                        <div class="list-card-labels u-clearfix"></div>
                        <textarea class="list-card-composer-textarea" dir="auto"
                                  style="overflow: hidden; word-wrap: break-word; resize: none; height: 54px;" v-model="cardContent"></textarea>
                        <div class="list-card-members"></div>
                      </div>
                    </div>
                    <div class="cc-controls u-clearfix">
                      <div class="cc-controls-section">
                        <input class="primary confirm mod-compact" type="submit" value="Add" @click="addCardToList(list.id)">
                        <a class="icon-lg icon-close dark-hover" @click="closeAddCardBox"></a>
                      </div>
                      <div class="cc-controls-section mod-right">
                        <a class="icon-lg icon-overflow-menu-horizontal dark-background-hover" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <a v-show="target.list!==list.id || !addCard" class="open-card-composer" @click="openAddCardBox(list.id)">Add a card…</a>
              </div>
            </div>
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
  import bodyClassMixin from '../mixins/body-class-mixin';

  export default {
    name: 'board-page',
    mixins: [bodyClassMixin],
    data: () => ({
      bodyClass: 'body-board-view',
      target: {list: ''},
      addList: false,
      addCard: false,
      lists: [{
        id: '1',
        name: 'Stuff to try (this is a list)',
        cards: [{title: 'Cards do many cool things. Click on this card to open it and learn more...'}, {title: 'Add members to a board (via the sidebar) to collaborate, share and discuss.'}]
      }, {id: '2', name: 'Tried it (another list)', cards: []}],
      listContent: '',
      cardContent: ''
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
      openAddCardBox (listId) {
        this.target.list = listId;
        this.addCard = true;
      },
      closeAddCardBox () {
        this.addCard = false;
      },
      addCardToList (listId) {
        if (this.isEmpty(this.cardContent)) return;
        let card = {title: this.cardContent};
        this.lists[this.lists.findIndex((n) => n.id === listId)].cards.push(card);
        this.cardContent = '';
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str === '';
      },
      mockGenerateListId () {
        return new Date().getTime();
      }
    }
  };
</script>

<style scoped>

</style>
