/*
 * @Description: getters
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:48:08
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 16:42:27
 */
const getters = {
  sideBar: state => state.app.sideBar,
  // name: state => state.user.name,
  // token: state => state.user.token,
  permissionList: state => state.user.permissionList,
  permission_routes: state => state.permission.routes
}
export default getters
