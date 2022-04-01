// 登录与注册模块
import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfo,
    reqLogout
} from "@/api";

import {
    setToken,
    getToken,
    removeToken
} from "../utils/token"
const state = {
    code: '',
    token: getToken(),
    userInfo: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token

    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    // /清除本地存储
    CLEAR(state, token) {
        // 把仓库中相关用户信息清空
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
}
const actions = {
    async getCode({
        commit
    }, phone) {
        // 获取验证码的接口：把验证码返回控制台，但是正常情况下，后台是把验证码发给手机
        let result = await reqGetCode(phone);
        //   console.log(result)
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户注册
    async userRegister({
        commit
    }, user) {
        let result = await reqUserRegister(user)
        console.log(result);
    },
    // 登录业务
    async userLogin({
        commit
    }, data) {
        let result = await reqUserLogin(data)
        // console.log(result)
        // 服务器下发token：用户的唯一标识符（UUID）
        // 将来经常通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            // 此时用户已经成功登录并获取token
            commit("USERLOGIN", result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    // 获取用户信息
    async getUserInfo({
        commit
    }) {
        let result = await reqUserInfo();
        // console.log(result)
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return 'ok'
        }else{
            // return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogout({
        commit
    }) {
        // 只是向服务器发起请求，通知服务器删除相关信息
        let result = await reqLogout()
        if (result.code == 200) {
            commit('CLEAR');
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }

}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}