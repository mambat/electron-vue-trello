<template>
  <div id="header">
    <a class="header-logo" :class="{'is-throbbing': isThrobbing}" href="/">
      <span class="header-logo-loading"></span>
      <span class="header-logo-default"></span>
    </a>
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
