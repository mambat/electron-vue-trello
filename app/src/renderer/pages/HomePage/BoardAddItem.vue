<template>
  <li class="boards-page-board-section-list-item">
    <a ref="createBoardLink"
       class="board-tile mod-add"
       href="javascript:void(0);"
       @click="createBoard">
      <span>创建新看板…</span>
    </a>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'board-add-item',
    methods: {
      ...mapActions([
        'showPopOverCreateBoard'
      ]),
      createBoard: function () {
        let rect = this.$refs.createBoardLink.getBoundingClientRect();
        let d = {
          pos: {
            left: rect.left,
            top: rect.top
          },
          params: {}
        };
        this.showPopOverCreateBoard(d);
      }
    }
  };
</script>

<style scoped>

</style>
