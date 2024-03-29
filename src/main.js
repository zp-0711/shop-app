import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router';
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
//第一个参数：全局组件的名字  第二个参数：哪一个组件
import Carsousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';

// 引入element-UI
import {
  Button,
  Loading,
  MessageBox
} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false;
import store from './store';
import '@/mock/mockServe';
// 引入Swiper样式
import "swiper/css/swiper.css";
// 统一接收API文件夹里面全部请求函数
// 统一引入
import * as API from '@/api'
// element-ui注册组件的时候，还有一种写反思，挂载原型上面
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入图片
import loadingImg from '@/assets/1.gif';

//引入插件
import VueLazyload from 'vue-lazyload';
// 注册插件
Vue.use(VueLazyload,
  //懒加载默认的图片
  {
    Loading: loadingImg
  }
)

// 引入自定义插件
import myPlugins from './plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
})

// 引入校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：底下的写法
  //注册路由信息：当这里书写router的时候，组件身上都拥有$router，$route属性
  router,
  //注册仓库：组件实例vc的身上会多一个$store属性
  store,
}).$mount('#app')