<template>
  <div class="app-wrapper">
    <div id="surface">
      <supreme-header></supreme-header>
      <router-view id="content"></router-view>
    </div>
    <pop-over></pop-over>
  </div>
</template>

<script>
  import SupremeHeader from 'components/Header';
  import PopOver from 'components/PopOver';

  export default {
    name: 'app',
    components: {
      SupremeHeader,
      PopOver
    }
  };
</script>

<style>
  @import url(assets/css/global.css);
  .app-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
