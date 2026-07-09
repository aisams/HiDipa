import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../pages/Projects.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../pages/Blog.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/HiDipa/'),
  routes,
})

export default router
