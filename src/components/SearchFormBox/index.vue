<!--
 * @Description: SearchFormBox
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-01 11:46:31
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-04 10:12:01
-->
<template>
  <div class="search-form-container">
    <slot />

    <div class="search-button-box">
      <slot name="searchBtn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFormBox',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.search-form-container /deep/ {
  margin-bottom: 24px;

  .el-form {
    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 12px;
  }

  .el-form-item {
    flex: 0 1 calc((100% - 54px) / 4);
    margin-right: 0;
    margin-bottom: -5px;
  }

  .el-form-item__content,
  .el-select {
    width: 100%;
  }

  .search-button-box {
    text-align: center;

    .el-button + .el-button {
      margin-left: 18px;
    }
  }
}
</style>
