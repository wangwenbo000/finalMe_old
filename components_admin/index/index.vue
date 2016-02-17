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
        <i class="fa fa-microphone"></i> <strong>访问统计</strong>
      </div>
      <div class="card-block">
        <canvas id="Line" style="width: 100%"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-microphone"></i> <strong>访问统计</strong>
          </div>
          <div class="card-block">
            <canvas id="Radar" style="width: 100%"></canvas>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-pie-chart"></i> <strong>访问统计</strong>
          </div>
          <div class="card-block">
            <canvas id="Doughnut" style="width: 100%"></canvas>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-microphone"></i> <strong>访问统计</strong>
          </div>
          <div class="card-block">
            !
          </div>
        </div>
      </div>
    </div>
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
    ready(){
      var LineData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
          {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
          },
          {
            fillColor : "rgba(248,211,0,0.5)",
            strokeColor : "rgba(248,211,0,1)",
            pointColor : "rgba(248,211,0,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
          }
        ]
      };
      var Line = document.getElementById("Line").getContext("2d");
      new Chart(Line).Line(LineData, {responsive: true});

      var DoughnutData = [
        {
          value : 50,
          color : "#E2EAE9"
        },
        {
          value : 100,
          color : "#F8D300"
        },
        {
          value : 40,
          color : "#949FB1"
        },
        {
          value : 120,
          color : "#4D5360"
        }
      ];
      var Doughnut = document.getElementById("Doughnut").getContext("2d");
      new Chart(Doughnut).Doughnut(DoughnutData);

      var RadardData = {
        labels : ["chrome","safari","firefox","IE11","IE10","IE9","IE8","IE7","IE6"],
        datasets : [
          {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40,30,20]
          },
          {
            fillColor : "rgba(248,211,0,0.5)",
            strokeColor : "rgba(248,211,0,1)",
            pointColor : "rgba(248,211,0,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100,40,22]
          }
        ]
      };
      var Radar = document.getElementById("Radar").getContext("2d");
      new Chart(Radar).Radar(RadardData);
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