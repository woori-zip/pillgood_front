import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterMember.vue'
import Login from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import ChangePassword from '../views/ChangePasswordView.vue'
import MyPage from '../views/MyPage.vue'
import Guide from '../views/cssGuide.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/forgot-password', component: ForgotPassword},
  {path: '/changepassword', component: ChangePassword},
  {path: '/mypage', component: MyPage},
  {path: '/guide', component: Guide}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
