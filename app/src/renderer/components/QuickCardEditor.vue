<template>
  <div class="quick-card-editor is-covered" v-if="editorShown" @click="hide">
    <span class="icon-lg icon-close quick-card-editor-close-icon" @click="hide"></span>
    <div class="quick-card-editor-card" :style="calPos()">
      <div class="list-card list-card-quick-edit is-covered" style="width: 245px;">
        <div class="list-card-cover"></div>
        <div class="list-card-stickers-area hide">
          <div class="stickers" style="height: 141.692px;"></div>
        </div>
        <div class="list-card-details">
          <div class="list-card-labels"></div>
          <textarea class="list-card-edit-title" dir="auto" style="overflow: hidden; word-wrap: break-word; resize: none; height: 90px;" ref="title">{{editorParams.title}}</textarea>
          <div class="badges">
            <span>
              <div class="badge is-icon-only" title="This card has a description.">
                <span class="badge-icon icon-sm icon-description"></span>
              </div>
              <div class="badge" title="Attachments">
                <span class="badge-icon icon-sm icon-attachment"></span>
                <span class="badge-text">1</span>
              </div>
            </span>
            <span></span>
          </div>
          <div class="list-card-members"></div>
        </div>
        <p class="list-card-dropzone">Drop files to upload.</p>
      </div>
      <input class="primary wide" type="submit" value="Save" @click="save">
      <div class="quick-card-editor-buttons fade-in">
        <a class="quick-card-editor-buttons-item" href="#">
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
    updated () {
      if (this.editorShown) {
        let dom = this.$refs.title;
        dom.focus();
        dom.select();
      }
    },
    computed: {
      ...mapGetters([
        'editorShown',
        'editorParams'
      ]),
      shown () {
        return typeof this.$refs !== 'undefined' && typeof this.$refs.title !== 'undefined' && !!this.editorShown;
      }
    },
    methods: {
      ...mapActions([
        'hideQuickCardEditor',
        'saveQuickCardEditor'
      ]),
      calPos () {
        if (!this.editorShown) return {};
        return {
          top: this.editorParams.top + 'px',
          left: this.editorParams.left + 'px',
          width: '245px'
        };
      },
      hide (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.target === event.currentTarget) {
          this.hideQuickCardEditor({});
        } // 避免click穿透触发蒙层下元素click事件
      },
      save () {
        this.saveQuickCardEditor({
          belongs: this.editorParams.belongs,
          id: this.editorParams.id,
          title: this.$refs.title.value
        });
        this.hideQuickCardEditor({});
      }
    }
  };
</script>
