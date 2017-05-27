<template>
  <li class="boards-page-board-section-list-item">
    <router-link :to="'/board/' + item.id" class="board-tile" style="background-color: rgb(75, 191, 107);">
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
      item: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style scoped>

</style>
