<template>
  <div>
    <div class="board-wrapper" @click="packup">
      <div class="board-main-content">
        <div class="board-header u-clearfix">
          <a class="board-header-btn board-header-btn-name" href="#">
            <span class="board-header-btn-text" dir="auto">Welcome Board</span>
          </a>
        </div>
        <div class="board-canvas">
          <div id="board" class="u-fancy-scrollbar">
            <draggable v-model="lists" class="draggable-lists">
              <list v-for="list in lists" :list="list" :target="target" :cardAdd="cardAdd" :listNameEditing="listNameEditing" @syncTarget="syncTarget" @syncListNameFrame="syncListNameFrame" @syncAddCardBox="syncAddCardBox"></list>
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
    data: () => ({
      target: {adding: '', editing: ''},
      listAdd: false,
      listContent: '',
      listNameEditing: false,
      cardAdd: false,
      bodyClass: 'body-board-view'
    }),
    computed: {
      ...mapGetters([
        'lists'
      ])
    },
    methods: {
      ...mapActions([
        'addListToBoard'
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
