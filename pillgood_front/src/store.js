import { createStore } from 'vuex';
import axios from './axios'; // 설정된 axios 인스턴스 불러오기

export default createStore({
  state: {
    isLoggedIn: false,
    user: null 
  },
  mutations: {
    setLoginState(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.user = payload.user;
      console.log('상태 업데이트 - isLoggedIn:', state.isLoggedIn, 'user:', state.user); // 디버깅 로그 추가
    }
  },
  actions: {
    async login({ commit, dispatch }, { email, password }) {
      try {
        const response = await axios.post('/members/login', { email, password });
        if (response.status === 200) {
          commit('setLoginState', { isLoggedIn: true, user: null });
          localStorage.setItem('loggedIn', true);
          await dispatch('fetchUserInfo');
        } else {
          console.error('axios 로그인 실패: ', response.data);
        }
      } catch (error) {
        console.error('axios 로그인 에러: ', error);
      }
    },
    async fetchUserInfo({ commit }) {
      try {
        const response = await axios.get('/members/findById', { withCredentials: true });
        if (response.status === 200) {
          commit('setLoginState', { isLoggedIn: true, user: response.data });
        } else {
          commit('setLoginState', { isLoggedIn: false, user: null });
        }
      } catch (error) {
        commit('setLoginState', { isLoggedIn: false, user: null });
        console.log('사용자 정보 가져오기 에러: ', error);
      }
    },
    async checkLoginStatus({ commit, dispatch }) {
      try {
        const response = await axios.get('/members/check-session', { withCredentials: true });
        console.log('세션 체크 응답:', response.data); // 디버깅 로그 추가
        if (response.status === 200) {
          await dispatch('fetchUserInfo');
        } else {
          commit('setLoginState', { isLoggedIn: false, user: null });
        }
      } catch (error) {
        commit('setLoginState', { isLoggedIn: false, user: null });
        console.log('세션 확인 에러: ', error);
      }
    },
    async logout({ commit }) {
      try {
        await axios.post('/members/logout', {}, { withCredentials: true });
        commit('setLoginState', { isLoggedIn: false, user: null });
        localStorage.removeItem('loggedIn');
      } catch (error) {
        console.error('로그아웃 에러: ', error);
      }
    }
  }
});
