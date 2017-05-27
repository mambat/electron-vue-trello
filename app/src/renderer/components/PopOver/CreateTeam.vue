<template>
  <div class="pop-over-content u-fancy-scrollbar" style="height: 280px;">
    <p class="error" v-if="createTeamErr">{{createTeamErr}}</p>
    <label for="org-display-name">名称</label>
    <input id="org-display-name" type="text" name="teamName" value="" dir="auto" v-model="name">
    <label for="org-desc">描述<span class="quiet u-font-weight-normal">(可选)</span></label>
    <textarea id="org-desc" name="teamDesc" dir="auto" v-model="desc"></textarea>
    <input class="primary wide" type="submit" value="创建" :disabled="submitDisabled" @click="doCreate">
    <hr>
    <p class="quiet">一个团队就是一组看板和成员。它帮助公司、团队或家庭的组织管理。</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'create-team',
    data: function () {
      return {
        name: '',
        desc: '',
        submitDisabled: true
      };
    },
    computed: {
      ...mapGetters([
        'createTeamErr'
      ])
    },
    beforeDestroy: function () {
      this.clearCreateTeamErr();
    },
    watch: {
      name: function (newValue, oldValue) {
        this.submitDisabled = newValue === '';
      }
    },
    methods: {
      ...mapActions([
        'createTeam',
        'clearCreateTeamErr'
      ]),
      doCreate: function () {
        this.createTeam({
          name: this.name,
          desc: this.desc
        });
      }
    }
  };
</script>

<style scoped>

</style>
