<template>
  <div id="app">
    <div id="surface">
      <supreme-header></supreme-header>
      <router-view id="content"></router-view>
    </div>
    <pop-over></pop-over>
    <quick-card-editor></quick-card-editor>
  </div>
</template>

<script>
  import SupremeHeader from 'components/Header';
  import PopOver from 'components/PopOver';
  import QuickCardEditor from 'components/QuickCardEditor.vue';

  export default {
    name: 'app',
    components: {
      SupremeHeader,
      PopOver,
      QuickCardEditor
    }
  };
</script>

<style>
  @import url(assets/css/global.css);
</style>
