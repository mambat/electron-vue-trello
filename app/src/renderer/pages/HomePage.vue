<template>
  <div>
    <board-section
        section-name="Personal Boards"
        :personal="true"
        :board-list="personalBoardList">
    </board-section>

    <div class="boards-page-board-section mod-no-sidebar">
      <div class="boards-page-board-section-header">
        <div class="boards-page-board-section-header-icon">
          <span class="icon-lg icon-organization"></span>
        </div>
        <h3 class="boards-page-board-section-header-name">火箭队</h3>
        <div class="boards-page-board-section-header-options">
          <a class="boards-page-board-section-header-options-item dark-hover"
             href="/2b81b3be3cf8427e9a69e297b90dbcb6">
            <span class="icon-sm icon-board boards-page-board-section-header-options-item-icon"></span>
            <span class="boards-page-board-section-header-options-item-name">
              <span>Boards</span>
            </span>
          </a>
          <a class="boards-page-board-section-header-options-item dark-hover"
             href="/2b81b3be3cf8427e9a69e297b90dbcb6/membeers">
            <span class="icon-sm icon-member boards-page-board-section-header-options-item-icon"></span>
            <span class="boards-page-board-section-header-options-item-name">
              <span>Members</span>
            </span>
          </a>
          <a class="boards-page-board-section-header-options-item dark-hover"
             href="/2b81b3be3cf8427e9a69e297b90dbcb6/account">
            <span class="icon-sm icon-gear boards-page-board-section-header-options-item-icon"></span>
            <span class="boards-page-board-section-header-options-item-name">
              <span>Settings</span>
            </span>
          </a>
        </div>
      </div>
      <ul class="boards-page-board-section-list">
        <li class="boards-page-board-section-list-item">
          <a class="board-tile" href="/b/kWQlMnDm/2013-09"
             style="background-color: rgb(0, 121, 191);">
            <span class="board-tile-fade"></span>
            <span class="board-tile-details is-badged">
              <span title="火箭队2013-09" dir="auto" class="board-tile-details-name">火箭队2013-09</span>
            </span>
            <span class="board-tile-options">
              <span title="Click to star this board. It will show up at top of your boards list."
                    class="icon-sm icon-star board-tile-options-star-icon"></span>
            </span>
            <span class="board-tile-badges"></span>
          </a>
          <div class="board-tags u-clearfix"></div>
        </li>
        <li class="boards-page-board-section-list-item">
          <a class="board-tile" href="/b/qeUAFbPw/2013-10" style="background-color: rgb(0, 121, 191);">
            <span class="board-tile-fade"></span>
            <span class="board-tile-details is-badged">
              <span title="火箭队2013-10" dir="auto" class="board-tile-details-name">火箭队2013-10</span>
            </span>
            <span class="board-tile-options">
              <span title="Click to star this board. It will show up at top of your boards list."
                    class="icon-sm icon-star board-tile-options-star-icon"></span>
            </span>
            <span class="board-tile-badges"></span>
          </a>
          <div class="board-tags u-clearfix"></div>
        </li>
        <li class="boards-page-board-section-list-item">
          <a class="board-tile" href="/b/9ByEXtx8/2013-11" style="background-color: rgb(0, 121, 191);">
            <span class="board-tile-fade"></span>
            <span class="board-tile-details is-badged">
              <span title="火箭队2013-11" dir="auto" class="board-tile-details-name">火箭队2013-11</span>
            </span>
            <span class="board-tile-options">
              <span title="Click to star this board. It will show up at top of your boards list."
                    class="icon-sm icon-star board-tile-options-star-icon"></span>
            </span>
            <span class="board-tile-badges"></span>
          </a>
          <div class="board-tags u-clearfix"></div>
        </li>
        <li class="boards-page-board-section-list-item">
          <a class="board-tile mod-add" href="#"><span>Create new board…</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="boards-page-board-section u-clearfix">
      <a class="quiet-button u-float-left" href="#">
        <span>Create a new team…</span>
      </a>
    </div>
  </div>
</template>

<script>
  import * as style from '../utils/style';
  import BoardSection from './HomePage/BoardSection';

  export default {
    name: 'home-page',
    components: {
      BoardSection
    },
    data: function () {
      return {
        personalBoardList: [
          {id: 'welcome-board', name: 'Welcome Board'}
        ]
      };
    },
    created: function () {
      this.toggleBodyClass();
    },
    destroyed: function () {
      this.toggleBodyClass();
    },
    methods: {
      toggleBodyClass: function () {
        style.toggleClass(document.getElementsByTagName('body')[0], 'body-tabbed-page');
      }
    }
  };
</script>

<style scoped>

</style>
