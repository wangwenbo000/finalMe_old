<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-cog"></i> 设置
    </div>

    <div class="card-block">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a :class="['nav-link',$route.name=='base'?'active':'']"
             v-link="{name:'base'}">基本设置</a>
        </li>
        <li class="nav-item">
          <a :class="['nav-link',$route.name=='api'?'active':'']"
             v-link="{name:'api'}">API</a>
        </li>
        <li class="nav-item">
          <a :class="['nav-link',$route.name=='author'?'active':'']"
             v-link="{name:'author'}">作者</a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content setting">
        <router-view transition="fade" transition-mode="out-in"
                     :cf.sync="config" :ai.sync="adminInfo"></router-view>
        <br>
        <button type="submit" class="btn btn-success" @click="changeCF">提交修改</button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import checkbox from '../mixin/mixin_checkbox';
  import loading from '../mixin/mixin_loading';
  export default{
    props:['config','adminInfo'],
    data(){
      return{
        configAPI:'/admin/globaldata/config',
        setconfigAPI:'/admin/globaldata/setconfig',
        config:this.config
      }
    },
    mixins:[checkbox,loading],
    methods:{
      changeCF(){
        var self = this;
        this.$http.post(this.setconfigAPI,this.config).then(response=> {

        });
      }
    }
  }
</script>