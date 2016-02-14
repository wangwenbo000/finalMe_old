/**
 * Created by wangwenbo on 16/1/9.
 */
'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  M = function M() {
    return this.model('admin');};_class.prototype.


  indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();};_class.prototype.


  loginAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 


      adminInfo, 
      username, 
      password, 

      isAdmin;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!this.http.isAjax('post')) {_context.next = 15;break;}adminInfo = this.post();username = adminInfo.username;password = adminInfo.password;_context.next = 6;return this.M().where({ 
                username: username, 
                password: think.md5(password) }).
              find();case 6:isAdmin = _context.sent;if (!

              think.isEmpty(isAdmin)) {_context.next = 11;break;}return _context.abrupt('return', 
              this.error());case 11:

              delete isAdmin.password;_context.next = 14;return (
                this.session('adminInfo', isAdmin));case 14:return _context.abrupt('return', 
              this.success());case 15:case 'end':return _context.stop();}}}, _callee, this);}));return function loginAction() {return ref.apply(this, arguments);};}();_class.prototype.




  logoutAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                this.session('adminInfo', ''));case 2:return _context2.abrupt('return', 
              this.http.redirect('/admin/login'));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));return function logoutAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;