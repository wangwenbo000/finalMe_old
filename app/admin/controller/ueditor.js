'use strict';var _getIterator2 = require('babel-runtime/core-js/get-iterator');var _getIterator3 = _interopRequireDefault(_getIterator2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);exports.__esModule = true;var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.





  init = function init(http) {
    _Base.prototype.init.call(this, http);};

  /**
   * index action
   * @return {Promise} []
   */_class.prototype.
  indexAction = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {var 


      action, 
      result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0: //auto render template file index_index.html
              this.config = this.config("ueditor");action = this.get("action");result = undefined;_context.t0 = action;_context.next = _context.t0 === 
              'config' ? 6 : _context.t0 === 





              'uploadimage' ? 8 : _context.t0 === 

              'uploadscrawl' ? 8 : _context.t0 === 

              'uploadvideo' ? 8 : _context.t0 === 

              'uploadfile' ? 8 : _context.t0 === 






              'listimage' ? 10 : _context.t0 === 



              'listfile' ? 12 : _context.t0 === 




              'catchimage' ? 14 : 18;break;case 6:result = this.config;return _context.abrupt('break', 20);case 8:result = this.uploads(); //console.log(result);
              return _context.abrupt('break', 20);case 10:result = this.uploadlist();return _context.abrupt('break', 20);case 12:result = this.uploadlist();return _context.abrupt('break', 20);case 14:_context.next = 16;return this.crawler();case 16:result = _context.sent;return _context.abrupt('break', 20);case 18:



              result = { 
                state: '请求地址出错' };return _context.abrupt('break', 20);case 20:




              //返回结果
              this.jsonp(result);case 21:case 'end':return _context.stop();}}}, _callee, this);}));return function indexAction() {return ref.apply(this, arguments);};}();_class.prototype.



  uploads = function uploads() {
    /**
     * 得到上传文件所对应的各个参数,数组结构
     * obj={
     *     "state" : "",          //上传状态，上传成功时必须返回"SUCCESS"
     *     "url" : "",            //返回的地址
     *     "title" : "",          //新文件名
     *     "original" : "",       //原始文件名
     *     "type" : "" ,           //文件类型
     *     "size" : "",           //文件大小
     * }
     */
    var action = this.get("action");
    var base64 = "upload";
    var config = {};
    var fieldName = undefined;
    switch (action) {
      case 'uploadimage':
        config = { 
          pathFormat: this.config['imagePathFormat'], 
          maxSize: this.config['imageMaxSize'], 
          allowFiles: this.config['imageAllowFiles'] };

        fieldName = this.config['imageFieldName'];
        break;
      case 'uploadscrawl':
        config = { 
          "pathFormat": this.config['scrawlPathFormat'], 
          "maxSize": this.config['scrawlMaxSize'], 
          "allowFiles": this.config['scrawlAllowFiles'], 
          "oriName": "scrawl.png" };

        fieldName = this.config['scrawlFieldName'];
        base64 = "base64";
        break;
      case 'uploadvideo':
        config = { 
          "pathFormat": this.config['videoPathFormat'], 
          "maxSize": this.config['videoMaxSize'], 
          "allowFiles": this.config['videoAllowFiles'] };

        fieldName = this.config['videoFieldName'];
        break;
      case 'uploadfile':
      default:
        config = { 
          "pathFormat": this.config['filePathFormat'], 
          "maxSize": this.config['fileMaxSize'], 
          "allowFiles": this.config['fileAllowFiles'] };

        fieldName = this.config['fileFieldName'];
        break;}

    //return self.uploader(fieldName, config, oriName, size, path, base64);
    var up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter
    var upload = new up(fieldName, config, base64, this.http); //实例化 Adapter
    return upload.getFileInfo();};



  //抓取远程图片
  _class.prototype.crawler = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {var 

      config, 





      fieldName, 
      source, 
      list, _iterator, _isArray, _i, _ref, 
      imgUrl, 
      up, 
      upload, 
      info;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0: /* 上传配置 */config = { "pathFormat": this.config['catcherPathFormat'], "maxSize": this.config['catcherMaxSize'], "allowFiles": this.config['catcherAllowFiles'], "oriName": "remote.png" };fieldName = this.config['catcherFieldName'];source = this.post(fieldName + "[]");list = [];_iterator = source, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);case 5:if (!_isArray) {_context2.next = 11;break;}if (!(_i >= _iterator.length)) {_context2.next = 8;break;}return _context2.abrupt('break', 24);case 8:_ref = _iterator[_i++];_context2.next = 15;break;case 11:_i = _iterator.next();if (!_i.done) {_context2.next = 14;break;}return _context2.abrupt('break', 24);case 14:_ref = _i.value;case 15:imgUrl = _ref;up = think.adapter("editor", "ueditor"); //加载名为 ueditor 的 editor Adapter
              upload = new up(imgUrl, config, "remote"); //实例化 Adapter
              _context2.next = 20;return upload.saveRemote();case 20:info = _context2.sent; //console.log(info);
              list.push({ "state": "SUCCESS", "url": info.url, "size": 431521, "title": info.title, "original": info.original, "source": imgUrl });case 22:_context2.next = 5;break;case 24:return _context2.abrupt('return', 

              { 
                state: !think.isEmpty(list) ? 'SUCCESS' : 'ERROR', 
                list: list });case 25:case 'end':return _context2.stop();}}}, _callee2, this);}));return function crawler() {return ref.apply(this, arguments);};}();



  /**
   * 获取已上传的文件列表
   */_class.prototype.
  uploadlist = function uploadlist() {
    var allowFiles, listSize, path;
    //判断类型
    switch (this.get("action")) {
      //列出文件
      case 'listfile':
        allowFiles = this.config['fileManagerAllowFiles'];
        listSize = this.config['fileManagerListSize'];
        path = this.config['fileManagerListPath'];
        break;
      //列出图片
      case 'listimage':
      default:
        allowFiles = this.config['imageManagerAllowFiles'];
        listSize = this.config['imageManagerListSize'];
        path = this.config['imageManagerListPath'];}

    //allowFiles = allowFiles.join("").replace(/[.]/g,"|").substr(1);
    /* 获取参数 */
    var size = this.get('size') ? this.get('size') : listSize;
    var start = this.get('start') ? this.get('start') : 0;
    var end = parseInt(size) + parseInt(start);
    /* 获取文件列表 */
    path = path.substr(0, path.lastIndexOf("/"));
    var files = this.scanFolder(path).files;
    if (files.length == 0) {
      return { 
        "state": "no match file", 
        "list": [], 
        "start": start, 
        "total": files.length };}


    /* 获取指定范围的列表 */
    var len = files.length;
    var files_n = [];
    for (var i = 0; i < len; i++) {
      var t = files[i].substr(files[i].lastIndexOf(".")).toLocaleLowerCase();
      if (in_array(t, allowFiles)) {
        files_n.push(files[i]);}}



    var lenn = files_n.length;
    for (var i = Math.min(end, lenn) - 1, list = []; i < lenn && i >= 0 && i >= start; i--) {
      var f = files_n[i];
      list.push({ url: f });}


    return { 
      "state": "SUCCESS", 
      "list": list, 
      "start": start, 
      "total": files.length };};



  /**
   * 遍历获取目录下的指定类型的文件
   */_class.prototype.
  scanFolder = function scanFolder(path) {
    var fileList = [], 
    folderList = [], 
    walk = function walk(path, fileList, folderList) {
      var files = _fs2.default.readdirSync(think.RESOURCE_PATH + "/" + path);
      files.forEach(function (item) {
        var tmpPath = path + '/' + item, 
        stats = _fs2.default.statSync(think.RESOURCE_PATH + "/" + tmpPath);

        if (stats.isDirectory()) {
          walk(tmpPath, fileList, folderList);
          folderList.push(tmpPath);} else 
        {
          fileList.push(tmpPath);}});};




    walk(path, fileList, folderList);

    console.log('扫描' + path + '成功');

    return { 
      'files': fileList, 
      'folders': folderList };};return _class;}(_base2.default);exports.default = _class;