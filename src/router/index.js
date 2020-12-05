import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/modules/Home.vue'
import NProgress from 'nprogress'
import Login from "../views/Login";
import Layout from "../views/Layout";
import NotFound from "../views/modules/NotFound"

Vue.use(VueRouter)

const asyncRoutes = [
  {
    path: '/large',
    component: Layout,
    meta: {
      title: '大额监控'
    },
    children: [
      {
        path: '',
        redirect: 'query',
      },
      {
        path: 'query',
        meta: {
          title: '大额监控查询'
        },
        component: () => import(/* webpackChunkName: "large_query" */ '../views/modules/large/Query.vue'),
      },
      {
        path: 'add',
        meta: {
          title: '大额监控新增'
        },
        component: () => import(/* webpackChunkName: "large_add" */ '../views/modules/large/Add.vue'),
      },
    ]
  },
  {
    path: '/suspicious',
    component: Layout,
    meta: {
      title: '可疑监控'
    },
    children: [
      {
        path: '',
        redirect: 'query',
      },
      {
        path: 'query',
        meta: {
          title: '可疑监控查询'
        },
        component: () => import(/* webpackChunkName: "suspicious_query" */ '../views/modules/suspicious/Query.vue'),
      },
      {
        path: 'audit',
        meta: {
          title: '可疑监控审核'
        },
        component: () => import(/* webpackChunkName: "suspicious_add" */ '../views/modules/suspicious/Audit.vue'),
      },
    ]
  },
  {
    path: '/classify',
    component: Layout,
    meta: {
      title: '客户分类'
    },
    children: [
      {
        path: '',
        redirect: 'judge',
      },
      {
        path: 'judge',
        meta: {
          title: '人工复评'
        },
        component: () => import(/* webpackChunkName: "classify_judge" */ '../views/modules/classify/Judge.vue'),
      },
    ]
  },
  {
    path: '/sys',
    component: Layout,
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: '',
        redirect: 'user_mng',
      },
      {
        path: 'user_mng',
        meta: {
          title: '用户管理'
        },
        component: () => import(/* webpackChunkName: "user_mng" */ '../views/modules/system_mng/UserMng.vue'),
      },
      {
        path: 'menu_mng',
        meta: {
          title: '菜单管理'
        },
        component: () => import(/* webpackChunkName: "menu_mng" */ '../views/modules/system_mng/MenuMng.vue'),
      },
    ]
  },
]

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component:Layout,
    children:[
      {
        path:'',
        component: NotFound
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

router.addRoutes(asyncRoutes)

export default router
