'use strict';
import moment from 'moment';
import rp from 'request-promise';
export default class extends think.controller.base {
  /**
   * some base method in here
   */
  __before(http){
    let bi=think.config('blog_info');
    this.assign({
      title: bi.blog_name,
      page: {
        blogname: bi.blog_name,
        subtitle: bi.sub_title,
        icp: bi.icp_num,
        tv: think.version,
        author:bi.website_author_name,
        description:bi.description,
        keywords:bi.keywords
      }
    });
    console.log(this.http.controller);
  }

  __call(){
    return false;
  }

  gatherPost(list){
    let dateMap={};

    list.forEach(post =>{
      let key=moment(post.date).format('YYYY-MM');
      if(!dateMap[key]){
        dateMap[key]={
          date: moment(post.date).startOf('month'),
          list: []
        }
      }

      dateMap[key].list.push(post);
    });
    return Object.keys(dateMap).map(key => dateMap[key]);
  }

  gatherCategories(categories){
    let dateMap={};

    categories.forEach(cg =>{
      let key=cg.category;
      if(!dateMap[key]){
        dateMap[key]={
          cate: cg.category,
          list: [],
          count: ''
        }
      }

      dateMap[key].list.push(cg);
      dateMap[key].count=dateMap[key].list.length;
    });

    return Object.keys(dateMap).map(key => dateMap[key]);
  }
}