<template>
  <div class="pop-over is-shown" v-show="popoverShown" :style="calcPos()">
    <div class="pop-over-header">
      <span class="pop-over-header-title">{{headerTitle}}</span>
      <a class="pop-over-header-close-btn icon-sm icon-close" href="javascript:void(0);" @click="close"></a>
    </div>
    <create-team v-if="isCreateTeam && popoverShown"></create-team>
    <delete-team v-if="isDeleteTeam && popoverShown"></delete-team>
    <create-board v-if="isCreateBoard && popoverShown"
                  :team-id="popoverParams.teamId" :team-name="popoverParams.teamName">
    </create-board>
    <rename-board v-if="isRenameBoard && popoverShown" :name="popoverParams.boardName" @close="close"></rename-board>
    <list-actions v-if="isListActions && popoverShown" :id="popoverParams.id" @close="close"></list-actions>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import * as vals from '../utils/vals';
  import CreateTeam from './PopOver/CreateTeam';
  import DeleteTeam from './PopOver/DeleteTeam';
  import CreateBoard from './PopOver/CreateBoard';
  import RenameBoard from './PopOver/RenameBoard';
  import ListActions from './PopOver/ListActions';

  export default {
    name: 'popover',
    components: {
      CreateTeam,
      DeleteTeam,
      CreateBoard,
      RenameBoard,
      ListActions
    },
    data: function () {
      return {
        headerTitle: '',
        contentHeight: 0,
        pageHeaderHeight: 40
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
      }
    },
    watch: {
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
          this.contentHeight = 249;
        } else if (newValue === vals.POP_OVER_LIST_ACTIONS) {
          this.headerTitle = '列表操作';
          this.contentHeight = 249;
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
      }
    }
  };
</script>

