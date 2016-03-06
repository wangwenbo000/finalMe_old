'use strict';
/**
 * config
 */
export default {
  //key: value
  port: 8360, //服务监听的端口
  host: "", //服务监听的 host
  encoding: "utf-8", //项目编码
  pathname_prefix: "",  //pathname 去除的前缀，路由解析中使用
  pathname_suffix: ".html", //pathname 去除的后缀，路由解析中使用
  hook_on: true,  //是否开启 hook
  cluster_on: false, //是否开启 cluster

  timeout: 120, //120 seconds
  auto_reload: false, //自动重新加载修改的文件，development 模式下使用

  resource_on: true, // 是否处理静态资源请求， porxy_on 开启下可以关闭该配置
  resource_reg: /^(static\/|[^\/]+\.(?!js|html)\w+$)/, //静态资源的正则

  route_on: true, //是否开启自定义路由

  log_error: true, //是否打印错误日志
  log_request: false, //是否打印请求的日志

  create_server: undefined, //自定义启动服务
  output_content: undefined, //自定义输出内容处理方式，可以进行 gzip 处理等
  deny_module_list: [], //禁用的模块列表
  default_module: "home", //默认模块
  default_controller: "index",  //默认的控制器
  default_action: "index", //默认的 Action
  callback_name: "callback", //jsonp 请求的 callback 名称
  json_content_type: "application/json", //json 输出时设置的 Content-Type

  rss: {
    rss_on: true,//开关
    rss_show_num: 10//rss显示文章数
  },

  blog_info: {
    blog_name: "WANGWENBO.me",//站点主标题
    sub_title: "专注折腾",//副标题
    icp_num: "12345678",//备案号
    website_domain: "http://wangwenbo.me",//站点网址
    website_author_name: "咔花叔叔"//作者名字
  },
  /*
  disqus评论

  请求频次 1000/日
   */
  disqus: {
    dqs_on: true,//disqus开关
    short_name: 'wwblocal',//disqus短名
    //disqus application info
    api_key: 'nXHXoex8H7nLQodiafaYwmTBR8KRZjwAjCpPqGqTMyUsGWe0CLcxL6tXOXcgPfyF',//公钥
    api_secret: '5UgeBUWOe3dmKf5FuivVTmBWHkkXMRVoCrPutgjjVLMbQ0CHQXHhW5AUgMLmESQQ',//密钥
    access_token: '92648d6fc1ce494989303b82733beff7'
  },
  /*
   百度翻译
   后台翻译路由单句使用

   请求频次 1000/日
   */
  baidu_trans:{
    routeTransAPI: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    appid: '20160218000012560',
    key: 'NblJ36jLqoL8mKEsevzh',
  },

  think_vision: think.version,//thinkjs版本
  nums_per_page: 6,//每页显示文章数

  admin_title: "FinalMe AdminPanel",//后台名
  server_start_time: "2015/6/18"//服务器购入时间
};