<template>
  <div class="pop-over is-shown" v-show="popoverShown" :style="calcPos()" v-on-clickaway="clickedOutside">
    <div class="pop-over-header">
      <span class="pop-over-header-title">{{headerTitle}}</span>
      <a class="pop-over-header-close-btn icon-sm icon-close" href="javascript:void(0);" @click="close"></a>
    </div>
    <create-team v-if="isCreateTeam && popoverShown"></create-team>
    <delete-team v-if="isDeleteTeam && popoverShown"></delete-team>
    <create-board v-if="isCreateBoard && popoverShown"
                  :team-id="popoverParams.teamId" :team-name="popoverParams.teamName">
    </create-board>
    <rename-board
        v-if="isRenameBoard && popoverShown"
        :team-id="popoverParams.teamId"
        :id="popoverParams.boardId"
        :name="popoverParams.boardName"
        @close="close">
    </rename-board>
    <list-actions
        v-if="isListActions && popoverShown"
        :id="popoverParams.id"
        :board-id="popoverParams.boardId"
        @close="close">
    </list-actions>
    <archive-board
        v-if="isArchiveBoard && popoverShown"
        :team-id="popoverParams.teamId"
        :id="popoverParams.id"
        @close="close"/>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { mixin as clickaway } from 'vue-clickaway';
  import * as vals from '../utils/vals';
  import CreateTeam from './PopOver/CreateTeam';
  import DeleteTeam from './PopOver/DeleteTeam';
  import CreateBoard from './PopOver/CreateBoard';
  import RenameBoard from './PopOver/RenameBoard';
  import ListActions from './PopOver/ListActions';
  import ArchiveBoard from './PopOver/ArchiveBoard';

  export default {
    name: 'popover',
    mixins: [clickaway],
    components: {
      CreateTeam,
      DeleteTeam,
      CreateBoard,
      RenameBoard,
      ListActions,
      ArchiveBoard
    },
    data: function () {
      return {
        headerTitle: '',
        contentHeight: 0,
        pageHeaderHeight: 40,
        showAt: 0
      };
    },
    computed: {
      ...mapGetters([
        'popoverShown',
        'popoverPos',
        'popoverParams',
        'popoverContent'
      ]),
      isCreateTeam: function () {
        return this.popoverContent === vals.POP_OVER_CREATE_TEAM;
      },
      isDeleteTeam: function () {
        return this.popoverContent === vals.POP_OVER_DELETE_TEAM;
      },
      isCreateBoard: function () {
        return this.popoverContent === vals.POP_OVER_CREATE_BOARD;
      },
      isRenameBoard: function () {
        return this.popoverContent === vals.POP_OVER_RENAME_BOARD;
      },
      isListActions: function () {
        return this.popoverContent === vals.POP_OVER_LIST_ACTIONS;
      },
      isArchiveBoard: function () {
        return this.popoverContent === vals.POP_OVER_ARCHIVE_BOARD;
      }
    },
    watch: {
      popoverShown: function (newValue, oldValue) {
        this.showAt = newValue ? new Date().getTime() : 0;
      },
      popoverContent: function (newValue, oldValue) {
        if (newValue === vals.POP_OVER_CREATE_TEAM) {
          this.headerTitle = '新建团队';
          this.contentHeight = 336;
        } else if (newValue === vals.POP_OVER_DELETE_TEAM) {
          this.headerTitle = '确认删除团队？';
          this.contentHeight = 162;
        } else if (newValue === vals.POP_OVER_CREATE_BOARD) {
          this.headerTitle = '创建看板';
          this.contentHeight = 249;
        } else if (newValue === vals.POP_OVER_RENAME_BOARD) {
          this.headerTitle = '重命名看板';
          this.contentHeight = 168;
        } else if (newValue === vals.POP_OVER_LIST_ACTIONS) {
          this.headerTitle = '列表操作';
          this.contentHeight = 86;
        } else if (newValue === vals.POP_OVER_ARCHIVE_BOARD) {
          this.headerTitle = '看板操作';
          this.contentHeight = 86;
        }
      }
    },
    methods: {
      ...mapActions([
        'hidePopOver'
      ]),
      calcPos: function () {
        if (!this.popoverShown) return {};
        let top = this.popoverPos.top;
        let delta = window.innerHeight - top - this.contentHeight;
        if (delta < 0) top += delta;
        return {
          top: (top < this.pageHeaderHeight ? this.pageHeaderHeight : top) + 'px',
          left: this.popoverPos.left + 'px'
        };
      },
      close: function () {
        this.hidePopOver();
      },
      handleEsc: function (e) {
        if (e.which === 27) {
          this.close();
        }
      },
      clickedOutside: function () {
        if (new Date().getTime() - this.showAt > 300) {
          this.close();
        }
      }
    },
    created: function () {
      document.addEventListener('keydown', this.handleEsc);
    }
  };
</script>

