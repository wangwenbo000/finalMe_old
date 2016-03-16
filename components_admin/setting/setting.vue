<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-cog"></i> 设置
    </div>
    <div class="card-block">
      <form>
        <h4><i class="fa fa-diamond"></i> 站点</h4>
        <fieldset class="form-group">
          <label for="exampleInputEmail1">站点主标题</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="AdminPanel">
        </fieldset>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">站点副标题</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="用简洁的文字描述本站点">
          <small class="text-muted">用简洁的文字描述本站点</small>
        </fieldset>
        <h4><i class="fa fa-key"></i> 后台</h4>
        <div class="dropdown-divider"></div>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">后台站点标题</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="AdminPanel">
        </fieldset>
        <h4><i class="fa fa-bolt"></i> 站点配置</h4>
        <div class="dropdown-divider"></div>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">站点网址</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="http://">
        </fieldset>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">站点ICP备案号</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="ICP备">
        </fieldset>
        <fieldset class="form-group">
          <label for="exampleInputPassword1"><i class="fa fa-server"></i> 服务器租用时间</label>
          <input type="password" class="form-control" id="datetimepicker" placeholder="2016/08/08">
        </fieldset>
        <h4><i class="fa fa-book"></i> 阅读</h4>
        <div class="dropdown-divider"></div>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">默认显示文章数</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="10">
        </fieldset>
        <fieldset class="form-group">
          <label for="exampleInputPassword1"><i class="fa fa-rss"></i> 默认Feed显示文章数</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="10">
        </fieldset>
        <h4><i class="fa fa-male"></i> 作者</h4>
        <div class="dropdown-divider"></div>
        <fieldset class="form-group">
          <label for="exampleInputPassword1">昵称</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
        </fieldset>
        <div class="alert alert-warning" role="alert">
          <fieldset class="form-group">
            <label for="exampleInputPassword1">原始密码</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
          </fieldset>
          <fieldset class="form-group">
            <label for="exampleInputPassword1">密码修改</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
          </fieldset>
          <fieldset class="form-group">
            <label for="exampleInputPassword1">确认密码</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
          </fieldset>
          <button type="submit" class="btn btn-sm btn-warning">修改作者资料</button>
        </div>

        <button type="submit" class="btn btn-lg btn-primary">更新资料</button>
      </form>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{

  }
</script>