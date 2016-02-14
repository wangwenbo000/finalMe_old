<template>
  <div>
    <Statistics></Statistics>
    <div class="card">
      <div class="card-header">
        <i class="fa fa-microphone"></i> <strong>控制台通告</strong>
      </div>
      <div class="card-block">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa fa-bolt text-warning"></i> &nbsp;
            <a href="javascript:;">“空格APP”入下载榜前三 打响“共享经济”第一枪</a>
            <p class="text-muted pull-right">2014-08-08</p>
          </li>
        </ul>
      </div>
      <!--<div class="card-footer text-muted clearfix">-->
      <!--<div class="pagebox pull-right">-->
      <!--<div class="pagination-info">共有{{listData.count}}条，每页显示：{{listData.numsPerPage}}条</div>-->
      <!--<nav id="pagination"></nav>-->
      <!--<div class="pagination-go">-->
      <!--<input type="text" class="form-control ipt">-->
      <!--<a class="btn btn-secondary">GO</a>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script type="text/babel">
  import Statistics from './statistics.vue'
  export default{
    components: {
      Statistics
    }
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>