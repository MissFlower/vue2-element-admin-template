/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 15:26:35
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 15:27:15
 */
import * as types from './types'

export default {
  state: {
    // 请求记数
    requestCount: 0
  },

  mutations: {
    // 修改引用计数
    [types.UPDATE_REQUEST_COUNT](state, amount) {
      state.requestCount += amount
    }
  }
}
