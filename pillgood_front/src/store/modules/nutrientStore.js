import axios from '../../axios'; // 설정된 axios 인스턴스 불러오기

const state = {
  nutrients: []
};

const mutations = {
  setNutrients(state, nutrients) {
    state.nutrients = nutrients;
  }
};

const actions = {
  async fetchNutrients({ commit }) {
    try {
      const response = await axios.get('/admin/nutrients/list'); // 서버 엔드포인트 URL을 사용하여 영양소 데이터 가져오기
      console.log('영양소 API 응답:', response.data); // 응답 데이터 로그
      if (response.status === 200) {
        commit('setNutrients', response.data);
        console.log('영양소 데이터 가져오기 성공:', response.data);
      } else {
        console.error('영양소 데이터 가져오기 실패:', response.data);
        throw new Error('영양소 데이터 가져오기 실패');
      }
    } catch (error) {
      console.error('영양소 데이터 가져오기 에러:', error);
      throw error;
    }
  }
};

const getters = {
  nutrients: state => state.nutrients
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
