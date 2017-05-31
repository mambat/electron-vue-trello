<template>
  <div class="boards-page-board-section mod-no-sidebar">
    <div class="boards-page-board-section-header">
      <div class="boards-page-board-section-header-icon">
        <span class="icon-lg" :class="personal ? 'icon-member' : 'icon-organization'"></span>
      </div>
      <h3 class="boards-page-board-section-header-name">{{sectionName}}</h3>
    </div>
    <ul class="boards-page-board-section-list">
      <board-item v-for="item in boards" :key="item.id" :item="item"></board-item>
      <board-add-item :team-id="teamId" :team-name="teamName"></board-add-item>
    </ul>
  </div>
</template>

<script>
  import BoardItem from './BoardItem';
  import BoardAddItem from './BoardAddItem';

  export default {
    name: 'board-section',
    components: {
      BoardItem,
      BoardAddItem
    },
    props: {
      teamId: {
        type: String,
        default: ''
      },
      teamName: {
        type: String,
        default: ''
      },
      sectionName: {
        type: String,
        required: true
      },
      personal: {
        type: Boolean,
        default: false
      },
      boards: {
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
