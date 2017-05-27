<template>
  <div class="pop-over-content u-fancy-scrollbar" style="max-height: 116px;">
    <p>删除团队是永久性操作，你是否确定要这样做？此项操作无法撤消。团队的看板不会被删除，而会被保留在你的个人看板列表中。</p>
    <input class="full negate" type="submit" value="永久删除" @click="doDelete">
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'delete-team',
    computed: {
      ...mapGetters([
        'currentTeam'
      ])
    },
    methods: {
      ...mapActions([
        'deleteTeam'
      ]),
      doDelete: function () {
        this.deleteTeam(this.currentTeam.id);
      }
    }
  };
</script>

<style scoped>

</style>
