<template>
  <div class="login-wrapper">
    <form @submit.prevent="submitRequest">
    <div class="login-container">
    <h4 style="color: #94B58B; margin-bottom: 30px; font-weight: bold;">비밀번호 재설정</h4>
      <table class="login-table">
        <tr>
          <td><label for="email">이메일:</label></td>
          <td>
            <input type="email" v-model="email" required />
          </td>
        </tr>
        <tr>
          <td><label for="phoneNumber">휴대전화번호:</label></td>
          <td>
            <input type="text" v-model="phoneNumber" required />
          </td>
        </tr>
      </table>
      <button type="submit" class="submit-button">비밀번호 재설정 링크 보내기</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/styles.css'

export default {
  data() {
    return {
      email: '',
      phoneNumber: ''
    }
  },
  methods: {
    submitRequest() {
      axios
        .post('http://localhost:9095/forgot-password', {
          email: this.email,
          phoneNumber: this.phoneNumber
        })
        .then(response => {
          console.log(response.data);
          alert('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
          alert('이메일 또는 휴대전화번호가 일치하지 않습니다.');
        });
    }
  }
}
</script>

<style scoped>
.submit-button {
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
  width: 100%;
}

.cancel-button {
  background-color: #f2f2f2;
}

.text-danger {
  color: #ff0000;
}
</style>
