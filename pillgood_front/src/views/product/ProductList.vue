<template>
  <div class="main-container">
    <h1 class="text-melon">제품 목록</h1>
    <table class="line-table">
      <thead>
        <tr>
          <th>제품명</th>
          <th>성분</th>
          <th>가격</th>
          <th>재고</th>
          <th>대상</th>
          <th>상태</th>
          <th colspan='2'>관리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.productId">
          <td>{{ product.productName }}</td>
          <td>{{ getNutrientName(product.nutrientId) }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.target }}</td>
          <!-- <td>{{ product.active ? '활성' : '비활성' }}</td> -->
          <td style="display:flex;">
            <select v-model="product.active">
              <option :value="true">활성</option>
              <option :value="false">비활성</option>
            </select>
            <!-- <button class="table-btn" @click="confirmUpdateStatus(product)">확인</button> -->
          </td>
          <td>
            <button class="table-btn" @click="editProduct(product)">Edit</button>
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
  computed: {
    ...mapGetters('product', ['products']),
    ...mapGetters('nutrient', ['nutrients']),
    ...mapState('member', ['isAdmin']),
    filteredProducts() {
      // 관리자가 아닌 경우 active 상태인 제품만 반환
      return this.isAdmin ? this.products : this.products.filter(product => product.active)
    }
  },
  async created() {
    await this.checkLoginStatus(); // 로그인 상태를 먼저 확인하여 Vuex 상태를 업데이트
    console.log('isAdmin after checkLoginStatus:', this.isAdmin);
    
    await this.fetchProducts(); // 관리자 여부와 관계없이 제품 목록을 로드
    await this.fetchNutrients();
    // console.log('제품 목록 로드 완료:', this.products);
    // console.log('영양소 목록 로드 완료:', this.nutrients);
  },
  methods: {
    ...mapActions('member', ['checkLoginStatus']),
    ...mapActions('product', ['fetchProducts', 'updateProductStatus']),
    ...mapActions('nutrient', ['fetchNutrients']),
    getNutrientName(nutrientId) {
      const nutrient = this.nutrients.find(n => n.nutrientId === nutrientId);
      return nutrient ? nutrient.name : 'Unknown';
    },
    editProduct(product) {
      console.log('Edit product:', product);
      this.$router.push({ name: 'ProductEdit', params: { productId: product.productId } });
    },
    async confirmUpdateStatus(product) {
      console.log('확인 버튼 클릭 - 업데이트할 제품:', product);
      try {
        await this.updateProductStatus({ productId: product.productId, active: product.active });
        console.log('제품 상태 업데이트 완료:', product);
        alert('제품 상태가 업데이트되었습니다.');
      } catch (error) {
        console.error('제품 상태 업데이트 실패:', error);
        alert('제품 상태 업데이트에 실패했습니다.');
      }
    }
  },
  watch: {
    isAdmin(newVal) {
      console.log('isAdmin changed:', newVal);
    },
    products(newProducts) {
      console.log('제품 목록 변경:', newProducts);
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

.line-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

td button {
  display: inline-block;
  white-space: nowrap;
  height: 100%;
  border: 0;
  background: #D5D9C4;
  border-radius: 5px;
}
</style>