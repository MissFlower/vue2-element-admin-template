import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import MainLayout from '@/layout/MainLayout' // nav + sidebar + main

export const constantRoutes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'Summary',
        component: () => import('src/views/Summary'),
        meta: {
          title: '概述',
          icon: 'el-icon-s-home',
          affix: true
        }
      }
    ]
  },
  {
    path: '/spotcheck',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'SpotCheck',
        component: () => import('src/views/SpotCheck'),
        meta: {
          title: '出货抽检',
          icon: 'el-icon-truck',
          affix: true
        }
      }
    ]
  },
  {
    path: '/machine',
    component: MainLayout,
    // redirect: '/machine/test',
    meta: {
      title: '整机',
      icon: 'el-icon-camera',
      affix: true
    },
    children: [
      {
        path: '',
        name: 'Machine',
        component: () => import('src/views/Machine'),
        meta: {
          title: '整机测试',
          icon: '',
          affix: true
        }
      },
      {
        path: 'baseData',
        name: 'MachineBaseData',
        component: () => import('src/views/MachineData'),
        meta: {
          title: '整机基础数据',
          icon: '',
          affix: true
        }
      }
    ]
  },
  {
    path: '/chargeBoard',
    component: MainLayout,
    // redirect: '/chargeBoard/test2',
    meta: {
      title: '充电板',
      icon: 'el-icon-s-finance',
      affix: true
    },
    children: [
      {
        path: '',
        name: 'ChargeBoard',
        component: () => import('src/views/ChargeBoard'),
        meta: {
          title: '充电板测试',
          icon: '',
          affix: true
        }
      },
      {
        path: 'basedata',
        name: 'ChargeBoardBaseData',
        component: () => import('src/views/ChargeBoardData'),
        meta: {
          title: '充电板基础数据',
          icon: '',
          affix: true
        }
      }
    ]
  },
  {
    path: '/communicationBoard',
    component: MainLayout,
    redirect: '/communicationBoard',
    meta: {
      title: '通讯板',
      icon: 'el-icon-suitcase',
      affix: true
    },
    children: [
      {
        path: '',
        name: 'CommunicationBoard',
        component: () => import('src/views/CommunicationBoard'),
        meta: {
          title: '通讯板测试',
          icon: '',
          affix: true
        }
      },
      {
        path: 'basedata',
        name: 'CommunicationBoardBaseData',
        component: () => import('src/views/CommunicationBoardData'),
        meta: {
          title: '通讯板基础数据',
          icon: '',
          affix: true
        }
      }
    ]
  }
]

export const asyncRoutes = []

const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
