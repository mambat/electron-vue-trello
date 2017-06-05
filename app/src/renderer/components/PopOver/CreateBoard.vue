<template>
  <div class="pop-over-content u-fancy-scrollbar" style="max-height: 222px;">
    <label for="boardNewTitle">标题</label>
    <input id="boardNewTitle" class="non-empty" type="text" name="name" placeholder="例如 “2017-05-31开发列表” …" v-model="name" dir="auto">
    <div>
      <div class="u-clearfix">
        <label class="u-float-left" style="margin-right: 8px;">团队</label>
      </div>
      <select name="org-id">
        <option :value="teamSelect.id">{{teamSelect.name}}</option>
      </select>
    </div>
    <input type="hidden" name="permissionLevel" value="org">
    <p class="quiet">
        <span class="icon-sm"
              :class="isPrivate ? 'icon-private' : 'icon-organization-visible'"></span>
      此看板将会被<strong>{{isPrivate ? '非公开' : '团队可见'}}</strong>.
    </p>
    <p class="error u-bottom u-clearfix" v-if="popoverErr">{{popoverErr}}</p>
    <input class="primary wide" type="submit" value="创建" @click="doCreate">
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import * as ids from '../../utils/ids';

  export default {
    name: 'create-board',
    props: {
      teamId: {
        type: String,
        default: ''
      },
      teamName: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        name: ''
      };
    },
    computed: {
      ...mapGetters([
        'popoverErr'
      ]),
      teamSelect: function () {
        return {
          id: this.teamId,
          name: this.teamId === ids.personalTeamId() ? '(无)' : this.teamName
        };
      },
      isPrivate: function () {
        return !this.team;
      }
    },
    beforeDestroy: function () {
      this.clearPopOverErr();
    },
    methods: {
      ...mapActions([
        'createBoard',
        'clearPopOverErr'
      ]),
      doCreate: function () {
        let board = {
          'teamId': this.teamSelect.id,
          'name': this.name
        };
        this.createBoard(board);
      }
    }
  };
</script>

<style scoped>

</style>
