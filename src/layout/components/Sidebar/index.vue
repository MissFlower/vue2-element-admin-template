<!--
 * @Description: sidebar
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:59:44
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 18:38:54
-->
<template>
  <div class="sidebar-container">
    <ElScrollbar wrap-class="scrollbar-wrapper">
      <ElMenu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
        class="el-menu-vertical-demo"
      >
        <SidebarItem
          v-for="route in constantRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </ElMenu>
    </ElScrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
import { constantRoutes } from 'src/router'
export default {
  name: 'SideBar',
  components: {
    SidebarItem: SidebarItem
  },
  data() {
    return {
      constantRoutes
    }
  },
  computed: {
    ...mapGetters([
      'sideBar',
      'permission_routes'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // 如果设置路径，侧栏将突出显示您设置的路径
      // console.log(meta.activeMenu)
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      return !this.sideBar.opened
    },
    variables() {
      return variables
    }
  }
}
</script>
