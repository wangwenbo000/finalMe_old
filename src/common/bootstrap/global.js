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
global.formatTime = function (time) {
  return moment(time).format('ll');
};

global.cutContent = function (content) {
  let contentWithoutHTMLTag = content.replace(/<[^>]+>/g,"")
  if(contentWithoutHTMLTag.length>200){
  return contentWithoutHTMLTag.substring(0,200)+"[...]";
  }else {
    return contentWithoutHTMLTag;
  }
};
