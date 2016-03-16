<template>
  <fieldset class="form-group">
    <input type="text"
           name="title"
           class="form-control"
           placeholder="请输入文章大标题"
           v-model="title"
           @input="routeTrans"
           autocomplete="off"
           autofocus
    >
  </fieldset>
  <fieldset class="form-group text-muted divider">
    <span><i class="fa fa-anchor"></i>&nbsp;文章链接:</span>
    http://wangwenbo.me/article/
    <input type="text"
           id="routename"
           name="route"
           placeholder="type&translate-title"
           v-model="routename"
           size="{{routeInputlength}}"
    > .html
    &nbsp;
    <a href="javascript:;" @click="routeTrans">
      <i class="fa fa-refresh"></i>
    </a>
  </fieldset>
</template>

<script type="text/babel">
  import Md5 from 'md5'
  export default{
    props: ['routename', 'title'],
    data(){
      return {
        //配置百度翻译
        routeTransAPI: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        appid: '20160218000012560',
        key: 'NblJ36jLqoL8mKEsevzh'
      }
    },
    computed: {
      routeInputlength(){
        return this.routename.length;
      }
    },
    methods: {
      routeTrans(){
        var salt=(new Date).getTime();
        var str1=this.appid + this.title + salt + this.key;
        var sign=Md5(str1);
        let transData={
          q: this.title,
          appid: this.appid,
          salt: salt,
          from: 'auto',
          to: 'en',
          sign: sign
        };
        this.$http.jsonp(this.routeTransAPI, transData).then(response=>{
          if(!response.data.error_code){
            let trans_Res=response.data.trans_result[0].dst.replace(/\s/g, "-");
            trans_Res=trans_Res.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
            this.$set("routename", trans_Res);
          }
        });
      }
    }
  }
</script>