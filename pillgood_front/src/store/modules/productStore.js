import axios from '../../axios'; // 설정된 axios 인스턴스 불러오기

const state = {
  products: []
};

const mutations = {
  addProduct(state, product) {
    state.products.push(product);
  }
};

const actions = {
  async createProduct({ commit }, product) {
    try {
      const response = await axios.post('/admin/products/create', product); // 서버 엔드포인트 URL을 사용하여 제품 생성
      if (response.status === 201) {
        commit('addProduct', response.data);
        console.log('제품 등록 성공:', response.data);
      } else {
        console.error('제품 등록 실패:', response.data);
        throw new Error('제품 등록 실패');
      }
    } catch (error) {
      console.error('제품 등록 에러:', error);
      throw error;
    }
  }
};

const getters = {
  products: state => state.products
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
