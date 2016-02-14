'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}




  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();};_class.prototype.

  getindexdataAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:model = this.model('news');_context.next = 3;return model.page(1, 5).order('id DESC').countSelect();case 3:data = _context.sent;
              this.success(data);case 5:case 'end':return _context.stop();}}}, _callee, this);}));return function getindexdataAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getsituationdatabyidAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:model = this.model('news');_context2.next = 3;return model.where({ id: this.post().id }).select();case 3:data = _context2.sent;
              this.success(data[0]);case 5:case 'end':return _context2.stop();}}}, _callee2, this);}));return function getsituationdatabyidAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getvideodataAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:model = this.model('video');_context3.next = 3;return model.order('id DESC').select();case 3:data = _context3.sent;
              this.success(data);case 5:case 'end':return _context3.stop();}}}, _callee3, this);}));return function getvideodataAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getdesigndataAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:model = this.model('graphic');_context4.next = 3;return model.order('id DESC').countSelect();case 3:data = _context4.sent;
              this.success(data);case 5:case 'end':return _context4.stop();}}}, _callee4, this);}));return function getdesigndataAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getvideodatabyidAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:model = this.model('video');_context5.next = 3;return model.where({ id: this.post().id }).select();case 3:data = _context5.sent;
              this.success(data[0]);case 5:case 'end':return _context5.stop();}}}, _callee5, this);}));return function getvideodatabyidAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getdesigninfobyidAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:model = this.model('graphic');_context6.next = 3;return model.where({ id: this.post().id }).select();case 3:data = _context6.sent;
              this.success(data);case 5:case 'end':return _context6.stop();}}}, _callee6, this);}));return function getdesigninfobyidAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getjobdataAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:model = this.model('job');_context7.next = 3;return model.order('id DESC').countSelect();case 3:data = _context7.sent;
              this.success(data);case 5:case 'end':return _context7.stop();}}}, _callee7, this);}));return function getjobdataAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getteamdataAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:model = this.model('team');_context8.next = 3;return model.order('id DESC').select();case 3:data = _context8.sent;
              this.success(data);case 5:case 'end':return _context8.stop();}}}, _callee8, this);}));return function getteamdataAction() {return ref.apply(this, arguments);};}();_class.prototype.

  getmemberinfobyidAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {var 
      model, 
      data;return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:model = this.model('team');_context9.next = 3;return model.where({ id: this.post().id }).select();case 3:data = _context9.sent;
              this.success(data);case 5:case 'end':return _context9.stop();}}}, _callee9, this);}));return function getmemberinfobyidAction() {return ref.apply(this, arguments);};}();_class.prototype.

  savenewjoberinfoAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10() {var 
      model, 
      insertId;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:model = this.model('applicant');_context10.next = 3;return model.ctr(this.post());case 3:insertId = _context10.sent;
              this.success(insertId);case 5:case 'end':return _context10.stop();}}}, _callee10, this);}));return function savenewjoberinfoAction() {return ref.apply(this, arguments);};}();return _class;}(_base2.default);exports.default = _class;