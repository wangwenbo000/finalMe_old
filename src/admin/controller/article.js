'use strict';

import Base from './base.js';
import moment from 'moment';
var fs = require('fs');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  //查询
  async getAction() {
    let id = this.post('id');
    let pageIndex = this.post().page || 1;
    if (think.isEmpty(id)) {
      let data = await this.modelInstance.page(pageIndex, 20).order('id DESC').countSelect();
      this.success(data);
    } else {
      let data = await this.modelInstance.where({id: id}).select();
      this.success(data);
    }
  }

  //增加&更新
  async addAction() {
    let id = this.post('id');
    console.log(this.post());
    if (think.isEmpty(id)) {
      let insertId = await this.modelInstance.add(this.post());
      this.success(insertId);
    } else {
      let data = await this.modelInstance.where({id: id}).update(this.post());
      this.success(data);
    }
  }

  //删除
  async delAction() {
    let delNews = await this.modelInstance.where({id: this.post().id}).delete();
  }

}