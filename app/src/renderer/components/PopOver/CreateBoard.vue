<template>

  <div class="pop-over-content u-fancy-scrollbar" style="max-height: 222px;">
    <form>
      <label for="boardNewTitle">标题</label>
      <input id="boardNewTitle" class="non-empty" type="text" name="name" placeholder="例如 “Calvinball聚会时间表” …" value="" dir="auto">
      <div>
        <div class="u-clearfix">
          <label class="u-float-left" style="margin-right: 8px;">团队</label>
          <a class="icon-sm icon-information dark-hover js-helper-add-org" href="#"></a>
        </div>
        <select class="" name="org-id">
          <option value="">(无)</option>
          <option value="5929249ab2dbf951bc1d5174">111</option>
          <option value="5929249bab594bd9835c6235">111</option>
          <option selected="selected" value="5929249b00f5d6daba550d66">111</option>
        </select>
      </div>
      <input type="hidden" name="permissionLevel" value="org">
      <p class="quiet js-vis-display">
        <span class="icon-sm icon-organization-visible"></span>此看板将会被 <strong>团队可见</strong>.
        <a class="js-change-vis" href="#">变更。</a>
      </p>
      <ul class="pop-over-list js-vis-chooser hide">
        <li>
          <a class="js-select light-hover" href="#" name="private">
            <span class="icon-sm vis-icon icon-private"></span>非公开
            <span class="sub-name">此看板是非公开的，仅看板成员可以查看和编辑。</span>
          </a>
        </li>
        <li>
          <a class="js-select light-hover" href="#" name="org">
            <span class="icon-sm vis-icon icon-organization"></span>团队
            <span class="icon-sm icon-check"></span>
            <span class="sub-name">这个看板对 111 团队的成员可见。只有看板成员可以编辑看板。</span>
          </a>
        </li>
        <li>
          <a class="js-select light-hover" href="#" name="public">
            <span class="icon-sm vis-icon icon-public"></span>公开
            <span class="sub-name">此看板是公开的。任何人可以通过链接访问，也可以在Google等搜索引擎中搜索到。只有被邀请的人才可以编辑看板。</span>
          </a>
        </li>
      </ul>
      <p class="error u-bottom js-no-valid-org-privs u-clearfix hide"></p>
      <input class="primary wide js-submit" type="submit" value="创建">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create-board'
  };
</script>

<style scoped>

</style>
