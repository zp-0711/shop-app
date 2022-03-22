import {
    reqGoodsInfo
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
    }
}
// getters是为了简化数据而生
const getters = {
    categoryView(state){
        // 比如：state.goodInfo初始化状态空对象，空对象的categoryView属性值肯定是undefined
        // 当前计算出来的 categoryView属性值至少是一个空对象
        return state.goodInfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||{};
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}