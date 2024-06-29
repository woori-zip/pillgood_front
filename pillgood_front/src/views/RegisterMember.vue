<template>
  <div>
    <h4 style="color: #94B58B; margin-top:30px; margin-bottom:30px; font-weight: bold;">회원 가입</h4>
    <div id="register_agree" class="wrapper">
      <h6>[약관 동의]</h6>
      <form id="agreementfrm" @submit.prevent="validateAgreement">
        <div class="chckbx">
          <div style="margin: 0 auto; display: flex">
            <div id="fregister_chkall">
              <input style="margin: 0 auto;" type="checkbox" v-model="allChecked" @change="checkAllAgreements" id="chk_all">
            </div>
            <div>
              <label for="chk_all" style="margin: 0 auto;">&nbsp;회원가입 약관에 모두 동의합니다</label>
            </div>
          </div>
        </div>
        <br>
        <hr style="color: gray; width: 400px; margin: 0 auto;">
        <section id="fregister_term">
          <div class="chckbx">
            <div style="margin: 0 auto; display: flex;">
              <div id="fregister_agree2" style="margin-top: 15px;">
                <input type="checkbox" v-model="agree11" id="agree11">
              </div>
              <div>
                <label for="agree11">&nbsp;이용약관 동의 <span style="color: red">(필수)</span></label>
              </div>
            </div>
          </div>
          <TermsContent1/>
          <br>
        </section>
        <section id="fregister_private">
          <div class="chckbx">
            <div style="margin: 0 auto; display: flex;">
              <div id="fregister_agree2" style="margin-top: 15px;">
                <input type="checkbox" v-model="agree22" id="agree22">
              </div>
              <div>
                <label for="agree22">&nbsp;개인정보 수집 이용 동의 <span style="color: red">(필수)</span></label>
              </div>
            </div>
          </div>
          <TermsContent2/>
        </section>
        <br>
        <div class="btn_confirm">
          <button type="submit" class="submit-button">동의하기</button>
          <button type="button" class="cancel-button" @click="toLogin">돌아가기</button>
        </div>
      </form>
    </div>
    <hr style="color: #94B58B; width: 70%; margin-bottom: 50px; margin-top: 0px; margin-left: auto; margin-right: auto;">
    <form @submit.prevent="createMember" id="createMemberfrm" :style="{ display: formVisible ? 'block' : 'none' }">
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
import TermsContent1 from '@/components/TermsContent1.vue'
import TermsContent2 from '@/components/TermsContent2.vue'

export default {
  components: {
    TermsContent1,
    TermsContent2
  },
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
      allChecked: false,
      agree11: false,
      agree22: false,
      formVisible: false, // Add formVisible data property
      errors: {} // Ensure errors object is defined in data
    }
  },
  watch: {
    // eslint-disable-next-line
    agree11(val) {
      this.updateAllChecked()
    },
    // eslint-disable-next-line
    agree22(val) {
      this.updateAllChecked()
    }
  },
  methods: {
    checkAllAgreements() {
      if(this.allChecked) {
        this.agree11 = true
        this.agree22 = true
      } else {
        this.agree11 = false
        this.agree22 = false
      }
    },
    updateAllChecked() {
      this.allChecked = this.agree11 && this.agree22;
    },
    validateAgreement() {
      if (this.agree11 && this.agree22) {
        this.formVisible = true
      } else {
        alert("모든 필수 약관에 동의해야 합니다.")
      }
    },
    toLogin() {
      this.$router.push('/login')
    },
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
      this.validateEmail();
      console.log('Errors:', this.errors);
      if (Object.keys(this.errors).length === 0) {
        console.log('Sending request to server...');
        axios
          .post('http://localhost:9095/members/register', this.member)
          .then(response => {
            console.log('Server response:', response.data);
            alert('회원 가입이 완료되었습니다.');
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Error during registration:', error);
            alert('회원 가입에 실패했습니다.');
          });
      } else {
        alert('폼을 올바르게 작성하세요.');
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


<style>
.registration-table {
  margin: 100px 0;
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

.agreementbox {
  width: 500px;
  height: 400px;
}

.wrapper {
  padding: 20px;
  margin: 20px auto 50px;
  width: 600px;
  border: 1px solid;
  border-color: #C6EDC2;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Noto Sans KR', sans-serif;
}

.checks2 {
  display: inline-block;
  align-items: center;
}

.checks2 input[type="checkbox"] {
  margin-right: 5px; 
}

.chckbx {
  display: flex;
}
</style>
