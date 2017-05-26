<template>
  <div class="tabbed-pane-main-col u-clearfix">
    <div class="tabbed-pane-main-col-loading hide">
      <span class="tabbed-pane-main-col-loading-spinner spinner"></span>
    </div>
    <div class="tabbed-pane-main-col-wrapper">
      <router-view></router-view>
      <div>
        <div>
          <div class="boards-page-board-section">
            <ul class="boards-page-board-section-list">
              <li class="boards-page-board-section-list-item">
                <a class="board-tile mod-add" href="#"><span>创建新看板…</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'team-pane-main'
  };
</script>

<style scoped>

</style>
