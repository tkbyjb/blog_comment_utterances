import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Home',
    component: ()=>import("@/views/T4.vue")
  },
  {
    path: '/todo',
    name: 'todo',
    component: ()=>import("@/views/TodoList.vue")
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: ()=>import("@/views/Vuex.vue")
  },
  {
    path: '/good',
    name: 'good',
    component: ()=>import("@/views/Good.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
