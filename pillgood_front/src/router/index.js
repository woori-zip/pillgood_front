import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterMember.vue'
import Login from '../views/LoginView.vue'
import Guide from '../views/cssGuide.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/guide', component: Guide}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
