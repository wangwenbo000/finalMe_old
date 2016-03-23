'use strict';

import Base from './base.js';
import rp from 'request-promise';

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
    var pn = this.get('pn');
    var listrows = await this.model('config').cache(3600).field('i_perpage').select();
    listrows = listrows.i_perpage;
    var pnTotal = await this.modelInstance
        .where({"show": ["!=", 0, 4]})
        .count();

    var pnPosition = pn > Math.ceil(pnTotal / listrows) ? false : true;

    this.articlelist(pn, listrows, pnPosition);
  }

  async articlelist(pn, listrows, pnPosition) {
    var data = await this.modelInstance
        .where({"show": ["!=", 0, 4]})
        .page(pn, listrows)
        .order({'show': 'ASC', 'id': 'DESC'})
        .countSelect(pnPosition);

    this.assign({
      articleList: data
    });
    return this.display();
  }
}