<template>
  <div ref="card" class="list-card" :class="{'active-card': active}" @mouseover="activate" @mouseout="deactivate">
    <div class="list-card-cover"></div>
    <span class="icon-sm icon-edit list-card-operation dark-hover" @click="quickEditCard"></span>
    <div class="list-card-stickers-area hide">
      <div class="stickers"></div>
    </div>
    <div class="list-card-details">
      <div class="list-card-labels"></div>
      <a class="list-card-title" dir="auto" href="#">
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
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      active: false
    }),
    props: {
      card: Object
    },
    methods: {
      ...mapActions([
        'showQuickCardEditor'
      ]),
      activate () {
        this.active = true;
      },
      deactivate () {
        this.active = false;
      },
      quickEditCard () {
        let card = this.card;
        let rect = this.$refs.card.getBoundingClientRect();
        this.$emit('syncListNameFrame', false);
        this.showQuickCardEditor({
          belongs: card.belongs,
          id: card.id,
          title: card.title,
          left: rect.left,
          top: rect.top
        });
      }
    }
  };
</script>
