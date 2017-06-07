<template>
  <div>
    <div class="board-wrapper" @click="packup">
      <div class="board-main-content">
        <div class="board-header u-clearfix">
          <a class="board-header-btn board-header-btn-name" @click="openRenameBoardPopover" ref="boardName">
            <span class="board-header-btn-text" dir="auto">{{board.name}}</span>
          </a>
          <div class="board-header-btns mod-left">
            <a class="board-header-btn" href="javascript:void(0);" title="归档(删除)当前看板，请谨慎操作。"
               aria-label="归档(删除)当前看板，请谨慎操作。" @click="openArchiveBoardPopover" ref="archiveBoard">
              <span class="icon-sm icon-archive board-header-btn-icon"></span>
            </a>
          </div>
        </div>
        <div class="board-canvas">
          <div id="board" class="u-fancy-scrollbar">
            <draggable v-model="lists" class="draggable-lists"
                       :options="{handle:'.list-header', ghostClass: 'ghost'}"
                       @change="listChangeHandler">
              <list v-for="list in lists"
                    :board-id="id"
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
              <span class="placeholder" @click="openAddListBox">添加一个列表…</span>
              <input class="list-name-input" type="text" name="name" placeholder="添加一个列表…"
                     autocomplete="off" dir="auto" maxlength="512" v-model="listContent"
                     v-focus="addListInputFocused" @focus="addListInputFocused = true" @blur="addListInputFocused = false">
              <div class="list-add-controls u-clearfix">
                <input class="primary mod-list-add-button" type="submit" value="保存" @click="newList()">
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
  import { mixin as focusMixin } from 'vue-focus';
  import bodyClassMixin from '../mixins/body-class-mixin';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'board-page',
    mixins: [bodyClassMixin, focusMixin],
    data: function () {
      return {
        target: {adding: '', editing: ''},
        listAdd: false,
        listContent: '',
        listNameEditing: false,
        cardAdd: false,
        addListInputFocused: true,
        bodyClass: 'body-board-view',
        id: this.$route.params.id
      };
    },
    created: function () {
      this.queryBoard(this.id);
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
    watch: {
      board: function (newValue, oldValue) {
        if (!newValue || !newValue.id) {
          this.$router.go(-1);
        }
      }
    },
    methods: {
      ...mapActions([
        'queryBoard',
        'addListToBoard',
        'showPopOverRenameBoard',
        'showPopOverArchiveBoard',
        'dragAndDropList'
      ]),
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
        this.addListInputFocused = true;
      },
      newList () {
        if (this.isEmpty(this.listContent)) return;
        this.addListToBoard({
          boardId: this.id,
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
            teamId: this.$route.params.team,
            boardId: this.board.id,
            boardName: this.board.name
          }
        });
      },
      isEmpty (str) {
        return typeof str === 'undefined' || str === null || str.trim() === '';
      },
      listChangeHandler: function (props) {
        if (!props.moved) return;
        props.moved.boardId = this.id;
        this.dragAndDropList(props.moved);
      },
      openArchiveBoardPopover () {
        let rect = this.$refs.archiveBoard.getBoundingClientRect();
        this.showPopOverArchiveBoard({
          pos: {
            left: rect.left,
            top: rect.bottom
          },
          params: {
            teamId: this.$route.params.team,
            id: this.id
          }
        });
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
    height: 100%;
  }
</style>
