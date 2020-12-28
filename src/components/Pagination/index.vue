<!--
 * @Description: Pagination
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-01 14:26:18
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-28 15:57:47
-->
<template>
  <ElPagination
    v-bind="$attrs"
    :page-sizes="[10, 20, 30, 40, 50]"
    :hide-on-single-page="showPage"
    layout="total, sizes, prev, pager, next, jumper"
    v-on="$listeners"
    @size-change="$emit('change')"
    @current-change="$emit('change')"
  >
  </ElPagination>
</template>

<script>
export default {
  name: 'Pagination',
  computed: {
    showPage() {
      return this.$attrs.total / 10 < 1
    }
  }
}
</script>
