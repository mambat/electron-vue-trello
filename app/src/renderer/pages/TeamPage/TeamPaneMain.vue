<template>
  <div class="tabbed-pane-main-col u-clearfix">
    <div class="tabbed-pane-main-col-loading" :class="{hide: !isLoading}">
      <span class="tabbed-pane-main-col-loading-spinner spinner"></span>
    </div>
    <div class="tabbed-pane-main-col-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'team-pane-main',
    computed: {
      isLoading: function () {
        return this.$store.state.team.isLoading;
      }
    }
  };
</script>

<style scoped>

</style>
