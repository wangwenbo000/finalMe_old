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
global.formatTime = function (time, str) {
  str == null ? str = "ll" : str;
  return moment(time).format(str);
};

global.cutContent = function (content) {
  let contentWithoutHTMLTag = content.replace(/<[^>]+>/g, "")
  if (contentWithoutHTMLTag.length > 200) {
    return contentWithoutHTMLTag.substring(0, 200) + "[...]";
  } else {
    return contentWithoutHTMLTag;
  }
};

global.tags2arr = function (tagArr) {
  return tagArr == null ? [] : tagArr.split("|");
};

global.getBlogTplInfo = function () {
  return {
    blogname:think.config('blog_name',undefined,'admin'),
    subtitle:think.config('sub_title',undefined,'admin'),
    icp:think.config('icp_num',undefined,'admin'),
    tv:think.config('think_vision',undefined,'admin'),
  }
};