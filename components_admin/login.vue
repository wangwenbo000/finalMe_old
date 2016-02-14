<template>
  <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Admin Panel</h2>
        <div class="alert alert-danger" role="alert" v-show="isShowAlert">
          {{alertMsg}}
        </div>
        <input type="text" class="form-control" placeholder="username" autofocus v-model="login.username">
        <input type="password" class="form-control" placeholder="Password" v-model="login.password">
        <button type="submit" class="btn btn-lg btn-primary btn-block" @click="loginInfo" v-on:keyup.enter="loginInfo">Sign in</button>
      </form>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return{
        login:{},
        loginAPI:'/admin/login/login',
        isShowAlert:false,
        alertMsg:''
      }
    },
    ready(){
    },
    methods: {
      loginInfo(event){
        this.$http.post(this.loginAPI, this.login).then((response)=> {
          if(response.data.errmsg==""&&response.data.errno==0){
            window.location.href = "/admin#!"+this.$route.path;
          }else{
            this.alertInfo("账号或者密码出错请核对");
          }
        });
      },
      alertInfo(msg){
        this.isShowAlert = true;
        this.alertMsg = msg;
        var self = this;
        setTimeout(function(){
          self.$set('isShowAlert',false);
        },3000);
      }
    }
  }

</script>

<style lang="sass">
  .container {
    min-width: 10px;
    max-width: 300px;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }

  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin-heading {
    margin-bottom: 20px;
    text-align: center;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -2px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>