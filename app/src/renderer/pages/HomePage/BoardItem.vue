<template>
  <li class="boards-page-board-section-list-item">
    <a class="board-tile" style="background-color: rgb(0, 121, 191);" @click="clickHandler">
      <span class="board-tile-fade"></span>
      <span class="board-tile-details is-badged">
        <span :title="item.name" dir="auto" class="board-tile-details-name">{{item.name}}</span>
      </span>
      <span class="board-tile-options">
        <span title="复制当前看板." class="icon-sm icon-add board-tile-options-star-icon" ref="copyBoard"></span>
      </span>
      <span class="board-tile-badges"></span>
    </a>
    <div class="board-tags u-clearfix"></div>
  </li>
</template>

<script>
  import { mapActions } from 'vuex';

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
        return '/board/' + this.teamId + '/' + this.item.id;
      }
    },
    methods: {
      ...mapActions([
        'copyBoard'
      ]),
      clickHandler: function (e) {
        if (e.target === this.$refs.copyBoard) {
          this.copyBoard({
            teamId: this.teamId,
            id: this.item.id
          });
        } else {
          this.$router.push(this.link);
        }
      }
    }
  };
</script>

<style scoped>

</style>
