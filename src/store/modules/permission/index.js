/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 15:49:30
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-08 14:20:05
 */
import { asyncRoutes, constantRoutes } from 'src/router'
import * as types from './types'
/**
 * @Function: 判断当前用户是否具有权限
 * @Description: 使用code确定当前用户是否具有权限
 * @param {permissionList}
 * @param {route}
 * @return {Boolean}
 */
function hasPermission(permissionList, route) {
  if (route.meta && route.meta.code) {
    return !!permissionList.find(permission => permission.code === route.meta.code)
  } else {
    return true
  }
}
/**
 * @Function: 过滤异步路由表
 * @Description: 递归过滤异步路由表
 * @param {asyncRoutes}
 * @param {permissionList}
 * @return {[]}
 */
function filterAsyncRoutes(asyncRoutes, permissionList) {
  const res = []
  if (!asyncRoutes.length) {
    return []
  }
  asyncRoutes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(permissionList, route)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissionList)
      }
      res.push(tmp)
    }
  })
  return res
}
const state = {
  addRoutes: [],
  routes: []
}

const mutations = {
  [types.SET_ROUTES]: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
    console.log(state.routes)
  }
}

const actions = {
  [types.generateRoutes]({ commit }, permissionList) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, permissionList)
      commit(types.SET_ROUTES, accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
