<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-th-list"></i> 文章列表
    </div>
    <div class="card-block">
      <Fliter :data.sync="listData"
              :API.sync="getAPI"
              :condition.sync="condition"
              v-on:bootpag="bootpag">
      </Fliter>
      <List :data.sync="listData.data"></List>
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
          <a class="btn btn-secondary" @click="getData(pagego,condition)">GO</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import init from '../mixin/mixin_initPage';
  import Fliter from './fliter.vue';
  import List from './list.vue';
  export default{
    data(){
      return {
        getAPI: '/admin/article/get',
        delAPI: '/admin/article/del',
        condition: '',
        listData: {},
        checkId: [],
      }
    },
    components: {
      Fliter,
      List
    },
    mixins: [init]
  }
</script>