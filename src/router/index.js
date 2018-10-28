import Vue from 'vue'
import Router from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/index/index.vue')
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










