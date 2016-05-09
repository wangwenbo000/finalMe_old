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
  export default{
    props: ['routename', 'title'],
    computed: {
      routeInputlength(){
        return this.routename.length;
      }
    },
    methods: {
      routeTrans(){
        this.$http.post("/admin/article/trans", {t:this.title}).then(response=> {
          var getTransData = response.data.data;
          if(typeof getTransData === "object"){
            let trans_Res=getTransData[0].dst.replace(/\s/g, "-");
            trans_Res=trans_Res.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g, "");
            this.$set("routename", trans_Res);
          }
        });
      }
    }
  }
</script>