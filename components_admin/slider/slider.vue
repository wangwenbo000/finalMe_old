<template>
  <div class="list-group sliderBar">
    <a href="#" name="a" class="list-group-item"
       :class="[$route.name=='Index'?'active':'']">
      <i class="fa fa-tachometer"></i> 控制台
    </a>
    <a v-link="{name:'artical'}"
       class="list-group-item"
       :class="[$route.name=='artical'?'active':'']">
      <i class="fa fa-newspaper-o"></i> 文章
    </a>
    <a v-link="{name:'ctr',params:{newsId:'Write'}}"
       class="list-group-item"
       :class="[$route.name=='ctr'?'active':'']">
      <i class="fa fa-pencil"></i> 撰写
    </a>
  </div>

  <div class="list-group sliderBar">
    <a v-link="{name:'setting'}"
       class="list-group-item"
       :class="[$route.name=='setting'?'active':'']">
      <i class="fa fa-cog"></i> 设置
    </a>
    <a href="/admin/login/logout"
       class="list-group-item">
      <i class="fa fa-power-off"></i> 退出
    </a>
  </div>
</template>

<script type="text/babel">
  export default{

  }
</script>
