import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      {
        id: 'I01',
        name: '首页',
        url: '/home',
        meta: {
          index: true,
          icon: ''
        }
      },
      {
        id: 'M02',
        name: '大额监控',
        url: '/large',
        meta: {
          icon: ''
        },
        children: [
          {
            id: 'M0201',
            name: '大额查询',
            url: '/large/query',
            meta: {
              icon: ''
            },
          },
          {
            id: 'M0202',
            name: '大额新增',
            url: '/large/add',
            meta: {
              icon: ''
            },
          },
        ]
      },
      {
        id: 'M03',
        name: '可疑监控',
        url: '/suspicious',
        meta: {
          icon: ''
        },
        children: [
          {
            id: 'M0301',
            name: '可疑查询',
            url: '/suspicious/query',
            meta: {
              icon: ''
            },
          },
          {
            id: 'M0302',
            name: '可疑审核',
            url: '/suspicious/audit',
            meta: {
              icon: ''
            },
          },
        ]
      },
      {
        id: 'M04',
        name: '客户分类',
        url: '/classify',
        meta: {
          icon: ''
        },
        children: []
      },
      {
        id: 'M05',
        name: '系统管理',
        url: '/sys',
        meta: {
          icon: ''
        },
        children: [
          {
            id: 'M0501',
            name: '用户管理',
            url: '/sys/user_mng',
            meta: {
              icon: ''
            },
          },
          {
            id: 'M0502',
            name: '菜单管理',
            url: '/sys/menu_mng',
            meta: {
              icon: ''
            },
          },
        ]
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {}
})
