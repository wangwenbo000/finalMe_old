<template>
  <table class="table table-bordered">
    <thead class="thead-default">
    <tr>
      <th colspan="{{category.length-1}}"><i class="fa fa-cube"></i> 分类管理</th>
      <th colspan=""><a href="javascript:;" class="btn btn-secondary btn-sm"
                        @click="openModal"><i class="fa fa-wrench"></i> 管理</a></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td v-for="c in category">
          <input type="radio" name="categorylist" value="{{c.name}}" v-model="categorycheck">&nbsp; {{c.name}}
      </td>
    </tr>
    </tbody>
  </table>
  <Catemodal :cg.sync="category"></Catemodal>
</template>

<script type="text/babel">
  import Catemodal from './cate_modal.vue'
  export default{
    props:['categorycheck'],
    data(){
      return {
        categoryAPI: '/admin/category/index',
        category:[]
      }
    },
    components: {
      Catemodal
    },
    ready(){
      this.$http.post(this.categoryAPI).then(response=> {
        this.$set("category", response.data.data);
      });
    },
    methods:{
      openModal(){
        $('#cateModal').modal()
      }
    }
  }
</script>
