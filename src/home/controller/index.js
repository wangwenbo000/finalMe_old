'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  async indexAction(http) {
    this.articlelist();
  }

  async articlelist() {
    var data = await this.modelInstance.order('id DESC').page(0, 20).countSelect();
    this.assign({
      "title":"wangwenbo的小记录",
      blogname:think.config('blog_name',undefined,'admin'),
      articleList: data
    });
    return this.display();
  }
}