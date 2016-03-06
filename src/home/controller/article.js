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
    var list=await this.modelInstance.cache(routename, 1800).where({"routename": routename}).select();
    list[0].content=list[0].content.replace(/<img src/gi, "<img src='/static/img/loading.gif' data-echo");
    console.log(think.isEmpty(await this.session('dqs_' + list[0].id)));
    if(think.isEmpty(await this.session('dqs_' + list[0].id))){
      var options={
        method: 'GET',
        uri: 'https://disqus.com/api/3.0/threads/list.json',
        qs: {
          api_key: 'nXHXoex8H7nLQodiafaYwmTBR8KRZjwAjCpPqGqTMyUsGWe0CLcxL6tXOXcgPfyF',
          forum: 'wwblocal',
          thread: 'link:http://10.0.1.8/article/'+routename+'.html'
        },
        json: true
      };
      var response=await rp(options);
      await this.session('dqs_' + list[0].id, response.response[0].posts, 1800);
    }

    this.assign({
      "title": list[0].title,
      "articlelist": list[0],
      "suggestList": this.suggestlist(list[0].category, list[0].id),
      "dqsComments": await this.session('dqs_' + list[0].id),
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