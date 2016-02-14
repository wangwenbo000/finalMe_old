'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    return this.display();
  }
  async logininfoAction(){
    return this.success(await this.session('adminInfo'));
  }
}