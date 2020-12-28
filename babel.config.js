/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 14:16:20
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-24 18:50:50
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  'plugins': [
    [
      'import',
      {
        'libraryName': 'aidongyang-ui', // 库名
        'libraryDirectory': 'packages'
      }
    ]
  ]
}
