/**
 * Created by wangwenbo on 16/2/14.
 */
'use strict';

import Base from './base.js';
import moment from 'moment';
import mr from 'moment-range'

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    let artical_model = this.model('article');
    let category_model = this.model('category');
    let config_model = this.model('config');

    let adminLoginInfo = await this.session('adminInfo');
    let artical_count = await artical_model.count();
    let show2 = await artical_model.where({show: 2}).count();
    let show0 = await artical_model.where({show: 0}).count();
    let show1 = await artical_model.where({show: 1}).count();
    let show3 = await artical_model.where({show: 3}).count();
    let show4 = await artical_model.where({show: 4}).count();
    let category_count = await category_model.count();
    let comment_count = await artical_model.sum('comment');
    let config = await config_model.select();

    let globalDataJson = {
      adminInfo: adminLoginInfo,
      statistics: {
        articalCount: artical_count,
        articalCountInfo: {
          show: show2,
          hide: show0,
          top: show1,
          page: show3,
          draft: show4
        },
        categoryCount: category_count,
        commentCount: comment_count,
        serverLastDay: this.serverLastDay(),
        startTime: think.startTime,
        env: think.env,
        version: think.version
      },
      config: config[0]
    };
    return this.success(globalDataJson);
  }

  serverLastDay() {
    var start = moment();
    var end = new Date(2017, 3, 8);
    return moment.range(start, end).diff('days');
  }

  async echartAction() {
    let data = await this.model('article').field('date,comment').select();
    var bigdata = [];
    var onedata = [];
    data.forEach(x=> {
      onedata.push([moment(x.date).get('month'), moment(x.date).get('date'), x.comment || 1]);
    });
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < new Date(2016, i, 0).getDate(); j++) {
        onedata.push([i, j, 0]);
      }
    }
    this.success(onedata);
  }

  async setconfigAction() {
    let configJSON = this.post();
    let cfdata = await this.model('config').update(configJSON);
    await this.session("config",configJSON);
    return this.success();

  }
}