//当前的模块：API借口进行统一的管理
import {
    requests
} from './request'
import {
    mockrequests
} from './mockAjax';
//首页三级联动接口
//api/product/getBaseCategoryList    get 无参数

export const reqCategoryList = () => requests({
    url: '/api/product/getBaseCategoryList',
    method: 'get'
});

//发请求:axios发请求返回的结果是Promise对象 

// 获取banner数据（Home首页轮播图接口）
export const reqGetBannerList = () => mockrequests({
    url: '/mock/banner',
    method: 'get'
});
// 获取Floor数据
export const reqFloorList = () => mockrequests({
    url: '/mock/floor',
    method: 'get'
});

// 获取搜搜模块数据 地址：/api/list  请求方式：post 参数：需要带参数
// 当前的接口（获取搜索模块的数据），给服务器传递的参数至少得是一个空对象，给服务器传递一个默认的参数
export const reqGetSearchInfo = (params) => requests({
    url: '/api/list',
    method: 'post',
    data: params,
});

export const reqGoodsInfo = (skuId) => requests({
    url: `/api/item/${skuId}`,
    method: 'get',
});

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdataShopCart = (skuId, skuNum) => requests({
    url: `/api/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post'
}, );

// 服务器商品返回购物车
export const reqCartList = () => requests({
    url: '/api/cart/cartList',
    method: 'get'
}, );

// 删除购物车的接口
export const reqDeleteCartById = (skuId) => requests({
    url: `/api/cart/deleteCart/${skuId}`,
    method: 'DELETE'
});
// 修改购物车状态
// /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdataCheckById = (skuId, isChecked) => requests({
    url: `/api/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
});

//获取验证码
export const reqGetCode = (phone) => requests({
    url: `/api/user/passport/sendCode/${phone}`,
    method: 'get'
});
// 注册
export const reqUserRegister = (data) => requests({
    url: '/api/user/passport/register',
    data,
    method: 'post'
});

// /api/user/passport/login
// 登录接口
export const reqUserLogin = (data) => requests({
    url: '/api/user/passport/login',
    data,
    method: 'post'
});

// 自动登录（获取用户的信息，需要带着用户的token向服务器携带用户的信息）
// /api/user/passport/auth/getUserInfo

export const reqUserInfo = () => requests({
    url: '/api/user/passport/auth/getUserInfo',
    method: 'get'
});

// 退出登录
// /api/user/passport/logout
export const reqLogout = () => requests({
    url: '/api/user/passport/logout',
    method: 'get'
});

// 获取用户地址信息接口
export const reqAddressInfo = () => requests({
    url: '/api/user/userAddress/auth/findUserAddressList',
    method: 'get'
});

// 获取商品清单
export const reqOrderInfo = () => requests({
    url: '/api/order/auth/trade',
    method: 'get'
});

// 提交订单的接口
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo,data) => requests({
    url: `/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:'post'
})

// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId)=>requests({
    url:`/api/payment/weixin/createNative/${orderId}`,
    method:'get'
})
// 获取支付订单状态
export const reqPayStatus = (orderId)=>requests({
    url:`/api/payment/weixin/createNative/${orderId}`,
    method:'get'
})