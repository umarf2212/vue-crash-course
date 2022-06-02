import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home'
import AboutVue from '../views/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeVue
    },
    {
        path: '/about',
        name: 'About',
        component: AboutVue
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router