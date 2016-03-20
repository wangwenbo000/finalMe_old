<template>
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th class="check">
        <input type="checkbox" class="chk" id="checkbox" v-model="chkall" @click="checkAll">
        <label for="checkbox"></label>
      </th>
      <th>#</th>
      <th>状态</th>
      <th>标题</th>
      <th>分类目录</th>
      <th>发布时间</th>
      <th>评论</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(index,l) in data"
        :class="{'table-danger':chked[l.id]}"
        class="alist">
      <th>
        <input type="checkbox" class="chk" id="{{l.id}}" v-model="chked[l.id]">
        <label for="{{l.id}}"></label>
      </th>
      <th scope="row">{{l.id}}</th>
      <td>
        <span :class="[l.show == 0 && 'text-muted']" style="font-size: 16px;">{{{l.show | isShowIndex}}}</span>
      </td>
      <td>
        <strong>
          <a v-link="{name:'ctr',params:{newsId:l.id}}">{{l.title}}</a>
        </strong><br>
        <small class="text-muted"><i class="fa fa-caret-right"></i>&nbsp;{{l.routename}}</small>
      </td>

      <td>{{l.category}}</td>
      <td>{{l.date | dateTime}}</td>
      <td>{{l.comment}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import moment from 'moment'
  export default{
    props: ['data', 'chkall', 'chked', 'chkarr','tab'],
    ready(){
      var self = this;
      this.$watch('chked', function () {
        var checked = this
              .data
              .map(x=>x.id)
              .reduce(function (result, id) {
                return result && Boolean(self.chked[id]);
              }, true);
        this.chkall = checked;
        this.chkarr=[];
        for (var i in this.chked) {
          this.chked[i] && this.chkarr.push(i);
        }
      }, {deep: true});
    },
    filters: {
      isShowIndex(value){
        switch (value) {
          case 0:
            return '<i class="fa fa-eye-slash"></i>';
            break;
          case 1:
            return '<i class="fa fa-arrow-up"></i>';
            break;
          case 3:
            return '<i class="fa fa-file-o"></i>';
            break;
          case 4:
            return '<i class="fa fa-folder-open-o"></i>';
            break;
          default:
            return '<i class="fa fa-eye"></i>';
        }
      },
      dateTime(value){
        return moment(value).format('YYYY/MM/DD h:mm:ss');
      }
    },
    methods: {
      checkAll(e){
        var checked = e.target.checked;
        var ids = this.data.map(x=>x.id);

        ids.forEach(id=> {
          this.$set('chked[' + id + ']', checked);
        });

      }
    }
  }
</script>