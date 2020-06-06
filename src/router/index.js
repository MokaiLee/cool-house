import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/modules/Home.vue'
import NProgress from 'nprogress'
import Login from "../views/Login";
import Layout from "../views/Layout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
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
    path: '/login',
    component: Login
  },
  {
    path: '/large',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'query',
      },
      {
        path: 'query',
        component: () => import(/* webpackChunkName: "large_query" */ '../views/modules/large/Query.vue'),
      },
      {
        path: 'add',
        component: () => import(/* webpackChunkName: "large_add" */ '../views/modules/large/Add.vue'),
      },
    ]
  },
  {
    path: '/suspicious',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'query',
      },
      {
        path: 'query',
        component: () => import(/* webpackChunkName: "suspicious_query" */ '../views/modules/suspicious/Query.vue'),
      },
      {
        path: 'audit',
        component: () => import(/* webpackChunkName: "suspicious_add" */ '../views/modules/suspicious/Audit.vue'),
      },
    ]
  },
  {
    path: '/classify',
    component: Layout,
  },
  {
    path: '/sys',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'user_mng',
      },
      {
        path: 'user_mng',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "user_mng" */ '../views/modules/system_mng/UserMng.vue'),
      },
      {
        path: 'menu_mng',
        component: () => import(/* webpackChunkName: "menu_mng" */ '../views/modules/system_mng/MenuMng.vue'),
      },
    ]
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

export default router
