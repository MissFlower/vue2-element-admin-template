/*
 * @Description: 常量
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-12-01 11:39:54
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-28 15:52:12
 */
// 模块名
export const MODEL_NAME = Object.freeze({
  MACHINE: 'MACHINE', // 整机
  CHARGE_BOARD: 'CHARGE_BOARD', // 充电板
  COMMUNICATION_BOARD: 'COMMUNICATION_BOARD' // 通讯板
})

// 上传 | 更新
const [UPLOAD, UPDATE] = [0, 1]
export const FILE_OPERATOR_INDENTIFY = Object.freeze({
  UPLOAD,
  UPDATE
})
export const FILE_OPERATOR = Object.freeze({
  [UPLOAD]: '上传',
  [UPDATE]: '更新'
})

// 上传状态
const [UNUPLOAD, UPLOADED] = [0, 1]
export const UPLOAD_STATUS = Object.freeze({
  [UNUPLOAD]: '未上传',
  [UPLOADED]: '已上传'
})

// 测试状态
// TODO 未测试状态
const [UNADOPT, ADOPTED, UNTEST] = [0, 1, -1]
export const TEST_STATUS = Object.freeze({
  [ADOPTED]: '通过',
  [UNADOPT]: '未通过'
})
export const TEST_STATUS_COLOR = Object.freeze({
  [ADOPTED]: '#27e327',
  [UNADOPT]: '#FF0000',
  [UNTEST]: '#999999'
})

// 字典类型
export const DICTIONARY_TYPE = Object.freeze({
  FACTORY: 'factory', // 工厂
  PRODUCT: 'product', // 产品
  MODEL: 'model' // 型号
})

// 数据字段
const [TEST_AMOUNT, QUALIFY_AMOUNT, REJECT_AMOUNT, PASS_RATE, ONCE_PASS_RATE] = [0, 1, 2, 3, 4]
export const DATA_FIELDS = Object.freeze({
  [TEST_AMOUNT]: '测试数量',
  [QUALIFY_AMOUNT]: '合格数量',
  [REJECT_AMOUNT]: '不良品数量',
  [ONCE_PASS_RATE]: '一次合格率',
  [PASS_RATE]: '合格率'
})

// 问题分类
const PROBLEM_CLASSIFY_DEFINE = {
  ARTIFICIAL: 'artificial',
  MATERIAL: 'material',
  EQUIPMENT: 'equipment',
  NETWORK: 'network',
  QUALITY: 'quality',
  TECHNOLOGY: 'technology',
  OTHER: 'other'
}
export const PROBLEM_CLASSIFY = Object.freeze({
  [PROBLEM_CLASSIFY_DEFINE.ARTIFICIAL]: '人员问题',
  [PROBLEM_CLASSIFY_DEFINE.MATERIAL]: '来料问题',
  [PROBLEM_CLASSIFY_DEFINE.EQUIPMENT]: '设备问题',
  [PROBLEM_CLASSIFY_DEFINE.NETWORK]: '网络问题',
  [PROBLEM_CLASSIFY_DEFINE.QUALITY]: '品质标准',
  [PROBLEM_CLASSIFY_DEFINE.TECHNOLOGY]: '工艺问题',
  [PROBLEM_CLASSIFY_DEFINE.OTHER]: '其他问题'
})
