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
      let id = transition.to.params.newsId;
      let nowDate = moment().format('YYYY/MM/DD h:mm:ss');
      let timeFormatStr = 'YYYY/MM/DD h:mm:ss';
      if (id == 'Write') {
        this.$set("pushBtnStr", "发表文章");
        this.$set("input.category", "javascript");
        this.$set("input.lastdate", nowDate);
        this.$set("input.date", nowDate);
        transition.next();
      } else if (!isNaN(parseInt(id))) {
        this.$http.post(this.getAPI, {id: id}).then(response=> {
          var response = response.data.data[0];
          let tagsArr = response.tags == null ? [] : response.tags.split("|");
          this.$set("pushBtnStr", "更新文章");
          this.$set("input", response);
          this.$set("tag.tagArr", tagsArr);
          this.$set("input.lastdate", moment(response.lastdate).format(timeFormatStr));
          this.$set("input.date", moment(response.date).format(timeFormatStr));
        });
        transition.next();
      } else {
        alert("非法转入,操作被中断");
        transition.abort();
      }
    }
  }
}