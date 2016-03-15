/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *     
 * }
 */
import moment from 'moment';
import marked from 'marked';

global.formatTime = function (time, str) {
  str == null ? str = "ll" : str;
  return moment(time).format(str);
};

global.cutContent = function (content) {
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
  let contentWithoutHTMLTag = marked(content).replace(/<[^>]+>/g, "");
  if (contentWithoutHTMLTag.length > 200) {
    return contentWithoutHTMLTag.substring(0, 200) + "[...]";
  } else {
    return contentWithoutHTMLTag;
  }
};

global.tags2arr = function (tagArr) {
  return tagArr == null ? [] : tagArr.split("|");
};

//global.getBlogTplInfo = function () {
//  let bi = think.config('blog_info');
//  return {
//    blogname:bi.blog_name,
//    subtitle:bi.sub_title,
//    icp:bi.icp_num,
//    tv:think.version
//  }
//};