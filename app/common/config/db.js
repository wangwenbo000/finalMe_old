'use strict';
/**
 * db config
 * @type {Object}
 */exports.__esModule = true;exports.default = 
{ 
  type: 'mysql', 
  log_sql: true, 
  log_connect: true, 
  adapter: { 
    mysql: { 
      host: '127.0.0.1', 
      port: '3307', 
      database: 'finalme', 
      user: 'root', 
      password: '15117909848', 
      prefix: 'wwb_', 
      encoding: 'utf8' }, 

    mongo: {} } };