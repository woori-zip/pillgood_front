import axios from '../../axios'; // 설정된 axios 인스턴스 불러오기

const state = {
  products: []
};

const mutations = {
  addProduct(state, product) {
    state.products.push(product);
    // console.log('Vuex 상태에 저장된 제품 목록:', state.products); // 상태 로그 추가
  },
  setProducts(state, products) {
    state.products = products;
    // console.log('Vuex 상태에 저장된 제품 목록:', state.products); // 상태 로그 추가
  },
  updateProductStatus(state, { productId, active }) {
    const product = state.products.find(p => p.productId === productId);
    if (product) {
      product.active = active;
    }
  }
};

const actions = {
  async createProduct({ commit }, product) {
    const response = await axios.post('/products', product); // 서버 엔드포인트 URL을 사용하여 제품 생성
    if (response.status === 201) {
      commit('addProduct', response.data);
    } else {
      throw new Error('제품 등록 실패');
    }
  },
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('/admin/products/list'); // 서버 엔드포인트 URL을 사용하여 제품 목록 조회
      if (response.status === 200) {
        const products = Array.isArray(response.data) && Array.isArray(response.data[0]) ? response.data[0] : response.data;
        commit('setProducts', products); // 제품 목록을 상태에 저장
      } else {
        throw new Error('제품 조회 실패');
      }
    } catch (error) {
      console.log('제품을 불러오는 데 실패했습니다. ', error)
      throw error;
    }
  },
  async updateProductStatus({ commit }, { productId, active }) {
    try {
      const response = await axios.put(`/admin/products/${productId}/status`, { active }); // 프록시를 사용하여 API 요청
      if (response.status === 200) {
        commit('updateProductStatus', { productId, active });
        console.log('제품 상태 업데이트 성공:', response.data);
      } else {
        console.error('제품 상태 업데이트 실패:', response.data);
        throw new Error('제품 상태 업데이트 실패');
      }
    } catch (error) {
      console.error('제품 상태 업데이트 에러:', error);
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
