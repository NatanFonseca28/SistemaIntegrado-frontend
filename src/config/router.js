import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import Auth from '@/components/auth/Auth'
import Memorando from '@/components/api/memorando/Memorando'
import Circular from '@/components/api/circular/Circular'
import MemoById from '@/components/api/memorando/MemoById'


Vue.use(VueRouter)

/* -------------------------------------------------------------------------- */
/*                   Define as rotas das páginas do sistema                   */
/* -------------------------------------------------------------------------- */

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}, {
    name: "memorando",
    path: "/memorando",
    component: Memorando,
    meta: { requiresAuth: true }

}, {
    name: 'memoById',
    path: '/memos/:_id',
    component: MemoById
}, {
    name: 'circular',
    path: '/circular',
    component: Circular
}]

export default new VueRouter({
    mode: 'history',
    routes
})