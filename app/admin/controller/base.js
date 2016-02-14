'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var http = require("http");var _class = function (_think$controller$bas) {(0, _inherits3.default)(_class, _think$controller$bas);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));}


  /**
   * some base method in here
   */_class.prototype.
  __before = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      adminInfo, 
      whereFrom;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this.session('adminInfo');case 2:adminInfo = _context.sent;whereFrom = this.http.controller;if (!(
              whereFrom === 'login')) {_context.next = 6;break;}return _context.abrupt('return');case 6:if (!



              think.isEmpty(adminInfo)) {_context.next = 8;break;}return _context.abrupt('return', 
              this.redirect("/admin/login"));case 8:case 'end':return _context.stop();}}}, _callee, this);}));return function __before() {return ref.apply(this, arguments);};}();return _class;}(think.controller.base);exports.default = _class;