'use strict';

import Base from './base.js';
import rp from 'request-promise';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(http){
    super.init(http);
    this.modelInstance=this.model('article');
  }

  async indexAction(http){

  }

  async itemAction(http){
    let routename=this.get('routename');
    var list=await this.modelInstance.where({"routename": routename}).select();
    list[0].content=list[0].content.replace(/<img src/gi, "<img src='/static/img/loading.gif' data-echo");

    let link='link:' + think.config('blog_info').website_domain + '/article/' + routename + '.html';
    let session_name='dqs_' + list[0].id;
    let sessionValue=await this.session(session_name);
    if(think.isEmpty(sessionValue) && parseInt(sessionValue)!=0){
      let response=await this.dqs(link);
      console.log(response.response);
      await this.session(session_name, response.response[0]['posts'], 1800);
    }

    this.assign({
      "title": list[0].title,
      "articlelist": list[0],
      "suggestList": this.suggestlist(list[0].category, list[0].id),
      "dqsComments": await this.session(session_name),
      "p": this.pagination({">": list[0].id}, "ID ASC"),
      "n": this.pagination({"<": list[0].id}, "ID DESC")
    });
    return this.display();
  }

  async suggestlist(category, id){
    var suggest=await this.modelInstance.where({
      "category": category,
      "id": {"!=": id}
    }).page(0, 5).countSelect();
    return suggest.data;
  }

  async pagination(action, order){
    let data=await this.modelInstance.where({
        id: action
      })
      .field('title,routename')
      .order(order)
      .limit(1)
      .countSelect();
    return data.count ? data.data[0] : false;
  }
}