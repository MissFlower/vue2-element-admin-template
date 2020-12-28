/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-25 13:14:05
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-25 14:41:06
 */
import axios from 'axios'
const requestMap = new Map()

function addRequest(config) {
  const requestKey = `${config.method}${config.url}`
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    // 如果pendingAjax中不存在当前请求，添加进去
    if (requestKey && !requestMap.has(requestKey)) {
      requestMap.set(requestKey, cancel)
    }
  })
}

function removeRequest(config) {
  // 如果pendingAjax中存在当前请求, 取消当前请求并将其删除
  const requestKey = `${config.method}${config.url}`
  if (requestKey && requestMap.has(requestKey)) {
    const cancel = requestMap.get(requestKey)
    cancel(config)
    requestMap.delete(requestKey)
  }
}

export {
  addRequest,
  removeRequest
}
