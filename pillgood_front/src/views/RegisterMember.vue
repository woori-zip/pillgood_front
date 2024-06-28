<template>
  <div>
    <h4 style="color: #94B58B; margin-top:50px; margin-bottom:30px; font-weight: bold;">회원 가입</h4>
    <hr style="color: #94B58B; width: 50%; margin-bottom: 50px; margin-top: 30px; margin-left: auto; margin-right: auto;">
    <form @submit.prevent="createMember">
      <table class="table table-borderless">
        <tr>
          <td><label for="email">이메일:</label></td>
          <td>
            <input type="email" v-model="member.email" @blur="validateEmail" required />
            <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
          </td>
        </tr>
        <tr>
          <td><label for="password">비밀번호:</label></td>
          <td>
            <input type="password" v-model="member.password" @blur="validatePassword" required />
            <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
          </td>
        </tr>
        <tr>
          <td><label for="name">이름:</label></td>
          <td>
            <input type="text" v-model="member.name" @blur="validateName" required />
            <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
          </td>
        </tr>
        <tr>
          <td><label for="age">나이:</label></td>
          <td>
            <input type="number" v-model="member.age" @blur="validateAge" required />
            <span v-if="errors.age" class="text-danger">{{ errors.age }}</span>
          </td>
        </tr>
        <tr>
          <td><label for="gender">성별:</label></td>
          <td>
            <select v-model="member.gender" @blur="validateGender" required>
              <option value="N">성별을 선택하세요</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>
            <span v-if="errors.gender" class="text-danger">{{ errors.gender }}</span>
          </td>
        </tr>
        <tr>
          <td><label for="phoneNumber">전화번호:</label></td>
          <td>
            <input type="text" v-model="member.phoneNumber" @blur="validatePhoneNumber" required />
            <span v-if="errors.phoneNumber" class="text-danger">{{ errors.phoneNumber }}</span>
          </td>
        </tr>
      </table>
      <hr style="color: #94B58B; margin-bottom: 50px; margin-top: 30px; margin-left: auto; margin-right: auto;">
      <div style="margin-bottom:50px;">
        <button type="submit" class="submit-button">회원 가입</button>
        <button type="button" class="cancel-button" @click="cancelRegistration">취소</button>
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
      member: {
        email: '',
        password: '',
        name: '',
        age: '',
        gender: 'N',
        phoneNumber: '',
      },
      errors: {} // Ensure errors object is defined in data
    }
  },
  methods: {
    validateEmail() {
      if (!this.member.email.includes('@')) {
        this.errors.email = '유효한 이메일 주소를 입력하세요.'
      } else {
        delete this.errors.email
      }
    },
    validatePassword() {
      if(this.member.password.length < 6) {
        this.errors.password = '비밀번호는 최소 6 자 이상이어야 합니다.'
      } else {
        delete this.errors.password
      }
    },
    validateName() {
      if(this.member.name.trim() === '') {
        this.errors.name = '이름을 입력하세요.'
      } else {
        delete this.errors.name
      }
    },
    validateAge() {
      if(this.member.age <= 0) {
        this.errors.age = '유효한 나이를 입력하세요.'
      } else {
        delete this.errors.age
      }
    },
    validateGender() {
      if(this.member.gender === 'N') {
        this.errors.gender = '성별을 선택하세요.'
      } else {
        delete this.errors.gender
      }
    },
    validatePhoneNumber() {
      if(this.member.phoneNumber.length <= 10) {
        this.errors.phoneNumber = '유효한 전화번호를 입력하세요.'
      } else {
        delete this.errors.phoneNumber
      }
    },
    createMember() {
      this.validateEmail()

      if (Object.keys(this.errors).length === 0) {
        axios
          .post('http://localhost:9095/members/register', this.member)
          .then(response => {
            console.log(response.data);
            alert('회원 가입이 완료되었습니다.')
            this.$router.push('/');
          })
          .catch(error => {
            console.error(error);
            alert('회원 가입에 실패했습니다.')
          });
      } else {
        alert('폼을 올바르게 작성하세요.')
      }
    },
    cancelRegistration() {
      this.member = {
        email: '',
        password: '',
        name: '',
        age: '',
        gender: 'N',
        phoneNumber: '',
      };
      this.errors = {}
    }
  }
};
</script>

<style scoped>
.registration-table {
  margin: 150px 0
}

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

.text-danger {
  color: #ff0000;
}
</style>
