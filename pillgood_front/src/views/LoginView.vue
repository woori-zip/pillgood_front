<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h4 style="color: #94b58b; margin-bottom:30px; font-weight: bold; margin-right: auto; margin-left: auto">로그인</h4>
      <form @submit.prevent="handleLogin">
        <table class="login-table">
          <tr>
            <td><label for="email" class="white-label">이메일</label></td>
            <td><input type="email" class="input-box" v-model="email" required /></td>
          </tr>
          <tr>
            <td><label for="password" class="white-label">비밀번호</label></td>
            <td><input type="password" class="input-box" v-model="password" required /></td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="chckbx">
                <div style="margin: 0 auto; display: flex">
                  <div>
                    <input style="margin: 0 auto;" type="checkbox">
                  </div>
                  <div>
                    <label for="chk_all" style="margin: 0 auto;">&nbsp;이메일 기억하기</label>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <router-link to="/forgot-password">아이디/비밀번호 찾기</router-link>
            </td>
          </tr>
        </table>
        <div style="margin-bottom:30px; margin-top: 30px;">
          <button type="submit" class="btn btn-green">로그인</button>
          <button type="button" class="btn btn-gray" @click="navigateToRegister">회원가입</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      console.log('로그인 시도: ', this.email, this.password); // 디버깅 로그 추가
      await this.login({ email: this.email, password: this.password });
      if (this.$store.state.isLoggedIn) {
        console.log('로그인 성공');
        alert('로그인 성공')
        this.$router.push('/'); // 로그인 성공 시 홈으로 이동
      } else {
        console.log('로그인 실패');
        alert('로그인 실패. 다시 시도하세요.');
      }
    },
    navigateToRegister() {
      this.$router.push('/register');
    }
  }
}
</script>
