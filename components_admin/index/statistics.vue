<template>
  <div class="row">
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-newspaper-o"></i> {{statistics.articalCount}}</h2>
        <p class="card-text text-muted">文章</p>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-archive"></i> 30</h2>
        <p class="card-text text-muted">草稿</p>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-commenting-o"></i> 30</h2>
        <p class="card-text text-muted">评论</p>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-folder-open-o"></i> {{statistics.categoryCount}}</h2>
        <p class="card-text text-muted">分类目录</p>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-bar-chart"></i> 30</h2>
        <p class="card-text text-muted">访问</p>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card card-block text-center">
        <h2 class="card-text"><i class="fa fa-server"></i> {{serverLastDay}}</h2>
        <p class="card-text text-muted"><i class="fa fa-circle text-success"></i> 服务器剩余</p>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import moment from 'moment'
  import mr from 'moment-range'
  export default{
    props:["statistics"],
    computed: {
      serverLastDay(){
        var start = moment();
        var end   = new Date(2016, 6, 18);
        return moment.range(start, end).diff('days');
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>
