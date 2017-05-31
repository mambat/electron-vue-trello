<template>
  <div class="boards-page-board-section">
    <ul class="boards-page-board-section-list">
      <board-item v-for="item in currentTeam.boardList" :key="item.id" :item="item"></board-item>
      <board-add-item></board-add-item>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BoardItem from '../../HomePage/BoardItem';
  import BoardAddItem from '../../HomePage/BoardAddItem';

  export default {
    name: 'team-board',
    components: {
      BoardItem,
      BoardAddItem
    },
    computed: {
      ...mapGetters([
        'currentTeam'
      ])
    }
  };
</script>

<style scoped>

</style>
