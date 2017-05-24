<template>
  <div class="board-wrapper">
    <div class="board-main-content">
      <div class="board-header u-clearfix">
        <a class="board-header-btn board-header-btn-name" href="#">
          <span class="board-header-btn-text" dir="auto">Welcome Board</span>
        </a>
      </div>
      <div class="board-canvas">
        <div id="board" class="u-fancy-scrollbar">
          <div class="list-wrapper">
            <div class="list">
              <div class="list-header u-clearfix is-menu-shown">
                <div class="list-header-target"></div>
                <h2 class="list-header-name-assist" dir="auto">Advanced</h2>
                <textarea class="list-header-name mod-list-name" spellcheck="false" dir="auto" maxlength="512"
                          style="overflow: hidden; word-wrap: break-word; height: 24px;">Advanced</textarea>
                <p class="list-header-num-cards hide">6 cards</p>
                <div class="list-header-extras">
                  <span class="list-header-extras-subscribe hide">
                    <span class="icon-sm icon-subscribe"></span>
                  </span>
                  <a class="list-header-extras-menu dark-hover" href="#">
                    <span class="icon-sm icon-overflow-menu-horizontal"></span>
                  </a>
                </div>
              </div>
              <div class="list-cards u-fancy-scrollbar u-clearfix">
                <div class="list-card">
                  <div class="list-card-cover"></div>
                  <span class="icon-sm icon-edit list-card-operation dark-hover"></span>
                  <div class="list-card-stickers-area hide">
                    <div class="stickers"></div>
                  </div>
                  <div class="list-card-details">
                    <div class="list-card-labels"></div>
                    <a class="list-card-title" dir="auto" href="/c/kDjRHbGk/14-use-as-many-boards-as-you-want-we-ll-make-more">
                      <span class="card-short-id hide">#14</span>
                      Use as many boards as you want. We'll make more!
                    </a>
                    <div class="badges">
                      <span>
                        <div class="badge is-icon-only" title="This card has a description.">
                          <span class="badge-icon icon-sm icon-description"></span>
                        </div>
                      </span>
                      <span><span></span></span>
                    </div>
                    <div class="list-card-members"></div>
                  </div>
                  <p class="list-card-dropzone">Drop files to upload.</p>
                </div>
              </div>
              <a class="open-card-composer" href="#">Add a card…</a>
            </div>
          </div>
          <div class="list-wrapper mod-add is-idle">
            <form>
              <span class="placeholder">Add a list…</span>
              <input class="list-name-input" type="text" name="name" placeholder="Add a list…" autocomplete="off" dir="auto" maxlength="512">
              <div class="list-add-controls u-clearfix">
                <input class="primary mod-list-add-button" type="submit" value="Save">
                <a class="icon-lg icon-close dark-hover" href="#"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as style from '../utils/style';

  export default {
    name: 'board-page',
    created: function () {
      this.toggleBodyClass();
    },
    destroyed: function () {
      this.toggleBodyClass();
    },
    methods: {
      toggleBodyClass: function () {
        style.toggleClass(document.getElementsByTagName('body')[0], 'body-board-view');
      }
    }
  };
</script>

<style scoped>

</style>
