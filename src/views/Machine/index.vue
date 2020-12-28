<!--
 * @Description: 整机测试
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 17:24:00
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 17:41:46
-->
<template>
  <div>
    整机测试
    <AiButton type="success" disabled>我的按钮</AiButton>
    <AiButton type="primary">我的按钮</AiButton>
    <AiButton type="warning">我的按钮</AiButton>
    <AiButton type="danger">我的按钮</AiButton>
    <AiButton type="info">我的按钮</AiButton>
    <AiInput v-model="aaa" disabled readonly @blur="handleBlur" />
  </div>
</template>

<script>
// 整机测试
export default {
  name: 'Machine',
  data() {
    return {
      aaa: '我的输入框'
    }
  },
  methods: {
    handleBlur() {
      console.log(this.aaa)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

