import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import Login from "../views/Login";
import Layout from "../views/Layout";
import Module from "../views/Module";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'module',
        component: Module,
        children: [
          {
            path: 'about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/modules/About.vue')
          },
          {
            path: 'user_mng',
            name: 'UserMng',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "user_mng" */ '../views/modules/system_mng/UserMng.vue'),
          },
          {
            path: 'menu_mng',
            name: 'MenuMng',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "menu_mng" */ '../views/modules/system_mng/MenuMng.vue'),
          },
        ]
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
