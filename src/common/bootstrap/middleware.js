/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */

/**
 * 
 * think.middleware('xxx', http => {
 *   
 * })
 * 
 */

'use strict';
//
//import debugToolbar from 'think-debug-toolbar';
//
//let conf = {
//  panels: ['request', 'session', 'view', 'template', 'response', 'config', 'info'],
//  depth: 4,
//  extra_attrs: '',
//  disabled: false,
//  sort: false
//};
//
//think.middleware('debug_toolbar', debugToolbar(conf));

think.middleware("userAgent", async http => {
  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
  var regStr_ie = /msie [\d.]/gi ;
  var UA= await http.userAgent();
  var isIE = reIE.test(UA);

  if(isIE){
    if(UA.match(regStr_ie)[0].split(" ")[1]<=8){
      http._post = true;
    }
  }
});