export default{
  /*
   路由判断文章编辑还是新添加
   */
  props:['sl'],
  route: {
    activate(transition){
      this.$set('sl',false);
      transition.next();
    },
    deactivate(transition){
      this.$set('sl',true);
      transition.next();
    }
  }
}
