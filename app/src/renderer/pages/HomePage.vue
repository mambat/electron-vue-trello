<template>
  <div class="home-page-wrapper">
    <board-section
        section-name="个人看板"
        :personal="true"
        :board-list="personalBoards"/>

    <board-section
        v-for="item in teamBoards"
        :key="item.id"
        :section-name="item.name"
        :board-list="item.boards"/>

    <div class="boards-page-board-section u-clearfix">
      <a class="quiet-button u-float-left" href="javascript:void(0);" @click="showCreateTeamPopOver">
        <span>创建新的团队…</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import * as style from '../utils/style';
  import BoardSection from './HomePage/BoardSection';

  export default {
    name: 'home-page',
    components: {
      BoardSection
    },
    computed: {
      ...mapGetters([
        'personalBoards',
        'teamBoards'
      ])
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
  .home-page-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
