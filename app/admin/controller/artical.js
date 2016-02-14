'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);var _moment = require('moment');var _moment2 = _interopRequireDefault(_moment);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



var fs = require('fs');var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  M = function M() {
    return this.model('artical');};


  //查询
  _class.prototype.getAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      id, 
      pageIndex, 




      data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:id = this.post().id;pageIndex = this.post().page || 1;if (!think.isEmpty(id)) {_context.next = 9;break;}_context.next = 5;return this.M().page(pageIndex, 20).order('id DESC').countSelect();case 5:data = _context.sent;this.success(data);_context.next = 13;break;case 9:_context.next = 11;return this.M().where({ id: id }).select();case 11:data = _context.sent;
              this.success(data);case 13:case 'end':return _context.stop();}}}, _callee, this);}));return function getAction() {return ref.apply(this, arguments);};}();



  //增加&更新
  _class.prototype.addAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      id, 

      insertId, 


      _data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:id = this.post().id;if (!think.isEmpty(id)) {_context2.next = 8;break;}_context2.next = 4;return this.M().ctr(this.post());case 4:insertId = _context2.sent;this.success(insertId);_context2.next = 12;break;case 8:_context2.next = 10;return this.M().where({ id: id }).update(this.post());case 10:_data = _context2.sent;
              this.success(_data);case 12:case 'end':return _context2.stop();}}}, _callee2, this);}));return function addAction() {return ref.apply(this, arguments);};}();



  //删除
  _class.prototype.delAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var 
      delNews;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this.M().where({ id: this.post().id }).delete();case 2:delNews = _context3.sent;case 3:case 'end':return _context3.stop();}}}, _callee3, this);}));return function delAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;