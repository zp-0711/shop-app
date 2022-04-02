//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 路由的配置信息
export default [
    {
        path: "/center",
        name:'center',
        component: Center,
        meta: {
            show: true
        },
    },
    {
        path: "/paysuccess",
        name:'paysuccess',
        component: PaySuccess,
        meta: {
            show: true
        },
    },
    {
        path: "/pay",
        name:'pay',
        component: Pay,
        meta: {
            show: true
        },
    },
    {
        path: "/trade",
        name:'trade',
        component: Trade,
        meta: {
            show: true
        },
    },
    {
        path: "/shopcart",
        name:'shopcart',
        component: ShopCart,
        meta: {
            show: true
        },
    },
    {
        path: "/addcartsucess",
        name:'addcartsucess',
        component: AddCartSuccess,
        meta: {
            show: true
        },
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: {
            show: true
        },
    },
    {
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