<template>
  <table class="table table-bordered">
    <thead class="thead-default">
    <tr>
      <th><i class="fa fa-eye"></i> 正常</th>
      <th><i class="fa fa-eye-slash"></i> 隐藏</th>
      <th><i class="fa fa-arrow-up"></i> 置顶</th>
      <th><i class="fa fa-file-o"></i> 页面</th>
      <th><i class="fa fa-clock-o"></i> 发表时间</th>
      <th><i class="fa fa-calendar"></i> 最后修改时间</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
        <input type="radio" value="2" v-model="show" name="showState" checked>
      </td>
      <td>
        <input type="radio" value="0" v-model="show" name="showState">
      </td>
      <td>
        <input type="radio" value="1" v-model="show" name="showState">
      </td>
      <td>
        <input type="radio" value="3" v-model="show" name="showState">
      </td>
      <td><h5 class="text-muted">{{lastdate}}</h5></td>
      <td><h5 class="text-warning">{{pushdate}}</h5>
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
//      $('#datetimepicker').datetimepicker();
      $("[name='showState']").bootstrapSwitch({
        onColor:'success',
        onText:'开',
        offText:'关'
      });
    }
  }
</script>
