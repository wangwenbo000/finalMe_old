/**
 * Created by wangwenbo on 16/1/9.
 */
'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  M() {
    return this.model('admin');
  }

  indexAction() {
    //auto render template file index_index.html
    return this.display();
  }

  async loginAction() {

    if (this.http.isAjax('post')) {
      let adminInfo = this.post();
      let username = adminInfo.username;
      let password = adminInfo.password;

      let isAdmin = await this.M().where({
        username: username,
        password: think.md5(password)
      }).find();

      if(think.isEmpty(isAdmin)){
        return this.error()
      }else{
        delete isAdmin.password;
        await this.session('adminInfo',isAdmin);
        return this.success();
      }
    }
  }

  async logoutAction(){
    await this.session('adminInfo','');
    return this.http.redirect('/admin/login');
  }
}