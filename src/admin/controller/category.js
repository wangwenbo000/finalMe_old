/**
 * Created by wangwenbo on 16/2/14.
 */
/**
 * Created by wangwenbo on 16/2/14.
 */
'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    let category = await this.model('category').select();
    return this.success(category);
  }

  async postAction() {
    let data = this.post();
    if (data.id) {
      let add = await this.model('category').where({id: data.id}).update(data);
      return this.success({type:'update'}, "成功更新分类");
    } else {
      let add = await this.model('category').thenAdd(data, {name: data.name});
      if (add.type == 'add') {
        return this.success(add, "成功添加新分类");
      } else {
        return this.fail(1, "已经有重复分类");
      }
    }

  }

  async delAction() {
    let id = this.post('id');
    let del = await this.model('category').where({id: id}).delete();
    return this.success();
  }
}