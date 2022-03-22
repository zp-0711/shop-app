//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
// 路由的配置信息
export default [
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