<!--
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:16:20
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 15:24:10
-->
<template>
  <div id="app">
    <router-view />
    <Loading v-show="showLoading" />
  </div>
</template>

<script>
import Loading from 'src/components/Loading'
export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    showLoading() {
      return this.$store.state.common.requestCount > 0
    }
  }
}
</script>
<style lang="scss">
#app {
  height: 100%;
  div, section {
    box-sizing: border-box;
  }
}
</style>
