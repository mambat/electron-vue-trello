<template>
  <div>
    <board-section
        section-name="个人看板"
        :personal="true"
        :board-list="personalBoardList">
    </board-section>
    <div class="boards-page-board-section u-clearfix">
      <a class="quiet-button u-float-left" href="javascript:void(0);" @click="showCreateTeamPopOver">
        <span>创建新的团队…</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import * as style from '../utils/style';
  import BoardSection from './HomePage/BoardSection';

  export default {
    name: 'home-page',
    components: {
      BoardSection
    },
    data: function () {
      return {
        personalBoardList: [
          {id: 'welcome-board', name: '欢迎看板'}
        ]
      };
    },
    created: function () {
      this.toggleBodyClass();
    },
    destroyed: function () {
      this.toggleBodyClass();
    },
    methods: {
      ...mapActions([
        'showCreateTeamPopOver'
      ]),
      toggleBodyClass: function () {
        style.toggleClass(document.getElementsByTagName('body')[0], 'body-tabbed-page');
      }
    }
  };
</script>

<style scoped>

</style>
