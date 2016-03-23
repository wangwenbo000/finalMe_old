'use strict';
import moment from 'moment';
import rp from 'request-promise';
export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(http) {
    let config_model = this.model('config');
    let article_model = this.model('article');
    let new_title = await article_model.cache(3600).field('title').order('id DESC').find();
    let bi = await config_model.cache(3600).select();
    bi[0].na = new_title.title;
    let configSession = bi[0];
    return this.assign({
      title: configSession.sitetitle,
      page: {
        blogname: configSession.sitetitle,
        subtitle: configSession.subtitle,
        icp: configSession.icpnum,
        tv: think.version,
        author: configSession.author,
        description: configSession.description,
        keywords: configSession.keywords,
        na:configSession.na
      }
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
          date: moment(post.date).startOf('month'),
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