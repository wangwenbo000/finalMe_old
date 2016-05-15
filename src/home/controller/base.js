'use strict';
import moment from 'moment';
import rp from 'request-promise';
export default class extends think.controller.base {

  async __before(http) {
    let config_model = this.model('config');
    let article_model = this.model('article');
    let new_title = await article_model.cache(3600).where({show: ["NOTIN", [0, 2, 4]]}).field('title').order('id DESC').find();
    let configInfo = await config_model.cache(3600).select();
    configInfo = configInfo[0];
    var isSupportBrowser = await http.post();
    isSupportBrowser = !think.isEmpty(isSupportBrowser) || false;
    return this.assign({
      title: configInfo.sitetitle,
      subtitle: configInfo.subtitle,
      icp: configInfo.icpnum,
      author: configInfo.author,
      description: configInfo.description,
      keywords: configInfo.keywords,
      newArticle: new_title.title,
      domain: configInfo.domain,
      isSupportBrowser: isSupportBrowser
    });
  }

  __call() {
    return false;
  }

  gatherPost(list) {
    let dateMap = {};

    list.forEach(post => {
      let key = moment(post.date).format('YYYY-MM');
      if (!dateMap[key]) {
        dateMap[key] = {
          date: post.date,
          list: []
        }
      }

      dateMap[key].list.push(post);
    });
    return Object.keys(dateMap).map(key => dateMap[key]);
  }

  gatherCategories(categories) {
    let dateMap = {};

    categories.forEach(cg => {
      let key = cg.category;
      if (!dateMap[key]) {
        dateMap[key] = {
          cate: cg.category,
          list: [],
          count: ''
        }
      }

      dateMap[key].list.push(cg);
      dateMap[key].count = dateMap[key].list.length;
    });

    return Object.keys(dateMap).map(key => dateMap[key]);
  }
}