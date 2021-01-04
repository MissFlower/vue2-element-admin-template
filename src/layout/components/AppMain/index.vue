<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:52:35
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-04 12:05:05
-->
<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <!-- <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive> -->
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      if (document.querySelector('.app-main')?.scrollTop) {
        document.querySelector('.app-main').scrollTop = 0
      }
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-width: 1100px;
  height: 100%;
  padding: 24px;
  overflow: auto;
}
</style>
