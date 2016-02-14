import moment from 'moment';
export default{
  /*
   系统列表渲染
   删除单条记录
   翻页
   numsPerPage() 实时更新每页显示的记录数量
   showPREV() 展示上一页按钮
   showNEXT() 展示下一页按钮
   showEmptyAlert() 是否显示没有记录的消息提示[没有记录的时候会显示]

   组件中的配置参数
   data(){
   return {
   =========================================
   getAPI: '/admin/photo/get', 查询
   delAPI: '/admin/photo/del', 删除
   pageIndex: null,            当前页指针
   listData:{}                 获取的主要数据存储在这个对象中
   =========================================
   }
   }
   */

  computed: {
    showEmptyAlert(){
      return this.listData.count > 0 && this.listData.data.length > 0 ? false : true;
    }
  },
  route: {
    activate(complete){
      this.$http.post(this.getAPI, {page: 1}).then((response)=> {
        this.$set('listData', response.data.data);
        complete.next();
      })
    }
  },
  ready(){
    var self = this;
    $('#pagination').bootpag({
      total: this.listData.totalPages,
      page: this.listData.currentPage,
      maxVisible: 5,
      leaps: true,
      firstLastUse: true,
      first: '<i class="fa fa-angle-double-left"></i>',
      last: '<i class="fa fa-angle-double-right"></i>',
      wrapClass: 'pagination',
      activeClass: 'active',
      disabledClass: 'disabled',
      nextClass: 'next',
      prevClass: 'prev',
      lastClass: 'last',
      firstClass: 'first'
    }).on("page", function (event, num) {
      self.getData(num);
      $(this).bootpag({
        total: self.listData.totalPages,
        maxVisible: 5
      });
    });
  },
  filters: {
    dateTime(value){
      return moment(value).format('YYYY/MM/DD h:mm:ss');
    }
  },
  methods: {
    deleteItem(item, index){
      var isDel = window.confirm('[' + item.id + ']' + '[' + item.title + ']' + " 将要被删除!");
      if (isDel) {
        this.$http.post(this.delAPI, {id: item.id, filename: item.cover}).then(()=> {
          this.listData.data.$remove(this.listData.data[index]);
        });
      }
    },
    getData(page){
      page = parseInt(page);
      if (page > this.listData.totalPages || page <= 0) {
        alert("输入范围不符合要求");
        this.pagego = "";
        return false;
      }
      this.$http.post(this.getAPI, {page: page}).then(response=> {
        this.$set('listData', response.data.data);
      })
    }
  }
}