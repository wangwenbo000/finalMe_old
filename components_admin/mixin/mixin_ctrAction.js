/**
 * Created by wangwenbo on 16/2/14.
 */
import moment from 'moment'
export default{
  /*
   路由判断文章编辑还是新添加
   */
  route: {
    activate(transition){
      const id = transition.to.params.newsId;
      const timeFormatStr = 'YYYY/MM/DD h:mm:ss';
      if (id == 'Write') {
        this.$set("actionName", "撰写新文章");
        this.$set("pushBtnStr", "发表文章");
        this.$set("input.category", "javascript");
        this.$set("input.lastdate",moment().format(timeFormatStr));
        this.$set("input.date", moment().format(timeFormatStr));
        transition.next();
      } else if (!isNaN(parseInt(id))) {
        this.$http.post(this.getAPI, {id: id}).then(response=> {
          var response = response.data.data[0];
          this.$set("actionName", "更新文章ID:" + response.id);
          this.$set("pushBtnStr", "更新文章");
          this.$set("input", response);
          this.$set("input.lastdate",moment(response.lastdate).format(timeFormatStr));
          this.$set("input.date", moment(response.pushdate).format(timeFormatStr));
        });
        transition.next();
      } else {
        alert("非法转入,操作被中断");
        transition.abort();
      }
    }
  }
}