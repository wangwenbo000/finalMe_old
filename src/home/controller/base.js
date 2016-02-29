'use strict';
import moment from 'moment';
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
}