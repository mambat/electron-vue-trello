<template>
  <div>
    <div class="board-wrapper" @click="packup">
      <div class="board-main-content">
        <div class="board-header u-clearfix">
          <a class="board-header-btn board-header-btn-name" @click="openRenameBoardPopover" ref="boardName">
            <span class="board-header-btn-text" dir="auto">{{board.name}}</span>
          </a>
        </div>
        <div class="board-canvas">
          <div id="board" class="u-fancy-scrollbar">
            <draggable v-model="lists" class="draggable-lists"
                       :options="{handle:'.list-header', ghostClass: 'ghost'}">
              <list v-for="list in lists"
                    :list="list"
                    :target="target"
                    :cardAdd="cardAdd"
                    :listNameEditing="listNameEditing"
                    @syncTarget="syncTarget"
                    @syncListNameFrame="syncListNameFrame"
                    @syncAddCardBox="syncAddCardBox">
              </list>
            </draggable>
            <div class="list-wrapper mod-add" :class="{'is-idle': !listAdd}">
              <span class="placeholder" @click="openAddListBox">Add a list…</span>
              <input class="list-name-input" type="text" name="name" placeholder="Add a list…" autocomplete="off" dir="auto" maxlength="512"
                     v-model="listContent">
              <div class="list-add-controls u-clearfix">
                <input class="primary mod-list-add-button" type="submit" value="Save" @click="newList()">
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
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'board-page',
    mixins: [bodyClassMixin],
    data: function () {
      return {
        target: {adding: '', editing: ''},
        listAdd: false,
        listContent: '',
        listNameEditing: false,
        cardAdd: false,
        bodyClass: 'body-board-view',
        teamId: this.$route.params.team
      };
    },
    created: function () {
      this.queryBoard({
        id: this.$route.params.id,
        name: this.$route.params.name
      });
    },
    computed: {
      ...mapGetters([
        'board'
      ]),
      lists: {
        get () {
          return this.$store.state.board.data.lists;
        },
        set (value) {
          this.$store.commit('SORT_CARD_LIST_OVER', value);
        }
      }
    },
    methods: {
      ...mapActions([
        'queryBoard',
        'addListToBoard',
        'showPopOverRenameBoard'
      ]),
      move (evt) {
        evt.clone.style.color = 'red';
        evt.from.style.color = 'blue';
        evt.item.style.color = 'white';
        console.log(evt.clone);
        console.log(evt.from);
        console.log(evt.item);
      },
      packup () {
        if (event.target.id === 'board') {
          this.syncListNameFrame(false);
          this.closeAddListBox();
          this.syncAddCardBox(false);
        } // 避免click穿透触发蒙层下元素click事件
      },
      openAddListBox () {
        this.listAdd = true;
      },
      closeAddListBox () {
        this.listAdd = false;
      },
      newList () {
        if (this.isEmpty(this.listContent)) return;
        this.addListToBoard({
          name: this.listContent
        });
        this.listContent = '';
      },
      syncTarget (obj) {
        this.target = Object.assign({}, this.target, obj);
      },
      syncListNameFrame (bol) {
        this.listNameEditing = bol;
      },
      syncAddCardBox (bol) {
        this.cardAdd = bol;
      },
      openRenameBoardPopover () {
        let rect = this.$refs.boardName.getBoundingClientRect();
        this.showPopOverRenameBoard({
          pos: {
            left: rect.left,
            top: rect.top
          },
          params: {
            teamId: this.teamId,
            boardId: this.board.id,
            boardName: this.board.name
          }
        });
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str.trim() === '';
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
