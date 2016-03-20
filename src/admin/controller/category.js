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
    let category = await this.model('category').field('name').select();
    this.success(category)
  }
}