<template>
  <div>
    <div style="text-align: center;">Work In Progress</div>
    <div class="window-module u-gutter">
      <a class="quiet-button"
         ref="deleteTeamLink"
         href="javascript:void(0);"
         style="padding: 6px 11px; margin-top: 32px;"
         @click="deleteTeam">
        <span>删除此团队？</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'team-setting',
    methods: {
      ...mapActions([
        'showPopOverDeleteTeam'
      ]),
      deleteTeam: function () {
        let rect = this.$refs.deleteTeamLink.getBoundingClientRect();
        this.showPopOverDeleteTeam({
          left: rect.left,
          top: rect.top
        });
      }
    }
  };
</script>

<style scoped>

</style>
