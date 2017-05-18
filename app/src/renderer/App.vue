<template>
  <div id="surface">
    <supreme-header></supreme-header>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
  import SupremeHeader from 'components/Header';
  export default {
    name: 'app',
    components: {
      SupremeHeader
    }
  };
</script>

<style>
  @import url(assets/css/global.css);
</style>
