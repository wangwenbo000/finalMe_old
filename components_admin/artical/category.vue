<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-cube"></i> 分类管理
    </div>
    <div class="card-block">
      <h6 v-for="c in category"><input type="radio" name="categorylist" value="{{c.name}}" v-model="categorycheck">&nbsp; {{c.name}}</h6>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-secondary">
        <i class="fa fa-plus"></i>
      </button>
      <button type="button" class="btn btn-secondary">
        <i class="fa fa-wrench"></i> 管理
      </button>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    props:['categorycheck'],
    data(){
      return {
        categoryAPI: '/admin/category/index'
      }
    },
    ready(){
      this.$http.post(this.categoryAPI).then(response=> {
        this.$set("category", response.data.data);
      });
    },
    methods: {

    }
  }
</script>
