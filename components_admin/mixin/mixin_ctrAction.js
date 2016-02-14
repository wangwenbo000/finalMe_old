/**
 * Created by wangwenbo on 16/2/14.
 */
export default{
  /*
   路由判断文章编辑还是新添加
   */
  route: {
    activate(transition){
      const id = transition.to.params.newsId;
      if (id == 'Write') {
        this.$set("actionName", "撰写新文章");
        transition.next();
      } else if (!isNaN(parseInt(id))) {
        this.$http.post(this.getAPI, {id: id}).then(response=> {
          var response = response.data.data[0];
          this.$set("actionName", "更新文章ID:" + response.id);
          this.$set("input", response);
        });
        transition.next();
      } else {
        alert("非法转入,操作被中断");
        transition.abort();
      }
    }
  }
}