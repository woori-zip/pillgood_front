<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h4 style="color: #94b58b; margin-bottom:30px; font-weight: bold; margin-right: auto; margin-left: auto">로그인</h4>
      <form @submit.prevent="login">
        <table class="login-table">
          <tr>
            <td><label for="email" class="white-label">이메일</label></td>
            <td><input type="email" clas="input-box" v-model="user.email" required /></td>
          </tr>
          <tr>
            <td><label for="password" class="white-label">비밀번호</label></td>
            <td><input type="password" clas="input-box" v-model="user.password" required /></td>
          </tr>
          <tr>
          <td colspan="2">
            <div class="chckbx">
              <div style="margin: 0 auto; display: flex">
              <div>
                <input style="margin: 0 auto; " type="checkbox">
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
          <button type="submit" class="submit-button">로그인</button>
          <button type="button" class="cancel-button" @click="toRegister">회원 가입</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/styles.css'

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      axios
        .post('http://localhost:9095/login', this.user)
        .then(response => {
          console.log(response.data)
          alert('로그인이 완료되었습니다.')
          this.$router.push('/')
        })
        .catch(error => {
          console.error(error);
          alert('로그인에 실패했습니다.')
        });
    },
    toRegister() {
        this.$router.push('/register')
    }
  },
};
</script>

<style scoped>

.submit-button, .cancel-button {
  background-color: #C6EDC2;
  border: none;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100px;
}

.cancel-button {
  background-color: #f2f2f2;
}

.chckbx {
  display: flex;
}
</style>
