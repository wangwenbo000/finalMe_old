<template>
  <div>
    <Statistics :statistics="statistics"></Statistics>
    <table class="table table-bordered">
      <thead>
      <tr class="text-muted">
        <th>服务器开启时间</th>
        <th>运行模式</th>
        <th>thinkjs版本</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{statistics.startTime | dateTime}}</td>
        <td>{{statistics.env}}</td>
        <td>{{statistics.version}}</td>
      </tr>
      </tbody>
    </table>
    <div class="card">
      <div class="card-header">
        <i class="fa fa-bar-chart"></i>&nbsp;<strong>撰写与评论热力图</strong>
        <a href="#" class="label label-default label-success">2016年</a>
      </div>
      <div class="card-block">
        <div id="main" style="height: 600px"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Statistics from './statistics.vue';
  import loading from '../mixin/mixin_loading';
  import Chart from 'echarts'
  //  require('echarts/lib/chart/heatmap');
  //  require('echarts/lib/component/tooltip');
  //  require('echarts/lib/component/axis');
  import moment from 'moment'

  export default{
    props: ["statistics"],
    mixins: [loading],
    components: {
      Statistics
    },
    ready(){
      this.$http.post('/admin/globaldata/echart').then(response=> {
        this.echart(response.data.data);
      });
    },
    filters: {
      dateTime(value){
        return moment(value).format('YYYY/MM/DD h:mm:ss');
      }
    },
    methods:{
      echart(data){
        var myChart = Chart.init(document.getElementById('main'));
        var month = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25','26','27','28','29','30','31'];

        var data = data;

        data = data.map(function (item) {
          return [item[1]-1, item[0], item[2] || '-'];
        });
        myChart.setOption({
          tooltip: {
            position: 'bottom'
          },
          animation: false,
          grid: {
            height: '560px',
            width: '1020px',
            y: '2%',
            x: '3%'
          },
          xAxis: {
            type: 'category',
            data: days
          },
          yAxis: {
            type: 'category',
            data: month
          },
          visualMap: {
            min: 1,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
          bottom: '-56px'
          },
          series: [{
            name: '日志标记',
            type: 'heatmap',
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        });
      }
    }
  }
</script>