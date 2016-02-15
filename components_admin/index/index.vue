<template>
  <div>
    <Statistics :statistics="statistics"></Statistics>
    <table class="table table-inverse table-bordered">
      <thead>
      <tr class="text-muted">
        <th>服务器开启时间</th>
        <th>运行模式</th>
        <th>端口号</th>
        <th>thinkjs版本</th>
        <th>缓存目录 <a href="" class="btn btn-success btn-sm">清空缓存</a></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{statistics.startTime | dateTime}}</td>
        <td>{{statistics.env}}</td>
        <td>{{statistics.port}}</td>
        <td>{{statistics.version}}</td>
        <td>{{statistics.runtime}}</td>
      </tr>
      </tbody>
    </table>
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
    </div>
  </div>
</template>

<script type="text/babel">
  import Statistics from './statistics.vue'
  import moment from 'moment'
  export default{
    props: ["statistics"],
    components: {
      Statistics
    },
    filters: {
      dateTime(value){
        return moment(value).format('YYYY/MM/DD h:mm:ss');
      }
    },
  }
</script>

<style lang="sass?outputStyle=expanded">

</style>