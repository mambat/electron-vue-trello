<template>
  <div>
    <team-pane-header :team="currentTeam"></team-pane-header>
    <team-pane-nav :id="id"></team-pane-nav>
    <team-pane-main></team-pane-main>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import bodyClassMixin from '../mixins/body-class-mixin';
  import TeamPaneHeader from './TeamPage/TeamPaneHeader';
  import TeamPaneNav from './TeamPage/TeamPaneNav';
  import TeamPaneMain from './TeamPage/TeamPaneMain';

  export default {
    name: 'team-page',
    mixins: [bodyClassMixin],
    components: {
      TeamPaneHeader,
      TeamPaneNav,
      TeamPaneMain
    },
    data: function () {
      return {
        bodyClass: 'body-tabbed-page',
        id: this.$route.params.id
      };
    },
    computed: {
      ...mapGetters([
        'currentTeam',
        'queryTeamErr'
      ])
    },
    created: function () {
      this.queryTeam(this.id);
    },
    methods: {
      ...mapActions([
        'queryTeam'
      ])
    },
    watch: {
      currentTeam: function (newValue, oldValue) {
        if (!newValue || !newValue.id) {
          this.$router.replace('/');
        }
      }
    }
  };
</script>

<style scoped>

</style>
