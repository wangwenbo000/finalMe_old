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
      <fieldset class="form-group text-muted divider">
        <Route></Route>
      </fieldset>
      <fieldset class="form-group text-muted">
        <Tags></Tags>
      </fieldset>
      <fieldset class="form-group text-muted">
        <div id="test-editormd"></div>
      </fieldset>
      <Publish :lastdate.sync="input.lastdate"
               :pushdate.sync="input.date"
               :show.sync="input.show">
      </Publish>
      <Category :categorycheck.sync="input.category"></Category>
      <button type="submit"
              @click.stop.prevent="pushData"
              class="btn btn-success btn-lg form-control">
        <i class="fa fa-bicycle"></i>
        {{pushBtnStr}}
      </button>

    </div>
  </div>
</template>

<script type="text/babel">
  import Publish from './publish.vue'
  import Category from './category.vue'
  import Route from './route.vue'
  import Tags from './tags.vue'
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
        key: 'NblJ36jLqoL8mKEsevzh'
      }
    },
    mixins: [route],
    components: {
      Publish,
      Category,
      Route,
      Tags
    },
    ready(){
      var content = this.input.content;
      this.testEditor = editormd("test-editormd", {
        width: "100%",
        height: 760,
        path: '/static/lib/editor/lib/',
        markdown: '',
        codeFold: true,
        saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
        searchReplace: true,
        htmlDecode: "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
        //toolbar  : false,             //关闭工具栏
        //previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
        emoji: true,
        taskList: true,
        tocm: true,         // Using [TOCM]
        flowChart: true,             // 开启流程图支持，默认关闭
        sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "./php/upload.php",
        onload: function () {
          this.setMarkdown(content);
        }
      });

    },
    methods: {
      pushData(){
        this.input.content = this.testEditor.getMarkdown();
        this.input.tags = this.tagArrCreate();
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/Artical";
        });
      }
    }
  }
</script>

<style lang="sass">
  input[name="route"], input[name="tagInput"] {
    border: none;
    background-color: #EFEFEF;
    outline: none;
    text-indent: 2px;
    padding: 0 5px;
    font-weight: 200;
  }

  .taglabel {
    margin-right: 2px;
  }

  .divider {
    border-bottom: 1px solid #ccc;
    padding: 0 0 10px;
  }
</style>