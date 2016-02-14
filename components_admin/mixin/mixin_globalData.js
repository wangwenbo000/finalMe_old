/**
 * Created by wangwenbo on 16/2/14.
 */
export default{
  route: {
    activate(complete){
      this.$http.post(this.getAPI, {page: 1}).then((response)=> {
        this.$set('listData', response.data.data);
        complete.next();
      })
    }
  }
}