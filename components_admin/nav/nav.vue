<template>
  <nav class="navbar navbar-dark bg-primary navbar-fixed-top">
    <a class="navbar-brand" href="/admin#!/">:: WWB's AdminPanel ::</a>
    <ul class="nav navbar-nav pull-right">
      <li class="nav-item active">
        <div class="dropdown">
          <a class="btn btn-danger-outline dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-rocket"></i>
          </a>
          <div class="dropdown-menu quickroad" aria-labelledby="dropdownMenu1">
            <a class="dropdown-item" href="#!/addSituation">
              <i class="fa fa-newspaper-o"></i>
              发布新闻
            </a>
          </div>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" v-link="{name:'ctr',params:{newsId:'Write'}}"><i class="fa fa-pencil"></i></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/index" target="_blank"><i class="fa fa-television"></i></a>
      </li>
      <li class="nav-item active">
        <span class="nav-link">{{adminInfo.nickname}}</span>
      </li>
    </ul>
  </nav>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        getInfoAPI: '/admin/index/logininfo',
        adminInfo: {
          nickname: '',
          username: ''
        }
      }
    },
    ready(){
      this.$http.post(this.getInfoAPI).then(response=> {
        this.$set("adminInfo", response.data.data);
      });
    },
    computed: {
      serverLastDay(){
        return moment([2016, 9, 30]).toNow();
      }
    }
  }
</script>

<style lang="sass?outputStyle=expanded">
  .quickroad {
    min-width: auto;
  }
</style>