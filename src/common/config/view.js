'use strict';
/**
 * template config
 */
export default {
  type: 'nunjucks',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    nunjucks: {
      prerender: function(nunjucks, env){
        //添加一个过滤器，这样可以在模板里使用了
        env.addFilter("cut", function(content){
          //var md = require('markdown-it')({
          //  html: true,
          //  linkify: true,
          //  typography: true,
          //  breaks: false,
          //});
          //md.use(require('markdown-it-emoji'));
          //let contentWithoutHTMLTag = md.render(content).replace(/<[^>]+>/g, "");
          //if (contentWithoutHTMLTag.length > 200) {
          //  return contentWithoutHTMLTag.substring(0, 200) + "[...]";
          //} else {
          //  return contentWithoutHTMLTag;
          //}
          var md = require('markdown-it')({html:true});
          var result = md.render(content).replace(/<[^>]+>/g, "") + '[···]';
          return result;
        });
        env.addFilter("tags",function(tags){
          return tags == null ? [] : tags.split("|");
        });
      }
    }
  }
};