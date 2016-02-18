'use strict';

import Base from './base.js';
import moment from 'moment';
var fs = require('fs');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  M() {
    return this.model('article');
  }

  //查询
  async getAction() {
    let id = this.post().id;
    let pageIndex = this.post().page || 1;
    if (think.isEmpty(id)) {
      let data = await this.M().page(pageIndex, 20).order('id DESC').countSelect();
      this.success(data);
    } else {
      let data = await this.M().where({id: id}).select();
      this.success(data);
    }
  }

  //增加&更新
  async addAction() {
    let id = this.post().id;
    if (think.isEmpty(id)) {
      let insertId = await this.M().add(this.post());
      this.success(insertId);
    } else {
      let data = await this.M().where({id: id}).update(this.post());
      this.success(data);
    }
  }

  //删除
  async delAction() {
    let delNews = await this.M().where({id: this.post().id}).delete();
  }

}