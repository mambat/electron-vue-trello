<template>
  <div>
    <board-section section-name="个人看板"
                   :personal="true"
                   :boards="personalBoards">
    </board-section>

    <board-section v-for="item in teamBoards"
                   :key="item.id"
                   :team-id="item.id"
                   :team-name="item.name"
                   :section-name="item.name"
                   :boards="item.boards">
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
  import BoardSection from './HomePage/BoardSection';
  import bodyClassMixin from '../mixins/body-class-mixin';

  export default {
    name: 'home-page',
    mixins: [bodyClassMixin],
    data: function () {
      return {
        bodyClass: 'body-tabbed-page'
      };
    },
    components: {
      BoardSection
    },
    computed: {
      ...mapGetters([
        'personalBoards',
        'teamBoards',
        'newTeam'
      ])
    },
    created: function () {
      this.initApp();
    },
    methods: {
      ...mapActions([
        'initApp',
        'showPopOverCreateTeam'
      ]),
      createTeam: function () {
        let rect = this.$refs.createTeamLink.getBoundingClientRect();
        this.showPopOverCreateTeam({
          left: rect.left,
          top: rect.top
        });
      }
    },
    watch: {
      newTeam: function (newValue, oldValue) {
        if (newValue.id) {
          this.$router.push('/team/' + newValue.id);
        }
      }
    }
  };
</script>

<style scoped>
</style>
