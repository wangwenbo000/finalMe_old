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

  //查询&筛选
  async getAction() {
    let pdata = this.post();
    let pageIndex = this.post('page') || 1;
    let condition = think.isEmpty(this.post('condition')) ? JSON.parse(this.post('condition')) : '*';
    console.log(condition);
    let shownum = think.config('admin_nums_per_page');
    if (think.isEmpty(pdata.id)) {
      let data = await this.modelInstance
        .page(pageIndex, shownum)
        .where(condition)
        .order({'show': 'ASC', 'id': 'DESC'})
        .countSelect();
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