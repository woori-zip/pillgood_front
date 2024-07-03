import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterMember.vue'
import Login from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import ChangePassword from '../views/ChangePasswordView.vue'
import MyPage from '../views/MyPage.vue'

import Template from '../views/Template.vue'

import store from '../store'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/forgotpassword', component: ForgotPassword },
  { path: '/changepassword', component: ChangePassword },
  { path: '/mypage', component: MyPage },
  { path: '/template', component: Template },
  { path: '/survey', component: Survey, meta: { requiresAuth: true } },
  { path: '/surveyresult', component: SurveyResult, meta: { requiresAuth: true } },
  { path: '/cart', component: CartView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.member.isLoggedIn) {
      alert('로그인이 필요한 페이지입니다.');
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
