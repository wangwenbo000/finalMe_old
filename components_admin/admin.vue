<template>
  <div>
    <Topnav :admin-Info="globaldata.adminInfo"
            :admin-Title="globaldata.config.admintitle"></Topnav>
    <div class="container">
      <div class="row">
        <div class="col-xs-1 tools-space">
          <Slider></Slider>
        </div>
        <div class="col-xs-11 admin-panel">
          <router-view transition="fade" transition-mode="out-in"
                       :statistics="globaldata.statistics"
                       :config.sync="globaldata.config"
                       :admin-Info="globaldata.adminInfo"
                       :sl.sync="showLoading"
          ></router-view>
        </div>
      </div>
    </div>
    <Loading :sl.sync="showLoading" transition="fade" transition-mode="out-in"></Loading>
  </div>
</template>

<script type="text/babel">
  import Topnav from './nav/nav.vue'
  import Slider from './slider/slider.vue'
  import GlobalData from './mixin/mixin_globalData';
  import Loading from './loading/loading.vue';
  export default{
    mixins:[GlobalData],
    data(){
      return{
        showLoading:false
      }
    },
    components: {
      Topnav,
      Slider,
      Loading
    }
  }
</script>

<style lang="sass">
  @import "style.scss";
</style>