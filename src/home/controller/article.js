'use strict';

import Base from './base.js';
import rp from 'request-promise';
import marked from 'marked';

export default class extends Base {

  init(http){
    super.init(http);
    this.modelInstance=this.model('article');
  }

  async itemAction(http){
    let routename=this.get('routename');
    var list=await this.modelInstance.where({"routename": routename}).select();
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    list[0].content = marked(list[0].content);
    list[0].content=list[0].content.replace(/<img.+src/gi, "<img src='/static/img/loading.gif' data-echo");

    this.assign({
      "title": list[0].title+" | "+think.config('blog_info').blog_name,
      "articlelist": list[0],
      "suggestList": this.suggestlist(list[0].category, list[0].id),
      "p": this.pagination({">": list[0].id}, "ID ASC"),
      "n": this.pagination({"<": list[0].id}, "ID DESC")
    });
    return this.display();
  }

  async suggestlist(category, id){
    var suggest=await this.modelInstance.where({
      "category": category,
      "id": {"!=": id}
    }).page(0, 5).select();
    return suggest;
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