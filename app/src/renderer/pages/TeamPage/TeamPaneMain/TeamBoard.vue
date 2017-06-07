<template>
  <div class="boards-page-board-section">
    <ul class="boards-page-board-section-list">
      <board-item v-for="item in currentTeam.boards" :key="item.id" :item="item" :team-id="teamId"></board-item>
      <board-add-item :team-id="currentTeam.id" :team-name="currentTeam.name"></board-add-item>
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
      ]),
      teamId: function () {
        return this.$route.params.id;
      }
    }
  };
</script>

<style scoped>

</style>
