'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(http){
    super.init(http);
    this.modelInstance=this.model('article');
  }

  async indexAction(http){
    this.articlelist();
  }

  async articlelist(){
    var article=this.model('article');
    var data=await article.order('id DESC').page(0, 20).countSelect();
    this.assign({
      articleList: data
    });
    return this.display();
  }
}