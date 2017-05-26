<template>
  <div class="tabbed-pane-nav u-clearfix">
    <ul>
      <li class="tabbed-pane-nav-item">
        <a class="tabbed-pane-nav-item-button active" data-tab="boards" href="/222224">看板</a>
      </li>
      <li class="tabbed-pane-nav-item">
        <a class="tabbed-pane-nav-item-button" data-tab="members" href="/222224/members">成员</a>
      </li>
      <li class="tabbed-pane-nav-item">
        <a class="tabbed-pane-nav-item-button" data-tab="settings" href="/222224/account">设置</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'team-pane-nav',
    props: {
      id: {
        type: String,
        required: false
      }
    },
    data: function () {
      return {
        editMode: false,
        forEdit: {}
      };
    },
    computed: {
      ...mapGetters([
        'currentTeam',
        'queryTeamErr',
        'updateTeamErr'
      ])
    },
    watch: {
      currentTeam: function (newValue, oldValue) {
        if (!newValue) return;
        this.forEdit = Object.assign({}, newValue);
        this.editMode = false;
      }
    },
    created: function () {
      this.queryTeam(this.id);
    },
    methods: {
      ...mapActions([
        'queryTeam',
        'updateTeam',
        'clearUpdateTeamErr'
      ]),
      editTeam: function () {
        this.editMode = true;
      },
      cancelEdit: function () {
        this.forEdit = Object.assign({}, this.currentTeam);
        this.editMode = false;
        this.clearUpdateTeamErr();
      },
      saveTeam: function () {
        this.updateTeam(this.forEdit);
      }
    }
  };

</script>

<style scoped>

</style>
