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
               autofocus
        >
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
    },
    destroyed(){
      //页面跳转后销毁编辑器
      this.ue.destroy();
    },
    methods: {
      pushData(){
        this.input.content = this.ue.getContent(this.input.content);
        this.$http.post(this.saveAPI, this.input).then(response=> {
          window.location.href = "#!/Artical";
        });
      }
    }
  }
</script>