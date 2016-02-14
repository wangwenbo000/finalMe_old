<template>
  <div class="row">
    <div class="col-sm-6">
      <a v-link="{name:'ctr',params:{newsId:'Write'}}" class="btn btn-warning">
        <i class="fa fa-pencil"></i> 撰写
      </a>
      <a v-link="{name:'ctr',params:{newsId:'Write'}}" class="btn btn-secondary">
        <span class="text-danger"><i class="fa fa-trash-o"></i> 删除</span>
      </a>
      <a v-link="{name:'ctr',params:{newsId:'upload'}}" class="btn btn-secondary">
        <i class="fa fa-file-text-o"></i> 草稿箱
      </a>
      &nbsp;
      <div class="btn-group">
        <button type="button" class="btn btn-secondary active"><i class="fa fa-th"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fa fa-eye"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fa fa-eye-slash"></i></button>
        <button type="button" class="btn btn-secondary"><i class="fa fa-arrow-up"></i></button>
      </div>
    </div>
    <div class="col-sm-2">
      <select class="c-select form-control" v-model="input.catagory">
        <option selected="selected">请選擇分类</option>
        <option value="doing">正在做</option>
        <option value="Industy">行业动态</option>
        <option value="update">更新</option>
      </select>
    </div>
    <div class="col-sm-4">
      <div class="form-group">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="文章标题关键字">
          <a v-link="{name:'ctr',params:{newsId:'upload'}}" class="btn btn-primary btn-sm text-right input-group-addon"><i class="fa fa-filter"></i> 筛选</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

</script>