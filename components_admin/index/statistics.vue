<template>
  <div class="row">
    <div class="col-sm-3">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-newspaper-o"></i> {{statistics.articalCount}} / <i class="fa fa-file-o"></i> ({{statistics.articalCountInfo.page}})</h2>
        <p class="card-text text-muted">
          显:{{statistics.articalCountInfo.show}} |&nbsp;
          隐藏:{{statistics.articalCountInfo.hide}} |&nbsp;
          置顶:{{statistics.articalCountInfo.top}} |&nbsp;
          草稿:{{statistics.articalCountInfo.draft}}
        </p>
      </div>
    </div>
    <!--<div class="col-sm-2">-->
      <!--<div class="card card-block text-center">-->
        <!--<h2 class="card-text"><i class="fa fa-archive"></i> 30</h2>-->
        <!--<p class="card-text text-muted">草稿</p>-->
      <!--</div>-->
    <!--</div>-->
    <div class="col-sm-3">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-commenting-o"></i> {{statistics.commentCount}}</h2>
        <p class="card-text text-muted">评论 | <a href="" class="text-info">设置disqus</a></p>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-folder-open-o"></i> {{statistics.categoryCount}}</h2>
        <p class="card-text text-muted">分类目录 | <a href="" class="text-info">管理目录</a></p>
      </div>
    </div>
    <!--<div class="col-sm-2">-->
      <!--<div class="card card-block text-center">-->
        <!--<h2 class="card-text"><i class="fa fa-bar-chart"></i> 30</h2>-->
        <!--<p class="card-text text-muted">访问</p>-->
      <!--</div>-->
    <!--</div>-->
    <div class="col-sm-3">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-server"></i> {{statistics.serverLastDay}}</h2>
        <p class="card-text text-muted"><i class="fa fa-circle text-success"></i> <a href="" class="text-info">阿里云管理</a></p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  import mr from 'moment-range'
  export default{
    props:["statistics"],
    filters: {
      dateTime(value){
        return moment(value).format('YYYY/MM/DD h:mm:ss');
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>
