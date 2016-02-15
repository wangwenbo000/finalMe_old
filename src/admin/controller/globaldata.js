/**
 * Created by wangwenbo on 16/2/14.
 */
'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    let artical_model = this.model('artical');
    let category_model = this.model('category');

    let adminLoginInfo = await this.session('adminInfo');
    let artical_count = await artical_model.count();
    let category_count = await category_model.count();

    let globalDataJson = {
      adminInfo:adminLoginInfo,
      statistics:{
        articalCount:artical_count,
        categoryCount:category_count,
        startTime:think.startTime,
        env:think.env,
        port:think.port,
        version:think.version,
        runtime:think.RUNTIME_PATH,
      }
    };
    return this.success(globalDataJson);
  }
}