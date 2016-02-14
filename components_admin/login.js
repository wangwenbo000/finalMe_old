/**
 * Created by wangwenbo on 15/12/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-validator'
import VueResource from 'vue-resource'
import App from './login.vue'

//vue路由设置
Vue.use(Router);
Vue.use(VueValidator);
Vue.use(VueResource);

Vue.http.options.root = '/root';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
Vue.http.options.emulateJSON = true;

var router = new Router();

router.start(App, '#app');
