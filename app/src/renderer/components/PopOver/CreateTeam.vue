<template>
  <div>
    <div class="pop-over-header">
      <span class="pop-over-header-title">Create Team</span>
      <a class="pop-over-header-close-btn icon-sm icon-close" href="javascript:void(0);" @click="close"></a>
    </div>
    <div>
      <div class="pop-over-content u-fancy-scrollbar" style="height: 290px;">
        <div>
          <div>
            <form>
              <p class="error" style="display:none"></p>
              <label for="org-display-name">Name</label>
              <input id="org-display-name" type="text" name="displayName" value="" dir="auto">
              <label for="org-desc">Description<span class="quiet u-font-weight-normal">(optional)</span></label>
              <textarea id="org-desc" name="desc" dir="auto"></textarea>
              <input class="primary wide" type="submit" value="Create" disabled="">
            </form>
            <hr>
            <p class="quiet">A team is a group of boards and people. It helps keep your company, team, or family organized.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'create-team',
    methods: {
      ...mapActions([
        'hidePopOver'
      ]),
      close: function () {
        this.hidePopOver();
      }
    }
  };
</script>

<style scoped>

</style>
