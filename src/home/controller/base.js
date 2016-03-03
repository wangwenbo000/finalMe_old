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

  async getdqscomments() {
    var options = {
      uri: 'https://disqus.com/api/3.0/threads/list.json',
      qs: {
        api_key: 'k4mvPuVl0utIS0VO8vdf4MDZjl5S4x51SsdddK0udufL1M4Sl7iTWH4LkJERSZM4',
        forum: 'wangwenbo'
      },
      json: true
    };
    //var request = await rp(options);
    rp(options)
      .then(function (repos) {
        //console.log('User has %d repos', repos.length);
        console.log(repos);
      })
      .catch(function (err) {
        console.log(err);
      });


  }
}