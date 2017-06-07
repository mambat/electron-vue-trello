<template>
  <div class="pop-over-content u-fancy-scrollbar" style="max-height: 595px;">
    <ul class="pop-over-list">
      <li><a @click="archive">将此看板进行归档</a></li>
    </ul>
  </div>
</template>
<style scoped>
</style>
<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions([
        'archiveBoard'
      ]),
      archive () {
        this.archiveBoard({
          teamId: this.teamId,
          id: this.id
        });
        this.$emit('close');
      }
    },
    props: {
      teamId: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    }
  };
</script>
