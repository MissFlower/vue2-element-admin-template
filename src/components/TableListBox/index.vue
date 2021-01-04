<!--
 * @Description: TableListBox
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-01 14:05:33
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-04 11:09:02
-->
<template>
  <div class="table-list-box">
    <div class="clearfix function-btn">
      <div class="fl">
        <slot name="left" />
      </div>
      <div class="fr">
        <slot name="right" />
      </div>
    </div>
    <slot />
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableListBox',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.function-btn {
  margin-bottom: 24px;
}

.footer {
  margin-top: 24px;
  text-align: right;
}
</style>
