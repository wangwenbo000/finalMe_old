'use strict';

/**
 * hook config
 * https://thinkjs.org/doc/middleware.html#toc-df6
 */
export default {
  //view_filter : ['append', 'debug_toolbar'],
  //request_begin: ["prepend", "force_proxy","userAgent"]
  request_begin: ["append", "userAgent"]
}