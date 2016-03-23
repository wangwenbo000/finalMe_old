<template>
  <form>
    <fieldset class="form-group">
      <label for="nickname">昵称</label>
      <input type="text" class="form-control" id="nickname"
             v-model="cf.author">
    </fieldset>
    <fieldset class="form-group">
      <label for="username">帐号</label>
      <input type="text" class="form-control" id="username"
             v-model="ai.username" readonly>
    </fieldset>
    <div class="alert alert-success" role="alert">
      <fieldset class="form-group">
        <label for="passwordOld">原始密码</label>
        <input type="password" class="form-control" id="passwordOld" placeholder="">
      </fieldset>
      <fieldset class="form-group">
        <label for="newpwd1">密码修改</label>
        <input type="password" class="form-control" id="newpwd1" placeholder="">
      </fieldset>
      <fieldset class="form-group">
        <label for="newpwd2">确认密码</label>
        <input type="password" class="form-control" id="newpwd2" placeholder="">
      </fieldset>
      <button type="submit" class="btn btn-sm btn-warning">修改作者资料</button>
    </div>
  </form>
</template>

<script type="text/babel">
  import checkbox from '../mixin/mixin_checkbox'
  export default{
    props: ['cf', 'ai'],
    mixins: [checkbox]
  }
</script>