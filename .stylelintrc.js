/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-04 09:36:09
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-04 10:02:56
 */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
  rules: {
    "indentation": 2,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": null,
    "property-no-unknown": null,
    "at-rule-no-unknown": null,
    "selector-pseudo-element-no-unknown": null,
    "property-case": null // 运行驼峰命名
  }
}