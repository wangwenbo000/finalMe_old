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
               v-model="input.title">
      </fieldset>
      <div class="row">
        <div class="col-sm-10">
          <script id="editor" name="content" type="text/plain"></script>
        </div>
        <div class="col-sm-2">
          <Publish></Publish>
          <Category></Category>
          <button type="submit"
                  @click.stop.prevent="pushData"
                  class="btn btn-warning btn-lg form-control"> 发表文章
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Publish from './publish.vue'
  import Category from './category.vue'

  import route from '../mixin/mixin_ctrAction';

  export default{
    data(){
      return {
        input: {
          content: ''
        },
        actionName: '',
        ueditorDom: 'editor',
        getAPI: '/admin/artical/get',
        saveAPI: '/admin/artical/add',
      }
    },
    mixins:[route],
    components: {
      Publish,
      Category
    },
    ready(){
      //初始化编辑器
      const _this = this;
      this.ue = UE.getEditor(this.ueditorDom);
      this.ue.ready(function () {
        _this.ue.setContent(_this.input.content);
      });
      //初始化时间选择器
      $('#datetimepicker').datetimepicker();
    },
    destroyed(){
      //页面跳转后销毁编辑器
      this.ue.destroy();
    },
    methods: {
      pushData(){
        this.input.lastdate = moment();
        this.input.content = this.ue.getContent(this.input.content);
//        this.input.show == true ? this.input.show = 1 : this.input.show = 0;
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/Artical";
        });
      }
    }
  }
</script>