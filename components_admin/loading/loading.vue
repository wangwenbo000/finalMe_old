<template>
  <div class="loading-bg" v-show="sl">
    <div class="loading-icon">
      <i class="fa fa-spinner round"></i>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    props:['sl']
  }
</script>

<style lang="sass">
  .loading-bg{
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.6);
    position: fixed;
    z-index: 2000;
    top:0;
  }
  .loading-icon{
    width: 60px;
    height: 60px;
    background: #00ac4d;
    position: fixed;
    color: #fff;
    left: 50%;
    top:50%;
    margin-left: -30px;
    margin-top: -30px;
    text-align: center;
    line-height: 60px;
    font-size: 2.6em;
  }
  .round{
    -webkit-animation:circle 2s infinite linear;/*匀速 循环*/
  }
  @-webkit-keyframes circle{
    0%{ transform:rotate(0deg); }
    100%{ transform:rotate(-360deg); }
  }
</style>
