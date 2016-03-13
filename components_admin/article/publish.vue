<template>
  <table class="table table-bordered">
    <thead class="thead-default">
    <tr>
      <th colspan="3">发表模式</th>
      <th><i class="fa fa-clock-o"></i> 发表时间</th>
      <th><i class="fa fa-calendar"></i> 最后修改时间</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <span class="label label-default">
        <input type="radio" value="2" v-model="show" name="showState" checked> 正常
          </span>
      </td>
      <td>
        <span class="label label-default">
        <input type="radio" value="0" v-model="show" name="showState"> 隐藏
          </span>
      </td>
      <td>
        <span class="label label-default">
        <input type="radio" value="1" v-model="show" name="showState"> 置顶
          </span>
      </td>
      <td>{{lastdate}}</td>
      <td><input type='text' class="form-control " id='datetimepicker' v-model="pushdate" value="{{pushdate}}"/></td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    props: ['lastdate', 'pushdate', 'show'],
    ready(){
      //初始化时间选择器
      $('#datetimepicker').datetimepicker();
    }
  }
</script>
