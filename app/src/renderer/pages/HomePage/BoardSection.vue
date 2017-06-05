<template>
  <div class="boards-page-board-section mod-no-sidebar">
    <div class="boards-page-board-section-header">
      <div class="boards-page-board-section-header-icon">
        <span class="icon-lg" :class="personal ? 'icon-member' : 'icon-organization'"></span>
      </div>
      <h3 class="boards-page-board-section-header-name">{{sectionName}}</h3>
      <div class="boards-page-board-section-header-options" v-if="!personal">
        <router-link class="boards-page-board-section-header-options-item dark-hover" :to="'/team/' + teamId + '/boards'">
          <span class="icon-sm icon-board boards-page-board-section-header-options-item-icon"></span>
          <span class="boards-page-board-section-header-options-item-name"><span>看板</span></span>
        </router-link>
        <router-link class="boards-page-board-section-header-options-item dark-hover" :to="'/team/' + teamId + '/members'">
          <span class="icon-sm icon-member boards-page-board-section-header-options-item-icon"></span>
          <span class="boards-page-board-section-header-options-item-name"><span>成员</span></span>
        </router-link>
        <router-link class="boards-page-board-section-header-options-item dark-hover" :to="'/team/' + teamId + '/settings'">
          <span class="icon-sm icon-gear boards-page-board-section-header-options-item-icon"></span>
          <span class="boards-page-board-section-header-options-item-name"><span>设置</span></span>
        </router-link>
      </div>
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
