/**
 * Created by kurishaofeng on 16/3/14.
 * 每半小时请求一次disqus,更新评论数
 */
'use strict';

import Base from './base.js';
import rp from 'request-promise';
import crontab from 'node-crontab'

export default class extends Base {

  async dqsAction(){

    let routelist=await this.model('article').field('id').select();

    let dqsUrl='https://disqus.com/api/3.0/threads/list.json?';
    let api_key='nXHXoex8H7nLQodiafaYwmTBR8KRZjwAjCpPqGqTMyUsGWe0CLcxL6tXOXcgPfyF';
    let forum=think.config('disqus').short_name;

    let getUrl=dqsUrl + 'api_key=' + api_key + '&forum=' + forum + '&' + this.mkFliterArr(routelist);
    var options={
      method: 'GET',
      uri: getUrl,
      json: true
    };

    let response=await rp(options);

    let commentsCount={};
    for(var cc in response.response){
      commentsCount[parseInt(response.response[cc].identifiers[0])]=response.response[cc].posts;
    }

    for(var i in commentsCount){
      await this.model('article').where({id:parseInt(i)}).update({comment:parseInt(commentsCount[i.toString()])});
    }
  }

  mkFliterArr(routelist){
    let flitersArr=[];

    for(var i in routelist){
      let str='thread=ident:' + routelist[i]['id'];
      flitersArr.push(str);
    }

    return flitersArr.join('&');
  }
}