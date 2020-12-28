<!--
 * @Description: MainLayout
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 15:04:16
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 15:05:17
-->
<template>
  <div :class="classObj" class="app-wrapper">
    <!-- 导航栏 -->
    <Navbar />
    <div class="main">
      <!-- 左侧菜单栏 -->
      <Sidebar />
      <!-- 右侧展示区 -->
      <div class="main-container">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from 'src/layout/components'
import { mapState } from 'vuex'
import ResizeMixin from '../mixin/ResizeHandler'
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sideBar: state => state.app.sideBar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        hideSidebar: !this.sideBar.opened,
        openSidebar: this.sideBar.opened,
        withoutAnimation: this.sideBar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .main {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    position: relative;
    overflow: auto;
  }
}
</style>
