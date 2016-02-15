/**
 * Created by wangwenbo on 16/2/14.
 */
export default{
  data(){
    return {
      getInfoAPI: '/admin/globaldata/index',
      globaldata: {
        nickname: '',
        username: ''
      }
    }
  },
  ready(){
    this.$http.post(this.getInfoAPI).then(response=> {
      this.$set("globaldata", response.data.data);
    });
  }
}