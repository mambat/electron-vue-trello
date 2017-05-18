<template>
  <div id="surface">
    <supreme-header></supreme-header>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store';
  import SupremeHeader from 'components/Header';
  export default {
    store,
    components: {
      SupremeHeader
    }
  };
</script>

<style>
  @import url(assets/css/global.css);
</style>
