//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes'
//使用插件
Vue.use(VueRouter);

// 引入store
import store from '@/store'
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
let router = new VueRouter({
    //配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return {
            y: 0
        }
    }
})
// 全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
    // to：可以获取到你想要跳转到的哪个路由信息
    // from：可以获取到你从哪个路由而来的信息
    // next：放行函数   next();
    // next('/login') 放行到指定的路由的当中  next(false)
    // 为了测试先全都放行
    // next();
    // 用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token;
    // 用户信息
    let name = store.state.user.userInfo.name
    // 用户已经登录了
    if (token) {
        // 用户已经登录了还想要去login[不能去，停留在首页]
        if (to.path == '/login') {
            next('/home')
        } else {
            // 登录，取得不是login 可以是【home|search|detail】
            // 如果用户名已有
            if (name) {
                next();
            } else {
                //    没有用户信息，派发action让仓库存储用户信息
                // 获取用户信息在首页展示
                try {
                    //    获取用户信息成功
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // token失效了，获取不到用户的信息，重新登陆
                    // 清除token
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }
        }
    } else {
        //
        next()
    }

})
export default router;