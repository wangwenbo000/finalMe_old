'use strict';

import Base from './base.js';
import rp from 'request-promise';

export default class extends Base {

  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  async itemAction(http) {
    let routename = this.get('routename');
    var list = await this.modelInstance.where({"routename": routename}).select();

    var hljs = require('highlight.js');
    var md = require('markdown-it')({
      html: true,
      linkify: true,
      typography: true,
      breaks: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) {
          }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
    });
    md.use(require('markdown-it-imsize'), {autofill: true});
    md.use(require('markdown-it-emoji'));
    md.use(require('markdown-it-toc'));
    list[0].content = md.render(list[0].content);

    this.assign({
      "article": list[0],
      "suggestList": this.suggestlist(list[0].category, list[0].id),
      "p": this.pagination({">": list[0].id}, "ID ASC"),
      "n": this.pagination({"<": list[0].id}, "ID DESC")
    });
    return this.display();
  }

  async suggestlist(category, id) {
    var suggest = await this.modelInstance.where({
      "category": category,
      "id": {"!=": id},
      show: ["NOTIN",[0, 2, 4]]
    }).page(0, 5).select();
    return suggest;
  }

  async pagination(action, order) {
    let data = await this.modelInstance.where({
        id: action
      })
      .field('title,routename')
      .order(order)
      .limit(1)
      .countSelect();
    return data.count ? data.data[0] : false;
  }

  async tagAction(){
    var tag = decodeURIComponent(this.get("tag"));
    var articleListForTags = await this.modelInstance
      .where({tags:["like","%"+tag+"%"]})
      .countSelect();
    this.assign({
      "articleListForTag":articleListForTags,
      "tagName":tag
    });
    return this.display();
  }

}