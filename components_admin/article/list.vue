<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th class="check">
        <input type="checkbox" class="chk" id="checkbox">
        <label for="checkbox"></label>
      </th>
      <th>#</th>
      <th>状态</th>
      <th>标题 <span class="label label-primary">所有文章</span></th>
      <th>分类目录</th>
      <th>发布时间</th>
      <th>评论</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="l in data">
      <th>
        <input type="checkbox" class="chk" id="{{l.id}}" v-model="chkname" value="{{l.id}}">
        <label for="{{l.id}}"></label>
      </th>
      <th scope="row">{{l.id}}</th>
      <td>
        <span :class="[l.show == 0 && 'text-muted']" style="font-size: 16px;">{{{l.show | isShowIndex}}}</span>
      </td>
      <td>
        <strong>
          <a v-link="{name:'ctr',params:{newsId:l.id}}">{{l.title}}</a>
        </strong><br>
        <small><i class="fa fa-caret-right"></i>&nbsp;{{l.routename}}</small>
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
  props:['data','chkname'],
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