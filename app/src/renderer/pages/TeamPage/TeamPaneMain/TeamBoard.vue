<template>
  <div class="boards-page-board-section">
    <ul class="boards-page-board-section-list">
      <board-item v-for="item in boardList" :key="item.id" :item="item"></board-item>
      <board-add-item></board-add-item>
    </ul>
  </div>
</template>

<script>
  import BoardItem from '../../HomePage/BoardItem';
  import BoardAddItem from '../../HomePage/BoardAddItem';

  export default {
    name: 'team-main-board',
    components: {
      BoardItem,
      BoardAddItem
    },
    props: {
      boardList: {
        type: Array,
        default: function () {
          return [];
        }
      }
    }
  };
</script>

<style scoped>

</style>
