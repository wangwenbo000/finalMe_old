'use strict';

import Base from './base.js';
import rp from 'request-promise';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  init(http) {
    super.init(http);
    //this.getdqscomments();
    this.modelInstance = this.model('article');
  }

  async indexAction(http) {
    var pn = this.get('pn');
    var listrows = think.config('nums_per_page',undefined,'admin');
    var pnfliter = await this.modelInstance.where({"show":{"!=":0}}).page(1, listrows).countSelect();
    var totalpages = pnfliter.totalPages;

    if(!pn){
      pn = 1;
    } else if(pn > totalpages){
      pn = totalpages;
    }

    this.articlelist(pn,listrows);
  }

  async articlelist(pn,listrows) {
    var data = await this.modelInstance.cache(1800).where({"show":{"!=":0}}).page(pn, listrows).order({'show':'ASC','id':'DESC'}).countSelect();

    if(think.isEmpty(await this.session('dqsComments'))){
      var routename = await this.modelInstance.cache(1800).where({"show":{"!=":0}}).page(pn, listrows).order({'show':'ASC','id':'DESC'}).field('routename').select();
      var linkVar = 'link:'+encodeURIComponent(this.objtoarr(routename).join('&'));
      var options = {
        uri: 'https://disqus.com/api/3.0/threads/list.json',
        qs: {
          api_key: 'nXHXoex8H7nLQodiafaYwmTBR8KRZjwAjCpPqGqTMyUsGWe0CLcxL6tXOXcgPfyF',
          forum: 'wwblocal',
          thread:linkVar
        },
        json: true
      };

      var response = await rp(options);
      let commentsCount = {};
      for(var cc in response.response){
        commentsCount[parseInt(response.response[cc].identifiers[0])]= response.response[cc].posts;
      }
      await this.session('dqsComments',commentsCount,1800);
    }


    this.assign({
      blogname:think.config('blog_name',undefined,'admin'),
      articleList: data,
      commentsList: await this.session('dqsComments')
    });
    return this.display();
  }

  objtoarr(listdata){
    var routeArr = [];
    listdata.forEach(function(r){
      routeArr.push("http://10.0.1.8/article/"+r.routename+".html");
    });
    return routeArr;
  }
}