import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('@/views/PortfolioView.vue')
    },
    {
        path: '/career',
        name: 'Career',
        component: () => import('@/views/CareerView.vue')
    },
    {
        path: '/apply',
        name: 'Application',
        component: () => import('@/views/CareerUnderviewView.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/BlogView.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/ContactView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router