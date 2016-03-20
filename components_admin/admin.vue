<template>
  <div>
    <Topnav :admin-Info="globaldata.adminInfo"></Topnav>
    <div class="container">
      <div class="row">
        <div class="col-xs-1 tools-space">
          <Slider></Slider>
        </div>
        <div class="col-xs-11 admin-panel">
          <router-view transition="fade" transition-mode="out-in"
                       :statistics="globaldata.statistics"
          ></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Topnav from './nav/nav.vue'
  import Slider from './slider/slider.vue'
  import GlobalData from './mixin/mixin_globalData';
  export default{
    mixins:[GlobalData],
    components: {
      Topnav,
      Slider
    }
  }
</script>

<style lang="sass">
  @import "style.scss";
</style>