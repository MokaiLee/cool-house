import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideMenu: [
      {
        id: '1',
        name: '导航一',
        label: '导航一',
        icon: 'location',
        children: [
          {
            id: '1-1',
            name: '选项1-1',
            label: '选项1-1',
            icon: '',
            url: '/about',
            children: []
          },
          {
            id: '1-2',
            name: '选项1-2',
            label: '选项1-2',
            icon: '',
            url: '/',
          },
          {
            id: '1-4',
            name: '导航二',
            label: '导航二',
            icon: '',
            children: [
              {
                id: '1-4-1',
                name: '选项1-4-1',
                label: '选项1-4-1',
                icon: '',
                children: [
                  {
                    id: '1-4-1-1',
                    name: '选项1-4-1-1',
                    label: '选项1-4-1-1',
                    icon: '',
                    url: '/about',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '2',
        name: '选项2',
        label: '选项2',
        icon: '',
        url: '/layout/module/about',
      },
      {
        id: '3',
        name: '选项3',
        label: '选项3',
        icon: '',
        url: '/layout/module/user_mng',
      },
      {
        id: '4',
        name: '选项4',
        label: '选项4',
        icon: '',
        url: '/layout/module/menu_mng',
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
