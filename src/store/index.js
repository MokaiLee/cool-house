import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    menus: [
      {
        id: 'M01',
        name: '首页',
        path: '/home',
        show: true,
        icon: 'monitor'
      },
      {
        id: 'M02',
        name: '大额监控',
        path: '/large',
        show: true,
        icon: 'document-copy',
        children: [
          {
            id: 'M0201',
            name: '大额查询',
            path: '/large/query',
            show: true,
            icon: 'document-copy',
          },
          {
            id: 'M0202',
            name: '大额新增',
            path: '/large/add',
            show: false,
            icon: 'document-copy',
          },
        ]
      },
      {
        id: 'M03',
        name: '可疑监控',
        path: '/suspicious',
        show: true,
        icon: 'search',
        children: [
          {
            id: 'M0301',
            name: '可疑查询',
            path: '/suspicious/query',
            show: true,
            icon: 'search',
          },
          {
            id: 'M0302',
            name: '可疑审核',
            path: '/suspicious/audit',
            show: true,
            icon: 'search',
          },
        ]
      },
      {
        id: 'M04',
        name: '客户分类',
        path: '/classify',
        show: true,
        icon: 'user',
        children: [
          {
            id: 'M0302',
            name: '人工复评',
            path: '/classify/judge',
            show: true,
            icon: 'user',
          },
        ]
      },
      {
        id: 'M05',
        name: '系统管理',
        path: '/sys',
        show: true,
        icon: 'setting',
        children: [
          {
            id: 'M0501',
            name: '用户管理',
            path: '/sys/user_mng',
            show: true,
            icon: 'setting',
            children: [
              {
                id: 'M0501',
                name: '用户维护',
                path: '/sys/user_mng',
                show: true,
                icon: 'setting',
              },
              {
                id: 'M0502',
                name: '角色维护',
                path: '/sys/role_mng',
                show: true,
                icon: 'setting',
              },
            ]
          },
          {
            id: 'M0502',
            name: '菜单管理',
            path: '/sys/menu_mng',
            show: true,
            icon: 'setting',
          },
          {
            id: 'M0502',
            name: '参数管理',
            path: '/sys/param_mng',
            show: true,
            icon: 'setting',
            children: [
              {
                id: 'M0501',
                name: '比例参数管理',
                path: '/sys/portion_param_mng',
                show: true,
                icon: 'setting',
                children: [
                  {
                    id: 'M0501',
                    name: '比例参数维护',
                    path: '/sys/portion_param_update',
                    show: true,
                    icon: 'setting',
                  },
                ]
              },
            ]
          },
        ]
      },
    ],
  },
  mutations: {
    toggleCollapse(state){
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {},
  modules: {}
})
