import axios from '../../axios'; // 설정된 axios 인스턴스 불러오기

const state = {
  isLoggedIn: false,
  memberId: null, // 사용자 ID를 저장할 상태
  member: null, // 사용자 정보를 저장할 상태
  isAdmin: false, // 관리자 여부를 저장할 상태
  token: null, // 인증 토큰을 저장할 상태
};

const mutations = {
  setLoginState(state, payload) {
    if (payload.memberId !== undefined) { // memberId가 undefined가 아닌 경우에만 업데이트
      state.isLoggedIn = payload.isLoggedIn;
      state.memberId = payload.memberId;
      state.member = payload.member;
      state.isAdmin = payload.isAdmin || false;
      state.token = payload.token || null;
      // 상태 업데이트 확인 로그
      console.log('memberStore.js - 상태 업데이트 - isLoggedIn:', state.isLoggedIn, 'memberId:', state.memberId, 'isAdmin:', state.isAdmin, 'token:', state.token);
    }
  }
};

const actions = {
  async login({ dispatch, commit }, { email, password }) {
    try {
      const response = await axios.post('/members/login', { email, password });
      console.log('memberStore.js - 로그인 응답:', response.data); // 로그인 응답 확인 로그
      if (response.status === 200) {
        const memberId = response.data.memberId; // 서버 응답에서 memberId 추출
        const token = response.data.token; // 서버 응답에서 토큰 추출
        localStorage.setItem('loggedIn', true); // 문자열로 저장
        commit('setLoginState', { isLoggedIn: true, memberId: memberId, token: token }); // 로그인 상태 설정
        await dispatch('fetchMemberInfo', memberId); // memberId 전달
      } else {
        console.error('axios 로그인 실패: ', response.data);
      }
    } catch (error) {
      console.error('axios 로그인 에러: ', error);
    }
  },
  async fetchMemberInfo({ state, commit }, memberId) {
    try {
      memberId = memberId || state.memberId;
      console.log('memberStore.js - Fetching member info for ID:', memberId); // 디버깅 로그
      const response = await axios.get('/members/findById', { 
        params: { memberId: memberId },
        headers: { Authorization: `Bearer ${state.token}` } // 각 요청에 토큰 설정
      });
      console.log('memberStore.js - 사용자 정보 응답:', response.data); // 디버깅 로그 추가
      if (response.status === 200) {
        const member = response.data.user;
        const isAdmin = member.memberLevel === 'ADMIN'; // 관리자 여부 확인
        console.log('memberStore.js - 관리자 여부 확인:', isAdmin); // 관리자 여부 로그 추가
        commit('setLoginState', { isLoggedIn: true, memberId: memberId, member: member, isAdmin: isAdmin });
      } else {
        commit('setLoginState', { isLoggedIn: false, memberId: null, member: null, isAdmin: false });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      commit('setLoginState', { isLoggedIn: false, memberId: null, member: null, isAdmin: false });
    }
  },
  async checkLoginStatus({ commit, dispatch }) {
    try {
      const response = await axios.get('/members/check-session', { withCredentials: true });
      console.log('세션 체크 응답:', response.data); // 디버깅 로그 추가
      if (response.status === 200) {
        const memberId = response.data.user.memberUniqueId; // 세션 체크 응답에서 memberUniqueId 추출
        const token = response.data.token; // 세션 체크 응답에서 토큰 추출
        commit('setLoginState', { isLoggedIn: true, memberId: memberId, token: token });
        await dispatch('fetchMemberInfo', memberId); // memberId 전달
      } else {
        commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
      }
    } catch (error) {
      console.error('checkLoginStatus 에러:', error);
      commit('setLoginState', { isLoggedIn: false, memberId: null, member: null });
    }
  },
  async logout({ commit, state }) {
    try {
      await axios.post('/members/logout', {}, { 
        withCredentials: true,
        headers: { Authorization: `Bearer ${state.token}` } // 로그아웃 요청에도 토큰 설정
      });
      commit('setLoginState', { isLoggedIn: false, memberId: null, member: null, isAdmin: false });
      localStorage.removeItem('loggedIn');
    } catch (error) {
      console.error('로그아웃 에러: ', error);
    }
  }
};

const getters = {
  getMemberId: (state) => {
    console.log('getMemberId getter:', state.member ? state.member.memberId : null); // 디버깅 로그
    return state.member ? state.member.memberId : null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
