<template>
  <div>
    <board-section section-name="个人看板"
                   :personal="true"
                   :board-list="personalBoards">
    </board-section>

    <board-section v-for="item in teamBoards"
                   :key="item.id"
                   :section-name="item.name"
                   :board-list="item.boards">
    </board-section>

    <div class="boards-page-board-section u-clearfix">
      <a ref="createTeamLink"
         class="quiet-button u-float-left"
         href="javascript:void(0);"
         @click="createTeam">
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
        'showPopOverCreateTeam'
      ]),
      toggleBodyClass: function () {
        style.toggleClass(document.getElementsByTagName('body')[0], 'body-tabbed-page');
      },
      createTeam: function () {
        let rect = this.$refs.createTeamLink.getBoundingClientRect();
        this.showPopOverCreateTeam({
          left: rect.left,
          top: rect.top
        });
      }
    }
  };
</script>

<style scoped>
</style>
