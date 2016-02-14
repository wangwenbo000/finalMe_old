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
        <input type="radio" value="2" v-model="input.show" name="showState" checked> 显 &nbsp;
        <input type="radio" value="0" v-model="input.show" name="showState"> 隐 &nbsp;
        <input type="radio" value="1" v-model="input.show" name="showState"> 顶 &nbsp;
      </li>
      <li class="list-group-item">
        <i class="fa fa-calendar"></i> 最后修改时间<br>
      </li>
      <li class="list-group-item">
        2015/04/15 05:06
      </li>
      <li class="list-group-item">
        <i class="fa fa-clock-o"></i> 发布时间
      </li>
    </ul>
    <input type='text' class="form-control" id='datetimepicker'/>
  </div>
</template>

<script type="text/babel">

</script>
