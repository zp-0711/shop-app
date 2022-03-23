import {
    reqGoodsInfo,
    reqAddOrUpdataShopCart
} from "@/api"
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({
        commit
    }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    // 添加商品到购物车
    // 加入购物车以后（发请求），前台将参数带给服务器
    // 服务器写入数据成功，并没有返回其他的数据，只是返回code==200
    // 因为服务器没有返回其余的数据，因此仓库中不用写state和mutations
    async addOrUpdataShopCart({
        commit
    }, {
        skuId,
        skuNum
    }) {
        let result = await reqAddOrUpdataShopCart(skuId, skuNum);
        console.log(result)
        // if (result.code == 200) {
        //     commit('ADDORUPDATASHOPCART', result.data);
        // }
    }
}
// getters是为了简化数据而生
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // 比如：state.goodInfo初始化状态空对象，空对象的categoryView属性值肯定是undefined
        // 当前计算出来的 categoryView属性值至少是一个空对象
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖的属性简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}