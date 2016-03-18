<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th class="check"><input type="checkbox"></th>
      <th>#</th>
      <th>状态</th>
      <th>标题</th>
      <th>分类目录</th>
      <th>发布时间</th>
      <th>评论</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="l in data">
      <th class="check"><input type="checkbox" name="delcheck[{{$index}}]"></th>
      <th scope="row">{{l.id}}</th>
      <td>
        <span :class="[l.show == 0 && 'text-muted']" style="font-size: 16px;">{{{l.show | isShowIndex}}}</span>
      </td>
      <td>
        <strong>
          <a v-link="{name:'ctr',params:{newsId:l.id}}">{{l.title}}</a>
        </strong><br>
        <small class="text-muted"><i class="fa fa-caret-right"></i>&nbsp;{{l.routename}}</small>
      </td>

      <td>{{l.category}}</td>
      <td>{{l.date | dateTime}}</td>
      <td>{{l.comment}}</td>
      <td>
        <a href="javascript:;" @click="deleteItem(l,$index)">删除</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
export default{
  props:['data'],
  ready(){
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-red',
      radioClass: 'iradio_square-red',
      increaseArea: '20%' // optional
    });
  },
  filters: {
    isShowIndex(value){
      switch (value) {
        case 0:
          return '<i class="fa fa-eye-slash"></i>';
          break;
        case 1:
          return '<i class="fa fa-arrow-up"></i>';
          break;
        default:
          return '<i class="fa fa-eye"></i>';
      }
    }
  }
}
</script>