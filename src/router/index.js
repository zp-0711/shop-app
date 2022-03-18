//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push与replace方法
// 第一个参数：告诉原来的push方法，往那里跳转（传递哪些参数）
// 第二个参数：成功回调
//第三个参数：失败的回调
// call|apply区别
// 相同点，都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}


//配置路由
export default new VueRouter({
    //配置路由
    routes: [{
            path: "/home",
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register

        },
        {
            name: "search",
            path: "/search/:keyword?",
            component: Search,
            meta: {
                show: true
            },
            // 布尔值的写法
            // props:true,
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: "/home"
        }
    ]
})