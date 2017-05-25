<template>
  <div>
    <div class="tabbed-pane-header">
      <div class="tabbed-pane-header-wrapper u-clearfix"><a class="tabbed-pane-header-image profile-image is-editable js-change-org-logo"
                                                            href="#"><span class="profile-image-icon icon-lg icon-organization"></span><span
          class="profile-image-change-text">变更标识</span></a>
        <div class="tabbed-pane-header-details">
          <div class="js-current-details">
            <div class="tabbed-pane-header-details-name"><h1 class="u-inline">2222</h1><span class="window-title-extra"><span
                class="icon-sm icon-private" title="这个团队是非公开的，非团队的成员不可检索，也不可见。"></span>非公开</span></div>
            <div class="tabbed-pane-header-details-content" dir="auto"><p><a href=""></a></p></div>
            <a class="button-link tabbed-pane-header-details-edit js-edit-profile" href="#"><span class="icon-sm icon-edit"></span>&nbsp;更改团队资料</a>
          </div>
          <form class="js-profile-form hide"><p class="error js-profile-form-error hide"></p><label>姓名</label><input type="text" name="displayName"
                                                                                                                     value="2222"
                                                                                                                     dir="auto"><label>简称</label><input
              type="text" name="name" value="222224"><label>网站<span class="quiet">（可选）</span></label><input type="text" name="website"
                                                                                                            value=""><label>描述 <span class="quiet">(可选)</span></label><textarea
              name="desc" dir="auto"></textarea><input class="primary wide js-submit-profile" type="submit" value="保存"><input
              class="js-cancel-edit-profile" type="button" value="取消"></form>
        </div>
      </div>
    </div>
    <div class="tabbed-pane-nav u-clearfix">
      <ul>
        <li class="tabbed-pane-nav-item"><a class="tabbed-pane-nav-item-button js-org-profile active" data-tab="boards" href="/222224">看板</a></li>
        <li class="tabbed-pane-nav-item"><a class="tabbed-pane-nav-item-button js-org-members" data-tab="members" href="/222224/members">成员</a></li>
        <li class="tabbed-pane-nav-item"><a class="tabbed-pane-nav-item-button js-org-account" data-tab="settings" href="/222224/account">设置</a></li>
        <li class="tabbed-pane-nav-item"><a class="tabbed-pane-nav-item-button dark-hover js-billing" data-tab="business-class"
                                            href="/222224/billing"><span
            class="icon-sm icon-business-class mod-inline icon-business-class-color"></span> 企业级服务</a></li>
      </ul>
    </div>
    <div class="tabbed-pane-main-col u-clearfix">
      <div class="tabbed-pane-main-col-loading hide js-loading-page"><span class="tabbed-pane-main-col-loading-spinner spinner"></span></div>
      <div class="tabbed-pane-main-col-wrapper js-content">
        <div>
          <div data-reactroot="" class="js-react-root">
            <div class="boards-page-board-section">
              <ul class="boards-page-board-section-list">
                <li class="boards-page-board-section-list-item"><a class="board-tile mod-add" href="#"><span>创建新看板…</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as style from '../utils/style';

  export default {
    name: 'team-page',
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
