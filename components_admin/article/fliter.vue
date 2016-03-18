<template>
  <div class="row">
    <div class="col-sm-6">
      <a v-link="{name:'ctr',params:{newsId:'Write'}}" class="btn btn-success">
        <i class="fa fa-pencil"></i> 撰写
      </a>
      <a v-link="{name:'ctr',params:{newsId:'Write'}}" class="btn btn-secondary btn-danger-outline">
        <span><i class="fa fa-trash-o"></i> 删除</span>
      </a>
      <a v-link="{name:'ctr',params:{newsId:'upload'}}" class="btn btn-secondary">
        <i class="fa fa-file-text-o"></i> 草稿箱
      </a>
      &nbsp;
      <div class="btn-group">
        <button type="button"
                @mouseup="tab='all'"
                :class="['btn', tab === 'all' ? active : normal]"
                @click="fliterData()"><i class="fa fa-th"></i></button>
        <button type="button"
                @mouseup="tab='2'"
                :class="['btn', tab === '2' ? active : normal]"
                @click="fliterData({show:2})"><i class="fa fa-eye"></i></button>
        <button type="button"
                @mouseup="tab='0'"
                :class="['btn', tab === '0' ? active : normal]"
                @click="fliterData({show:0})"><i class="fa fa-eye-slash"></i></button>
        <button type="button"
                @mouseup="tab='1'"
                :class="['btn', tab === '1' ? active : normal]"
                @click="fliterData({show:1})"><i class="fa fa-arrow-up"></i></button>
        <button type="button"
                @mouseup="tab='3'"
                :class="['btn', tab === '3' ? active : normal]"
                @click="fliterData({show:3})"><i class="fa fa-file-o"></i></button>
      </div>
    </div>
    <div class="col-sm-2">
      <select class="c-select form-control"
              v-model="selected"
              @change="fliterData({category:selected})">
        <option selected="selected" value="*">所有分类</option>
        <option v-for="s in select"
                :value="s.name">{{s.name}}</option>
      </select>
    </div>
    <div class="col-sm-4">
      <div class="form-group">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="文章标题关键字" v-model="searchText">
          <a class="btn btn-primary btn-sm text-right input-group-addon"
             @click="searchCondition()"><i class="fa fa-filter"></i> 筛选</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default{
  props:['data','API','condition'],
  data(){
    return{
      getcateAPI: '/admin/article/category',
      searchText:'',
      selected:'',
      select:[],
      tab:'all',
      active:'btn-success',
      normal:'btn-secondary-outline'
    }
  },
  ready(){
    this.$http.post(this.getcateAPI).then(response=> {
      this.$set('select',response.data.data);
    });
  },
  methods:{
    searchCondition(){
      let arr=this.searchText.split(',');
      for(var i in arr){
        arr[i] = '%'+arr[i]+'%';
      }
      this.fliterData({title: ["like", arr]});
    },
    fliterData(condition){
      this.condition = condition;
      this.$http.post(this.API, {condition:JSON.stringify(condition)}).then(response=> {
        this.$set('data',response.data.data);
        this.$dispatch('bootpag');
//        this.$dispatch('checkbox');
      });
    }
  }
}
</script>