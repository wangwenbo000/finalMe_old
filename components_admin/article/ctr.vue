<template>
  <div class="card">
    <div class="card-header">
      <strong>{{$route.title}}</strong>
    </div>
    <div class="card-block">
      <Route :routename.sync="input.routename"
             :title.sync="input.title">
      </Route>
      <fieldset class="form-group text-muted">
        <Tags :tags.sync="tag"
              :mktagsstr.sync="input.tags"></Tags>
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
  import route from '../mixin/mixin_ctrAction';
  import loading from '../mixin/mixin_loading';

  export default{
    data(){
      return {
        input: {
          content: '',
          show:'',
          category:'',
          lastdate: '',
          date: '',
          title: '',
          routename: '',
          tags: ''
        },
        tag: {
          nowInput: '',
          tagArr: []
        },
        getAPI: '/admin/article/getlist',
        saveAPI: '/admin/article/add'
      }
    },
    mixins: [route,loading],
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
        height: 660,
        path: '/static/lib/editor/lib/',
        markdown: content,
        codeFold: true,
        saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
        searchReplace: true,
        htmlDecode: "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
        emoji: true,
        taskList: true,
        tocm: true,         // Using [TOCM]
        flowChart: true,             // 开启流程图支持，默认关闭
        sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "/admin/article/upload",
        onload: function () {
          this.setMarkdown(content);
        }
      });
    },
    methods: {
      pushData(){
        this.$set('sl',true);
        this.input.content = this.testEditor.getMarkdown();
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/Artical";
        });
      }
    }
  }
</script>