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
    var rssConfig = think.config('rss');
    var siteConfig = think.config('blog_info');

    if(!rssConfig.rss_on){
      return this._404Action();
    }
    let list = await this.modelInstance
        .limit(0,rssConfig.rss_show_num)
        .order('`date` DESC')
        .select();

    let updateTime = await this.modelInstance
        .order('`lastdate` DESC')
        .getField('lastdate', 1);

    this.assign('list', list);
    this.assign('updateTime', updateTime);
    this.assign('siteInfo', siteConfig);

    this.header("Content-Type", "text/xml");
    this.display('index.xml');
  }
}