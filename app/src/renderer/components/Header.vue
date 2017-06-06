<template>
  <div id="header">
    <router-link class="header-logo" :class="{'is-throbbing': isThrobbing}" to="/">
      <span class="header-logo-loading"></span>
      <span class="header-logo-default"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'header-comp',
    computed: {
      isThrobbing: function () {
        return this.$store.state.app.isLoading;
      }
    }
  };
</script>

<style scoped>

</style>
