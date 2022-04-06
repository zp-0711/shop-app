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
// import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，
// 然后当路由被访问的时候才加载对应组件，这样就会更加高效



// 路由的配置信息
export default [

    {
        path: "/center",
        name: 'center',
        component: () => import('@/pages/Center'),
        meta: {
            show: true
        },
        children: [{
                path: 'myOrder',
                name: 'myOrder',
                component: () => import('@/pages/Center/myOrder'),
            },
            {
                path: 'groupOrder',
                name: 'groupOrder',
                component: () => import('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            }
        ]
    },
    {
        path: "/paysuccess",
        name: 'paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: {
            show: true
        },
    },
    {
        path: "/pay",
        name: 'pay',
        component: () => import('@/pages/Pay'),
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == "/trade") {
                next();
            } else {
                next(false)
            }
        }
    },
    {
        path: "/trade",
        name: 'trade',
        component: () => import('@/pages/Trade'),
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车而来
            if (from.path == "/shopcart") {
                next()
            } else {
                // 其他的路由组件而来必须停留在现在
                next(false)
            }
        }
    },
    {
        path: "/shopcart",
        name: 'shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: {
            show: true
        },
    },
    {
        path: "/addcartsucess",
        name: 'addcartsucess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {
            show: true
        },
    },
    {
        path: "/detail/:skuid",
        component:() => import('@/pages/Detail'), 
        meta: {
            show: true
        },
    },
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: "/login",
        component: () => import('@/pages/Login')
    },
    {
        path: "/register",
        component: () => import('@/pages/Register')

    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: () => import('@/pages/Search'),
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