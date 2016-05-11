'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * archives action
   * @return {Promise} []
   */
  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  async indexAction(http) {
    var archiveslist = await this.modelInstance.where({show: ["NOTIN",[0, 2, 4]]}).order('date DESC').select();
    console.log(this.gatherPost(archiveslist));
    this.assign('archiveList',this.gatherPost(archiveslist));
    this.display();
  }
}