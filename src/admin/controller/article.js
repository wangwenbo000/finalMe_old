'use strict';

import Base from './base.js';
import moment from 'moment';
import qiniu from 'qiniu';
var fs = require('fs');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

  init(http) {
    super.init(http);
    this.modelInstance = this.model('article');
  }

  //查询&筛选
  async getAction() {
    let pdata = this.post();
    let pageIndex = this.post('page') || 1;
    let condition = think.isEmpty(this.post('condition')) ? '' : JSON.parse(this.post('condition'));
    console.log(condition);
    let shownum = think.config('admin_nums_per_page');
    if (think.isEmpty(pdata.id)) {
      let data = await this.modelInstance
        .page(pageIndex, shownum)
        .where(condition)
        .order({'show': 'ASC', 'id': 'DESC'})
        .countSelect();
      this.success(data);
    } else {
      let data = await this.modelInstance.where({id: pdata.id}).select();
      this.success(data);
    }
  }

  //增加&更新
  async addAction() {
    let id = this.post('id');
    console.log(this.post());
    if (think.isEmpty(id)) {
      let insertId = await this.modelInstance.add(this.post());
      this.success(insertId);
    } else {
      let data = await this.modelInstance.where({id: id}).update(this.post());
      this.success(data);
    }
  }

  //删除
  async delAction() {
    let idarr = JSON.parse(this.post('idarr'));
    let delNews = await this.modelInstance.where({id: idarr}).delete();
  }

  //upload
  async uploadAction() {
    let upload = this.file('editormd-image-file');
    var qiniuConfig = think.config('qiniu');
    //需要填写你的 Access Key 和 Secret Key
    qiniu.conf.ACCESS_KEY = qiniuConfig.Access_Key;
    qiniu.conf.SECRET_KEY = qiniuConfig.Secret_Key;

    //要上传的空间
    let bucket = qiniuConfig.Bucket_Name;

    //上传到七牛后保存的文件名
    let key = 'wwb_article_'+moment().format('YYYYMMDDHHmmss')+'.jpg';
    //要上传文件的本地路径
    let filePath = upload.path;

    let token = this.uptoken(bucket, key);

    this.uploadFile(token, key, filePath);
  }
  uptoken(bucket, key) {
    var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
  }
  uploadFile(uptoken, key, localFile) {
    var self = this;
    var extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
      if(!err) {
        // 上传成功， 处理返回值
        //console.log(ret.hash, ret.key, ret.persistentId);
        let backjson={
          success : 1,           // 0 表示上传失败，1 表示上传成功
          message : "已经上传到七牛云 文件名:"+ret.key,
          url     : "http://7xs2uw.com1.z0.glb.clouddn.com/" + ret.key       // 上传成功时才返回
        };
        self.end(backjson);
      } else {
        // 上传失败， 处理返回代码
        let backjson={
          success : 0,           // 0 表示上传失败，1 表示上传成功
          message : "上传失败"
        };
        self.end(backjson);
      }
    });
  }
}