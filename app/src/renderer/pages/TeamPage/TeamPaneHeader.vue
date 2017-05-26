<template>
  <div class="tabbed-pane-header">
    <div class="tabbed-pane-header-wrapper u-clearfix">
      <a class="tabbed-pane-header-image profile-image is-editable" href="javascript:void(0);">
        <span class="profile-image-icon icon-lg icon-organization"></span>
        <span class="profile-image-change-text">变更标识</span>
      </a>
      <div class="tabbed-pane-header-details">
        <div :class="{hide: editMode}">
          <div class="tabbed-pane-header-details-name">
            <h1 class="u-inline">{{currentTeam.name}}</h1>
            <span class="window-title-extra">
                <span class="icon-sm icon-private" title="这个团队是非公开的，非团队的成员不可检索，也不可见。"></span>非公开
              </span>
          </div>
          <div class="tabbed-pane-header-details-content" dir="auto">
            <p><a href=""></a></p>
          </div>
          <a class="button-link tabbed-pane-header-details-edit" href="javascript:void(0);" @click="editTeam">
            <span class="icon-sm icon-edit"></span>&nbsp;更改团队资料
          </a>
        </div>
        <div :class="{hide: !editMode}">
          <p class="error" v-if="updateTeamErr">{{updateTeamErr}}</p>
          <label>姓名</label>
          <input type="text" name="displayName" v-model="forEdit.name" dir="auto">
          <label>简称</label>
          <input type="text" name="name" v-model="forEdit.abbr">
          <label>网站<span class="quiet">（可选）</span></label>
          <input type="text" name="website" v-model="forEdit.site">
          <label>描述 <span class="quiet">(可选)</span></label>
          <textarea name="desc" dir="auto" v-model="forEdit.desc"></textarea>
          <input class="primary wide" type="submit" value="保存" @click="saveTeam">
          <input type="button" value="取消" @click="cancelEdit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'team-pane-header',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        editMode: false,
        forEdit: {}
      };
    },
    computed: {
      ...mapGetters([
        'currentTeam',
        'queryTeamErr',
        'updateTeamErr'
      ])
    },
    watch: {
      currentTeam: function (newValue, oldValue) {
        if (!newValue) return;
        this.forEdit = Object.assign({}, newValue);
        this.editMode = false;
      }
    },
    created: function () {
      this.queryTeam(this.id);
    },
    methods: {
      ...mapActions([
        'queryTeam',
        'updateTeam',
        'clearUpdateTeamErr'
      ]),
      editTeam: function () {
        this.editMode = true;
      },
      cancelEdit: function () {
        this.forEdit = Object.assign({}, this.currentTeam);
        this.editMode = false;
        this.clearUpdateTeamErr();
      },
      saveTeam: function () {
        this.updateTeam(this.forEdit);
      }
    }
  };

</script>

<style scoped>

</style>
