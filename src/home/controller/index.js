'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    var article = this.model('article');
    var data = await article.order('id DESC').page(0,20).countSelect();
    this.assign({
      articleList:data
    });
    return this.display();
  }
}