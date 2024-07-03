import axios from '../../axios';

const state = {
  products: []
};

const mutations = {
  addProduct(state, product) {
    state.products.push(product);
  },
  setProducts(state, products) {
    state.products = products;
  },
  updateProductStatus(state, { productId, active }) {
    const product = state.products.find(product => product.productId === productId);
    if (product) {
      product.active = active;
    }
  }
};

const actions = {
  async createProduct({ commit }, product) {
    const response = await axios.post('/admin/products/create', product);
    if (response.status === 201) {
      commit('addProduct', response.data);
    } else {
      throw new Error('제품 등록 실패');
    }
  },
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get('/admin/products/list');
      if (response.status === 200) {
        const products = Array.isArray(response.data) && Array.isArray(response.data[0]) ? response.data[0] : response.data;
        commit('setProducts', products);
      } else {
        throw new Error('제품 조회 실패');
      }
    } catch (error) {
      console.error('제품을 불러오는 데 실패했습니다. ', error);
      throw error;
    }
  },
  async updateProductStatus({ commit }, { productId, active }) {
    try {
      const response = await axios.put(`/admin/products/${productId}/status`, { active });
      console.log('서버 응답:', response); // 서버 응답 로그 추가
      if (response && response.status === 200) {
        commit('updateProductStatus', { productId, active });
        return response; // 응답을 반환
      } else {
        console.error('제품 상태 업데이트 실패:', response);
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
