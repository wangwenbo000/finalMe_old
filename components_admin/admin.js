/**
 * Created by wangwenbo on 15/12/29.
 */
import Dropdown from './bootstrap/js/dropdown.js'
import Modal from './bootstrap/js/modal.js'
import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'
import App from './admin.vue'

//admin Components
import Index from './index/index.vue'
import Artical from './article/article.vue'
import Ctr from './article/ctr.vue'
import Setting from './setting/setting.vue'

//vue路由设置
Vue.use(Router);
Vue.use(VueValidator);
Vue.use(VueResource);

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

var router = new Router();
router.map({
  '/': {
    name: 'Index',
    component: Index,
    title:'后台管理首页'
  },
  '/Console': {
    name: 'console',
    component: Index,
    title:'控制台'
  },
  '/Artical': {
    name: 'article',
    component: Artical,
    title:'文章列表'

  },
  '/Ctr/:newsId': {
    name: 'ctr',
    component: Ctr,
    title:'撰写文章'
  },
  '/Setting':{
    name: 'setting',
    component: Setting,
    title:'站点设置',
    //subRoutes: {
    //  '/bar': {
    //    component: Bar
    //  }
    //}
  }
});

router.start(App, '#app');
