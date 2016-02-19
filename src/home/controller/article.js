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

  }

  async itemAction(http) {
    let routename = this.get('routename');
    var list = await this.modelInstance.where({"routename": routename}).select();
    console.log(list);
    this.assign({
      "title": list[0].title,
      "articlelist": list[0],
      "suggestList": this.suggestlist(list[0].category, list[0].id)
    });
    return this.display();
  }

  async suggestlist(category, id) {
    var suggest = await this.modelInstance.where({
      "category": category,
      "id": {"!=": id}
    }).page(0, 5).countSelect();
    return suggest.data;
  }
}