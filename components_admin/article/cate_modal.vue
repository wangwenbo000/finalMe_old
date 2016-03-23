<template>
  <div class="modal fade" id="cateModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <h6 class="modal-title">文章分类管理</h6>
        </div>
        <div class="modal-body">
          <table class="table table-striped table-hover">
            <tbody>
            <tr v-for="c in cg">
              <th scope="row">{{c.id}}</th>
              <td>
                <h6>{{c.name}} ·
                  <small>{{c.introduce}}</small>
                </h6>
              </td>
              <td class="text-right">
                <a href="javascript:;" @click="edit(c)">编辑</a> |
                <a href="javascript:;" class="text-danger" @click="del(c)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="dropdown-divider"></div>
          <div class="alert alert-warning" role="alert" v-show="inputcolor=='add'">
            <span class="label label-success">即将要添加的分类</span>: {{name}} ·
              <small>{{introduce}}</small>
          </div>
          <div role="alert" v-show="showinput"
               :class="['alert',inputcolor=='edit'?'alert-success':'alert-warning']">
            <fieldset class="form-group">
              <label for="name">分类名称</label>
              <input type="text" class="form-control" id="name" placeholder="分类名称" v-model="postjson.name">
            </fieldset>
            <fieldset class="form-group">
              <label for="introduce">分类介绍</label>
              <input type="text" class="form-control" id="introduce" placeholder="分类介绍" v-model="postjson.introduce">
            </fieldset>
          </div>

        </div>
        <div class="modal-footer">
          <button type="submit"
                  class="btn btn-info"
                  @click="add">
            <i class="fa fa-plus"></i>
          </button>
          <button type="submit"
                  class="btn btn-secondary"
                  @click="showinput=false,inputcolor=false">
            取消
          </button>
          <button type="submit"
                  class="btn btn-success"
                  @click="post"
          >
            执行操作
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default{
    data(){
      return {
        inputcolor: '',
        showinput: false,
        postjson: {
          name: '',
          introduce: '',
        },
        delAPI: '/admin/category/del',
        postAPI: '/admin/category/post'
      }
    },
    props: ['cg'],
    methods: {
      edit(c){
        this.showinput = true;
        this.inputcolor = 'edit';
        this.$set('postjson', c);
      },
      add(){
        this.showinput = true;
        this.inputcolor = 'add';
        this.$set('postjson', {});
      },
      del(c){
        if (window.confirm('你确定要删除分类[' + c.name + ']？')) {
          this.$http.post(this.delAPI, {id: c.id}).then(response=> {
            this.cg.$remove(c);
          });
        }
      },
      post(){
        this.$http.post(this.postAPI, this.postjson).then(response=> {
          //重复
          response.data.errno && alert(response.data.errmsg);
          //更新
          if(response.data.data.type=='update'){
            this.showinput = false;
            alert(response.data.errmsg)
          }
          //增加
          if (response.data.data.type == 'add') {
            this.showinput = false;
            this.inputcolor = '';
            this.postjson.id = response.data.data.id;
            this.cg.push(this.postjson);
            alert(response.data.errmsg);
          }
        });
      }
    }
  }
</script>
