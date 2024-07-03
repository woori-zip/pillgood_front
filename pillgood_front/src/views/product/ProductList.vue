<template>
  <div class="main-container box-shadow">
    <h1 class="text-melon">제품 목록</h1>
    <div style="display: flex; align-items: center">
      <select style="width:150px;" v-model="selectedFilter">
        <option value="">- 선택 -</option>
        <option value="productName">제품명</option>
        <option value="nutrient">성분</option>
        <option value="target">대상</option>
      </select>
      <input v-model="searchQuery" :disabled="!selectedFilter" placeholder="검색어를 입력하세요">
      <button class="small-btn" @click="resetFilters">초기화</button>
      <router-link class="small-btn" to="/productcreate">+제품 등록</router-link>
    </div>
    <table class="line-table">
      <thead>
        <tr>
          <th>제품명</th>
          <th>성분</th>
          <th>가격</th>
          <th>재고</th>
          <th>대상</th>
          <th>상태</th>
          <th v-if="isAdmin">관리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.productId">
          <td>{{ product.productName }}</td>
          <td>{{ getNutrientName(product.nutrientId) }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.target }}</td>
          <td>{{ product.active ? '활성' : '비활성' }}</td>
          <td v-if="isAdmin">
            <select v-model="product.active" style="width:150px;">
              <option :value="true">활성</option>
              <option :value="false">비활성</option>
            </select>
            <button class="small-btn" @click="confirmUpdateStatus(product)">확인</button>
            <button class="small-btn" @click="editProduct(product)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      selectedFilter: '',
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters('product', ['products']),
    ...mapGetters('nutrient', ['nutrients']),
    ...mapState('member', ['isAdmin']),
    // 제품 검색
    filteredProducts() {
      // selectedFilter와 searchQuery가 둘 다 없으면 전체 제품 목록 반환
      if (!this.selectedFilter && !this.searchQuery) {
        return this.products;
      }

      const query = this.searchQuery.toLowerCase();

      return this.products.filter(product => {
        if (this.selectedFilter === 'productName') {
          return product.productName && product.productName.toLowerCase().includes(query);
        } else if (this.selectedFilter === 'nutrient') {
          const nutrientName = this.getNutrientName(product.nutrientId);
          return nutrientName && nutrientName.toLowerCase().includes(query);
        } else if (this.selectedFilter === 'target') {
          return product.target && product.target.toLowerCase().includes(query);
        }
        return true;
      });
    }
  },
  async created() {
    await this.checkLoginStatus(); // 로그인 상태를 먼저 확인하여 Vuex 상태를 업데이트
    console.log('isAdmin after checkLoginStatus:', this.isAdmin);
    
    await this.fetchProducts(); // 관리자 여부와 관계없이 제품 목록을 로드
    await this.fetchNutrients();
  },
  methods: {
    ...mapActions('member', ['checkLoginStatus']),
    ...mapActions('product', ['fetchProducts', 'updateProductStatus']),
    ...mapActions('nutrient', ['fetchNutrients']),
    getNutrientName(nutrientId) {
      const nutrient = this.nutrients.find(n => n.nutrientId === nutrientId);
      return nutrient ? nutrient.nutrientName : 'Unknown';
    },
    editProduct(product) {
      console.log('Edit product:', product);
      this.$router.push({ name: 'ProductEdit', params: { productId: product.productId } });
    },
    async confirmUpdateStatus(product) {
      console.log('확인 버튼 클릭 - 업데이트할 제품:', product);
      try {
        const response = await this.updateProductStatus({ productId: product.productId, active: product.active });
        console.log('상태 변경할 제품:', product);
        console.log('서버 응답:', response); // 서버 응답 로그 추가
        if (response && response.status === 200) {
          console.log('제품 상태 업데이트 완료:', product);
          alert('제품 상태가 업데이트되었습니다.');
        } else {
          console.error('제품 상태 업데이트 실패:', response);
          alert('제품 상태 업데이트에 실패했습니다.');
        }
      } catch (error) {
        console.error('상태 변경 실패:', error);
        alert('상태 변경에 실패했습니다.');
      }
    },
    resetFilters() {
      this.selectedFilter = '';
      this.searchQuery = '';
    }
  }
};
</script>


<style>
.line-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.line-table thead {
  background-color: #EBF7F0;
}

.line-table th, td {
  padding: 2px 2px 2px 2px;
  border-bottom: 1px solid gray;
  align-items: center; /* 세로 중앙 정렬 */
}

.line-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.small-btn {
  display: inline-block;
  white-space: nowrap;
  height: 100%;
  border: 0;
  background: #D5D9C4;
  border-radius: 5px;
  margin-right: 5px;
  text-decoration-line: none;
  color: black;
  padding: 2px;
}

.small-btn:hover {
  color:black;
  background: #C6EDC2;
}
</style>
