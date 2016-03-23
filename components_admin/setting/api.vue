<template>
  <form>
    <h4><i class="fa fa-bolt"></i> Disqus
      <small>1000次/日/GET</small>
    </h4>
    <div class="dropdown-divider"></div>
    <fieldset class="form-group">
      <label for="isdqs" class="text-info">是否开启disqus</label>
      <br>
      <input type="checkbox" id="isdqs"
             v-model="cf.d_dqson">
    </fieldset>
    <fieldset class="form-group">
      <label for="ShortName" class="text-info">ShortName</label>
      <input type="text" class="form-control" id="ShortName"
             v-model="cf.d_shortname">
    </fieldset>
    <fieldset class="form-group">
      <label for="APIKEY" class="text-info">APIKEY</label>
      <input type="text" class="form-control" id="APIKEY"
             v-model="cf.d_apikey">
    </fieldset>
    <fieldset class="form-group">
      <label for="APISECRET" class="text-info">APISECRET</label>
      <input type="text" class="form-control" id="APISECRET"
             v-model="cf.d_apisecret">
    </fieldset>
    <fieldset class="form-group">
      <label for="AccessToken" class="text-info">AccessToken</label>
      <input type="text" class="form-control" id="AccessToken"
             v-model="cf.d_accesstoken">
    </fieldset>
    <br>
    <h4><i class="fa fa-bolt"></i> BAIDU翻译
      <small>1000次/日/GET</small>
    </h4>
    <div class="dropdown-divider"></div>
    <fieldset class="form-group">
      <label for="routeTransAPI" class="text-info">routeTransAPI</label>
      <input type="text" class="form-control" id="routeTransAPI"
             v-model="cf.b_baidutransurl">
    </fieldset>
    <fieldset class="form-group">
      <label for="APPID" class="text-info">APPID</label>
      <input type="text" class="form-control" id="APPID"
             v-model="cf.b_appid">
    </fieldset>
    <fieldset class="form-group">
      <label for="KEY" class="text-info">KEY</label>
      <input type="text" class="form-control" id="KEY"
             v-model="cf.b_key">
    </fieldset>
    <br>
    <h4><i class="fa fa-bolt"></i> 七牛云</h4>
    <div class="dropdown-divider"></div>
    <fieldset class="form-group">
      <label for="ACCESSKEY" class="text-info">ACCESSKEY</label>
      <input type="text" class="form-control" id="ACCESSKEY"
             v-model="cf.q_accesskey">
    </fieldset>
    <fieldset class="form-group">
      <label for="SECRETKEY" class="text-info">SECRETKEY</label>
      <input type="text" class="form-control" id="SECRETKEY"
             v-model="cf.q_secretkey">
    </fieldset>
    <fieldset class="form-group">
      <label for="Bucket" class="text-info">Bucket</label>
      <input type="text" class="form-control" id="Bucket"
             v-model="cf.q_bucketname">
    </fieldset>
  </form>
</template>

<script type="text/babel">
  import checkbox from '../mixin/mixin_checkbox'
  export default{
    props: ['cf'],
    mixins: [checkbox]
  }
</script>