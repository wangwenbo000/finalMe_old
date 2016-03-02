<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-th-list"></i> 文章列表
    </div>
    <div class="card-block">
      <Fliter></Fliter>
      <div class="dropdown-divider"></div>
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>标题</th>
          <th>分类目录</th>
          <th>发布时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="l in listData.data">
          <th scope="row"><input type="checkbox"></th>
          <td><span :class="[l.show == 0 && 'text-muted']" style="font-size: 16px;">{{{l.show | isShowIndex}}}</span> &nbsp;<strong><a
                v-link="{name:'ctr',params:{newsId:l.id}}">{{l.title}}</a></strong></td>
          <td>{{l.category}}</td>
          <td>{{l.date | dateTime}}</td>
          <td>
            <a href="javascript:;" @click="deleteItem(l,$index)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="alert alert-info text-center" role="alert" v-show="showEmptyAlert">
        <strong>人生在勤!</strong> 到目前为止你还没有发布过一篇文章:/ &nbsp;&nbsp;
        <a v-link="{name:'ctr',params:{newsId:'upload'}}" class="btn btn-success btn-sm">发布第一条记录！</a>
      </div>
    </div>
    <div class="card-footer text-muted clearfix">
      <div class="pagebox pull-right">
        <div class="pagination-info">共有{{listData.count}}条，每页显示：{{listData.numsPerPage}}条</div>
        <nav id="pagination"></nav>
        <div class="pagination-go">
          <input type="text" class="form-control ipt" v-model="pagego">
          <a class="btn btn-secondary" @click="getData(pagego)">GO</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  import Fliter from './fliter.vue';
  export default{
    data(){
      return {
        getAPI: '/admin/article/get',
        delAPI: '/admin/article/del',
        listData: {},
        checkId:[]
      }
    },
    components:{
      Fliter
    },
    mixins: [init],
    filters: {
      isShowIndex(value){
        switch (value){
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