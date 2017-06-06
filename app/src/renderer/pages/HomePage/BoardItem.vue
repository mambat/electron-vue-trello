<template>
  <li class="boards-page-board-section-list-item">
    <router-link :to="link" class="board-tile" style="background-color: rgb(0, 121, 191);">
      <span class="board-tile-fade"></span>
      <span class="board-tile-details is-badged">
              <span :title="item.name" dir="auto" class="board-tile-details-name">{{item.name}}</span>
          </span>
      <span class="board-tile-options">
          <span title="Click to star this board. It will show up at top of your boards list."
                class="icon-sm icon-star board-tile-options-star-icon">
          </span>
          </span>
      <span class="board-tile-badges"></span>
    </router-link>
    <div class="board-tags u-clearfix"></div>
  </li>
</template>

<script>
  export default {
    name: 'board-item',
    props: {
      teamId: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      link: function () {
        return '/board/' + this.teamId + '/' + this.item.id + '/' + this.item.name;
      }
    }
  };
</script>

<style scoped>

</style>
