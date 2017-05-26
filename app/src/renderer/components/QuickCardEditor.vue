<template>
  <div class="quick-card-editor is-covered" v-if="editorShown" @click="hide">
    <span class="icon-lg icon-close quick-card-editor-close-icon js-close-editor" @click="hide"></span>
    <div class="quick-card-editor-card" style="top: 120px; left: 18px; width: 245px;">
      <div class="list-card list-card-quick-edit js-stop is-covered" style="width: 245px;">
        <div class="list-card-cover js-card-cover" style="background-color: rgb(252, 252, 252); background-image: url(&quot;https://trello-attachments.s3.amazonaws.com/54b01fe824abbdaff2c83981/600x347/0dad0a61a56b84b717ea513def1f43a3/taco.png&quot;); height: 141.692px; background-size: cover;"></div>
        <div class="list-card-stickers-area hide">
          <div class="stickers js-card-stickers" style="height: 141.692px;"></div>
        </div>
        <div class="list-card-details">
          <div class="list-card-labels js-card-labels"></div>
          <textarea class="list-card-edit-title js-edit-card-title" dir="auto" style="overflow: hidden; word-wrap: break-word; resize: none; height: 90px;">Cards do many cool things. Click on this card to open it and learn more...</textarea>
          <div class="badges">
            <span class="js-badges">
              <div class="badge is-icon-only" title="This card has a description.">
                <span class="badge-icon icon-sm icon-description"></span>
              </div>
              <div class="badge" title="Attachments">
                <span class="badge-icon icon-sm icon-attachment"></span>
                <span class="badge-text">1</span>
              </div>
            </span>
            <span class="js-plugin-badges"></span>
          </div>
          <div class="list-card-members js-list-card-members"></div>
        </div>
        <p class="list-card-dropzone">Drop files to upload.</p>
      </div><input class="primary wide js-save-edits" type="submit" value="Save">
      <div class="quick-card-editor-buttons fade-in">
        <a class="quick-card-editor-buttons-item js-edit-labels" href="#">
          <span class="icon-sm icon-label light"></span>
          <span class="quick-card-editor-buttons-item-text">Edit Labels</span>
        </a>
        <a class="quick-card-editor-buttons-item js-edit-members" href="#">
          <span class="icon-sm icon-member light"></span>
          <span class="quick-card-editor-buttons-item-text">Change Members</span>
        </a>
        <a class="quick-card-editor-buttons-item js-move-card" href="#">
          <span class="icon-sm icon-move light"></span>
          <span class="quick-card-editor-buttons-item-text">Move</span>
        </a>
        <a class="quick-card-editor-buttons-item js-copy-card" href="#">
          <span class="icon-sm icon-card light"></span>
          <span class="quick-card-editor-buttons-item-text">Copy</span>
        </a>
        <a class="quick-card-editor-buttons-item js-edit-due-date" href="#">
          <span class="icon-sm icon-clock light"></span>
          <span class="quick-card-editor-buttons-item-text">Change Due Date</span>
        </a>
        <a class="quick-card-editor-buttons-item js-archive" href="#">
          <span class="icon-sm icon-archive light"></span>
          <span class="quick-card-editor-buttons-item-text">Archive</span>
        </a>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'editorShown'
      ])
    },
    methods: {
      ...mapActions([
        'hideQuickCardEditor'
      ]),
      hide (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.target === event.currentTarget) {
          this.hideQuickCardEditor({});
        } // 避免click穿透触发蒙层下元素click事件
      }
    }
  };
</script>
