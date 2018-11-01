import Vue from 'vue'
import Router from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/index/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/success',
        name: 'success',
        component: () => import('@/view/success/success.vue')
    },
]

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

Vue.use(Router)
const router = new Router({
    routes,
    mode: 'hash',
    base: BASE_URL
})
export default router










