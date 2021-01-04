<!--
 * @Description: 概述
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 17:20:23
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-04 10:15:50
-->
<template>
  <div>
    <!-- 搜索组件 -->
    <SearchFormBox>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="工厂">
          <el-input v-model="formInline.user" placeholder="工厂"></el-input>
        </el-form-item>
        <el-form-item label="产品">
          <el-select v-model="formInline.region" placeholder="产品">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="型号">
          <el-select v-model="formInline.region1" placeholder="型号">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备">
          <el-select v-model="formInline.region2" placeholder="设备">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="充电板">
          <el-select v-model="formInline.region2" placeholder="充电板">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template slot="searchBtn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </template>
    </SearchFormBox>

    <!-- 表格组件 -->
    <TableListBox>
      <template>
        <div slot="left">
          <el-button type="primary">下载模板</el-button>
          <el-button type="primary">上传文件</el-button>
        </div>
        <div slot="right">
          <el-button type="primary">导出</el-button>
          <el-button type="primary">对比数据</el-button>
        </div>
      </template>

      <el-table
        :data="tableData"
        border
        style="width: 100%;"
      >
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页组件 -->
      <template slot="footer">
        <Pagination
          :total="total"
          :current-page.sync="formInline.pageIndex"
          :page-size.sync="formInline.pageSize"
        />
      </template>
    </TableListBox>
  </div>
</template>

<script>
// 概述
import SearchFormBox from 'src/components/SearchFormBox'
import TableListBox from 'src/components/TableListBox'
import Pagination from 'src/components/Pagination'
export default {
  name: 'Summary',
  components: {
    SearchFormBox,
    TableListBox,
    Pagination
  },
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        region1: '',
        region2: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }],
      total: 20
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
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
