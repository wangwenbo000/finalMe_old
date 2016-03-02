<template>
  <div class="card">
    <div class="card-header">
      <strong>{{actionName}}</strong>
    </div>
    <div class="card-block">
      <fieldset class="form-group">
        <input type="text"
               name="title"
               class="form-control"
               placeholder="请输入文章大标题"
               v-model="input.title"
               @input="routeTrans"
               autocomplete="off"
               autofocus
        >
      </fieldset>
      <fieldset class="form-group text-muted">
        <span class="text-info"><i class="fa fa-anchor"></i>&nbsp;文章链接:</span>
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
      </fieldset>
      <fieldset class="form-group text-muted">
        <span class="text-info"><i class="fa fa-tags"></i>&nbsp;Tag:</span>
        <span class="label label-default taglabel"
              v-for="tag in tag.tagArr">
          {{tag}}
          <a href="javascript:;"
             @click="delTag(tag)">
            <i class="fa fa-times"></i>
          </a>
        </span>
        <input type="text"
               name="tagInput"
               placeholder="输入文章关键词"
               v-model="tag.nowInput"
               @keyup.enter="tagInput">
      </fieldset>
      <div class="row">
        <div class="col-sm-10">
          <script id="editor" name="content" type="text/plain"></script>
        </div>
        <div class="col-sm-2">
          <Publish :lastdate.sync="input.lastdate" :pushdate.sync="input.date" :show.sync="input.show"></Publish>
          <Category :categorycheck.sync="input.category"></Category>
          <button type="submit"
                  @click.stop.prevent="pushData"
                  class="btn btn-success btn-lg form-control"><i class="fa fa-bicycle"></i> {{pushBtnStr}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Publish from './publish.vue'
  import Category from './category.vue'
  import moment from 'moment'
  import Md5 from 'md5'
  import route from '../mixin/mixin_ctrAction';

  export default{
    data(){
      return {
        input: {
          content: ''
        },
        tag: {
          nowInput: '',
          tagArr: []
        },
        actionName: '',
        //配置百度编辑器
        ueditorDom: 'editor',
        getAPI: '/admin/article/get',
        saveAPI: '/admin/article/add',
        //配置百度翻译
        routeTransAPI: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        appid: '20160218000012560',
        key: 'NblJ36jLqoL8mKEsevzh',
      }
    },
    mixins: [route],
    components: {
      Publish,
      Category,
    },
    ready(){
      //初始化编辑器
      const _this = this;
      this.ue = UE.getEditor(this.ueditorDom);
      this.ue.ready(function () {
        _this.ue.setContent(_this.input.content);
      });
    },
    destroyed(){
      //页面跳转后销毁编辑器
      this.ue.destroy();
    },
    computed: {
      routeInputlength(){
        return this.input.routename.length;
      }
    },
    methods: {
      pushData(){
        this.input.content = this.ue.getContent(this.input.content);
        this.input.tags = this.tagArrCreate();
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/Artical";
        });
      },
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
      },
      tagArrCreate(){
        return this.tag.tagArr.join("|");
      },
      tagInput(){
        if (this.tag.nowInput.replace(/\s/g, "") !== "") {
          this.tag.tagArr.push(this.tag.nowInput);
          this.$set("tag.nowInput", "");
        } else {
          return false;
        }
      },
      delTag(tag){
        this.tag.tagArr.$remove(tag);
      }
    }
  }
</script>

<style lang="sass">
  input[name="route"], input[name="tagInput"] {
    border: none;
    background-color: #FDFFC7;
    outline: none;
    text-indent: 2px;
    padding: 0 5px;
    font-weight: 200;
  }
  .taglabel {
    margin-right: 2px;
  }
</style>