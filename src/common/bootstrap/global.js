/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

import moment from 'moment';
import md from 'markdown-it';

global.formatTime = function (time, str) {
  str == null ? str = "ll" : str;
  return moment(time).format(str);
};

global.cutContent = function (content) {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
    breaks: false,
    });
  md.use(require('markdown-it-emoji'));
  let contentWithoutHTMLTag = md.render(content).replace(/<[^>]+>/g, "");
  if (contentWithoutHTMLTag.length > 200) {
    return contentWithoutHTMLTag.substring(0, 200) + "[...]";
  } else {
    return contentWithoutHTMLTag;
  }
};

global.rssContent = function (content,domain,routename) {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true,
    breaks: false,
  });
  md.use(require('markdown-it-emoji'));
  md.use(require('markdown-it-imsize'), {autofill: true});
  let rssContent = md.render(content);
  return rssContent+"<a target='_blank' href="+domain+"/article/"+routename+">详细阅读</a>";
};

global.tags2arr = function (tagArr) {
  return tagArr == null ? [] : tagArr.split("|");
};