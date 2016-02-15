<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-bookmark-o"></i> 发布
    </div>
    <div class="alert alert-warning" role="alert">
      <strong>发布状态:</strong>
      <span class="label label-success">已发布</span>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <input type="radio" value="2" v-model="show" name="showState" checked> 显 &nbsp;
        <input type="radio" value="0" v-model="show" name="showState"> 隐 &nbsp;
        <input type="radio" value="1" v-model="show" name="showState"> 顶 &nbsp;
      </li>
      <li class="list-group-item text-muted">
        <i class="fa fa-calendar"></i> 最后修改时间<br>
      </li>
      <li class="list-group-item">
        {{lastdate | dateTime}}
      </li>
      <li class="list-group-item text-muted">
        <i class="fa fa-clock-o"></i> 发布时间
      </li>
    </ul>
    <input type='text' class="form-control " id='datetimepicker' v-model="date" value="{{date}}"/>
  </div>
</template>

<script type="text/babel">
//  import moment from 'moment'
  export default{
    props:['lastdate','date','show'],
//    filters: {
//      dateTime(value){
//        return moment(value).format('YYYY/MM/DD h:mm:ss');
//      }
//    },
  }
</script>
