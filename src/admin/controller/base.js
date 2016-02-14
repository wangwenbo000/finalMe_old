'use strict';
var http = require("http");

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(){
    let adminInfo = await this.session('adminInfo');
    let whereFrom = this.http.controller;
    if(whereFrom === 'login'){
      
      return;
    }
    if(think.isEmpty(adminInfo)){
      return this.redirect("/admin/login");
    }
  }
}