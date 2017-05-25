<template>
  <div class="list-card">
    <div class="list-card-cover"></div>
    <span class="icon-sm icon-edit list-card-operation dark-hover"></span>
    <div class="list-card-stickers-area hide">
      <div class="stickers"></div>
    </div>
    <div class="list-card-details">
      <div class="list-card-labels"></div>
      <a class="list-card-title" dir="auto" href="/c/kDjRHbGk/14-use-as-many-boards-as-you-want-we-ll-make-more">
        <span class="card-short-id hide">#14</span>
        {{card.title}}
                      </a>
      <div class="badges">
                      <span>
                        <div class="badge is-icon-only" title="This card has a description.">
                          <span class="badge-icon icon-sm icon-description"></span>
                        </div>
                      </span>
        <span><span></span></span>
      </div>
      <div class="list-card-members"></div>
    </div>
    <p class="list-card-dropzone">Drop files to upload.</p>
  </div>
</template>
<style scoped>
</style>
<script>
  export default {
    props: {
      card: Object
    }
  };
</script>
