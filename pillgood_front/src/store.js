import { createStore } from 'vuex';
import axios from './axios'; // 설정된 axios 인스턴스 불러오기

export default createStore({
state: {
  isLoggedIn: false, // 로그인 상태를 저장하는 상태
  user: null // 사용자 정보를 저장하는 상태
},
mutations: {
  setLoginState(state, payload) {
    state.isLoggedIn = payload,
    state.user = payload.user
    console.log('상태 업데이트 - isLoggedIn:', state.isLoggedIn, 'user:', state.user); // 디버깅 로그 추가
  }
},
actions: {
  async login ({ commit },{ email, password }) {
    try {
      //로그인 API 호출
      const response = await axios.post('/members/login',{email,password})

      if (response.status === 200) {
        commit('setLoginState', { isLoggedIn: true, user: response.data })
        console.log('axios 로그인 성공: ')
        localStorage.setItem('loggedIn',true)
        console.log('Vuex 상태: 로그인 성공')
      } else {
        console.error('axios 로그인 실패: ', response.data)
      }
    } catch (error) {
      console.error('axios 로그인 에러: ', error)
    }
  },
  async checkLoginStatus({ commit }) {
    try {
      const response = await axios.get('/members/check-session', { withCredentials: true })
      console.log('세션 체크 응답:', response.data) // 디버깅 로그 추가
      if (response.status === 200) {
        commit('setLoginState', { isLoggedIn: true, user: response.data.user })
      } else {
        commit('setLoginState', { isLoggedIn: false, user: null })
      }
    } catch (error) {
      commit('setLoginState', { isLoggedIn: false, user: null })
      console.log('세션 확인 에러: ', error)
    }
  },
  logout ({commit}) {
    //로그아웃 로직
    localStorage.removeItem('loggedIn')
    commit('setLoginState', { isLoggedIn: false, user: null })
  }
}
})
