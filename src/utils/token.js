/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 15:53:24
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 15:53:25
 */
import Cookies from 'js-cookie'

export function getToken(name) {
  return Cookies.get(name)
}

export function setToken(name, value) {
  return Cookies.set(name, value)
}

export function removeToken(name) {
  return Cookies.remove(name)
}
