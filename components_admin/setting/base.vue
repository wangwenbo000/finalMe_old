<template>
  <form>
  <fieldset class="form-group">
    <label for="title" class="text-info">站点主标题</label>
    <input type="text" class="form-control" id="title"
           v-model="cf.sitetitle">
  </fieldset>
  <fieldset class="form-group">
    <label for="subtitle" class="text-info">站点副标题</label>
    <input type="text" class="form-control" id="subtitle"
           v-model="cf.subtitle">
    <small class="text-muted">用简洁的文字描述本站点</small>
  </fieldset>
  <fieldset class="form-group">
    <label for="adminTitle" class="text-info">后台站点标题</label>
    <input type="text" class="form-control" id="adminTitle"
           v-model="cf.admintitle">
  </fieldset>
    <fieldset class="form-group">
      <label for="description" class="text-info">站点描述</label>
      <textarea class="form-control" id="description"
                v-model="cf.description"></textarea>
    </fieldset>
    <fieldset class="form-group">
      <label for="keywords" class="text-info">站点关键字管理</label>
      <input type="text" class="form-control" id="keywords"
             v-model="cf.keywords">
    </fieldset>
    <br>
  <fieldset class="form-group">
    <label for="siteURL" class="text-info">站点网址</label>
    <input type="text" class="form-control" id="siteURL"
           v-model="cf.domain">
  </fieldset>
  <fieldset class="form-group">
    <label for="icp" class="text-info">站点ICP备案号</label>
    <input type="text" id="icp" class="form-control"
           v-model="cf.icpnum">
  </fieldset>
    <br>
  <fieldset class="form-group">
    <label for="serverTime" class="text-info"><i class="fa fa-server"></i> 服务器租用时间</label>
    <input type="text" class="form-control" id="serverTime"
           v-model="cf.serverstarttime">
  </fieldset>
  <br>
  <fieldset class="form-group">
    <label for="indexlistnum" class="text-info">首页列表每页显示条数</label>
    <input type="text" class="form-control" id="indexlistnum"
           v-model="cf.i_perpage">
  </fieldset>
  <fieldset class="form-group">
    <label for="adminlistnum">后台列表每页显示条数</label>
    <input type="text" class="form-control" id="adminlistnum"
           v-model="cf.a_perpage">
  </fieldset>
  <br>
  <fieldset class="form-group">
    <label for="rssswitch" class="text-info"><i class="fa fa-rss"></i>是否开启rss</label>
    <br>
    <input type="checkbox" id="rssswitch"
           v-model="cf.rsson">
  </fieldset>
  <fieldset class="form-group">
    <label for="rsslistnum" class="text-info">rss显示条数</label>
    <input type="text" class="form-control" id="rsslistnum"
           v-model="cf.r_perpage">
  </fieldset>
  </form>
</template>

<script type="text/babel">
  import checkbox from '../mixin/mixin_checkbox'
  export default{
    props: ['cf'],
    mixins:[checkbox]
  }
</script>