/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-30 16:05:33
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-12-01 15:13:31
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '质量数据平台'
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

