<template>
  <div class="boards-page-board-section mod-no-sidebar">
    <div class="boards-page-board-section-header">
      <div class="boards-page-board-section-header-icon">
        <span class="icon-lg" :class="personal ? 'icon-member' : 'icon-organization'"></span>
      </div>
      <h3 class="boards-page-board-section-header-name">{{sectionName}}</h3>
    </div>
    <ul class="boards-page-board-section-list">
      <li v-for="item in boardList" :key="item.id" class="boards-page-board-section-list-item">
        <a class="board-tile" href="#" style="background-color: rgb(0, 121, 191);">
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
        </a>
        <div class="board-tags u-clearfix"></div>
      </li>
      <li class="boards-page-board-section-list-item">
        <a class="board-tile mod-add" href="#">
          <span>Create new board…</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'board-section',
    props: {
      sectionName: {
        type: String,
        required: true
      },
      personal: {
        type: Boolean,
        default: false
      },
      boardList: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style scoped>

</style>
