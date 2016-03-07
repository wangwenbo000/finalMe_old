'use strict';
import moment from 'moment';
import rp from 'request-promise';
export default class extends think.controller.base {
  /**
   * some base method in here
   */
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

  async dqs(link){
    var options = {
      method: 'GET',
      uri: 'https://disqus.com/api/3.0/threads/list.json',
      qs: {
        api_key: 'nXHXoex8H7nLQodiafaYwmTBR8KRZjwAjCpPqGqTMyUsGWe0CLcxL6tXOXcgPfyF',
        forum: think.config('disqus').short_name,
        thread:link
      },
      json: true
    };
    var response = await rp(options);
    //console.log(response);
    return response
  }
}