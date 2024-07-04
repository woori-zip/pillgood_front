import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterMember.vue'
import Login from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import ChangePassword from '../views/ChangePasswordView.vue'
import MyPage from '../views/MyPage.vue'

// product
import ProductCreate from '../views/product/ProductCreate.vue'
import ProductList from '../views/product/ProductList.vue'

// notice
import NoticeList from '../views/NoticeList.vue'
import NoticeCreate from '../views/NoticeCreate.vue'
import NoticeEdit from '../views/NoticeEdit.vue'

//carr
import CartPage from '../views/CartPage.vue'

import Template from '../views/Template.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/forgotpassword', component: ForgotPassword},
  {path: '/changepassword', component: ChangePassword},
  {path: '/mypage', component: MyPage},

  // product
  {path: '/productcreate', component: ProductCreate},
  {path: '/productlist', component: ProductList},


  // notice
  { path: '/noticelist', name: 'NoticeList', component: NoticeList },
  { path: '/noticecreate', name: 'NoticeCreate', component: NoticeCreate },
  { path: '/noticeedit/:id', name: 'NoticeEdit', component: NoticeEdit, props: true },
  
  // cart
  { path: '/cart', name: 'CartPage', component: CartPage },
  
  {path: '/template', component: Template}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
