<template>
  <div class="tabbed-pane-nav u-clearfix">
    <ul>
      <li class="tabbed-pane-nav-item">
        <router-link class="tabbed-pane-nav-item-button" :to="boardsLink">看板</router-link>
      </li>
      <li class="tabbed-pane-nav-item">
        <router-link class="tabbed-pane-nav-item-button" :to="membersLink">成员</router-link>
      </li>
      <li class="tabbed-pane-nav-item">
        <router-link class="tabbed-pane-nav-item-button" :to="settingsLink">设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'team-pane-nav',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        boardsLink: this.buildLink('boards'),
        membersLink: this.buildLink('members'),
        settingsLink: this.buildLink('settings')
      };
    },
    created: function () {
      let defaultPath = '/team/' + this.id;
      if (this.$route.path === defaultPath) {
        this.$router.push(defaultPath + '/boards');
      }
    },
    methods: {
      buildLink: function (item) {
        return '/team/' + this.id + '/' + item;
      }
    }
  };

</script>

<style scoped>

</style>
