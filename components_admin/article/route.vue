<template>
  <span><i class="fa fa-anchor"></i>&nbsp;文章链接:</span>
  http://wangwenbo.me/article/
  <input type="text"
         id="routename"
         name="route"
         placeholder="type&translate-title"
         v-model="input.routename"
         size="{{routeInputlength}}"
  > .html
  &nbsp;
  <a href="javascript:;" @click="routeTrans">
    <i class="fa fa-refresh"></i>
  </a>
</template>

<script type="text/babel">
  export default{
    computed: {
      routeInputlength(){
        return this.input.routename.length;
      }
    },
    methods: {
      routeTrans(){
        var salt = (new Date).getTime();
        var str1 = this.appid + this.input.title + salt + this.key;
        var sign = Md5(str1);
        let transData = {
          q: this.input.title,
          appid: this.appid,
          salt: salt,
          from: 'auto',
          to: 'en',
          sign: sign
        };
        this.$http.jsonp(this.routeTransAPI, transData).then(response=> {
          if (!response.data.error_code) {
            let trans_Res = response.data.trans_result[0].dst.replace(/\s/g, "-");
            trans_Res = trans_Res.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
            this.$set("input.routename", trans_Res);
          }
        });
      }
    }
  }
</script>