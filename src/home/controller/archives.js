'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * archives action
   * @return {Promise} []
   */
  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  async indexAction(http) {
    var archiveslist = await this.modelInstance.where({show: ["NOTIN",[0, 2, 4]]}).order('date DESC').select();
    this.assign('archiveList',this.gatherPost(archiveslist));
    var tags = await this.modelInstance.where({tags:["!=",'']}).field('tags').select();
    var tagArr = [];
    var tagsRes = [];
    var dataMap = [];
    for(var t in tags){
      tagArr = tagArr.concat(tags[t].tags.split("|"));
    }
    for(var t in tagArr){
      var tagJson = {};
      if(tagsRes.indexOf(tagArr[t])==-1){
        tagJson = {
          name:tagArr[t],
          count:1
        };
        tagsRes.push(tagArr[t]);
        dataMap.push(tagJson);
      }else{
        for(var ta in dataMap){
          if(dataMap[ta].name == tagArr[t]){
            dataMap[ta].count++;
          }
        }
      }
    }
    this.assign({
      tagsList:dataMap,
      tagsLength:dataMap.length
    });
    this.display();
  }
}