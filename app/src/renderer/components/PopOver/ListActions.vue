<template>
  <div class="pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent" style="max-height: 595px;">
    <div>
      <div>
        <!--<ul class="pop-over-list">-->
        <!--<li><a href="#">Add Card…</a></li>-->
        <!--<li><a href="#">Copy List…</a></li>-->
        <!--<li><a href="#">Move List…</a></li>-->
        <!--<li><a class="highlight-icon" href="#">Subscribe </a></li>-->
        <!--</ul>-->
        <!--<hr />-->
        <!--<ul class="pop-over-list">-->
        <!--<li><a href="#">Move All Cards in This List…</a></li>-->
        <!--<li><a href="#">Archive All Cards in This List…</a></li>-->
        <!--</ul>-->
        <!--<hr />-->
        <ul class="pop-over-list">
          <li><a @click="archive">将此列表进行归档</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions([
        'archiveList'
      ]),
      archive () {
        this.archiveList({
          boardId: this.boardId,
          id: this.id
        });
        this.$emit('close');
      }
    },
    props: {
      boardId: {
        type: String,
        required: true
      },
      id: String
    }
  };
</script>
