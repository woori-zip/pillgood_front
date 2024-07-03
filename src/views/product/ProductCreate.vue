<template>
  <div class="main-container">
    <h1 class="text-melon">상품등록</h1>
    <form @submit.prevent="handleCreateProduct">
      <table>
        <tr>
          <td>Product Name:</td>
          <td><input v-model="product.productName" type="text" required /></td>
        </tr>
        <tr>
          <td>Nutrient:</td>
          <td>
            <select v-model="product.nutrientId">
              <option :value="null" selected>선택 안 함</option>
              <option v-for="nutrient in nutrients" :key="nutrient.nutrientId" :value="nutrient.nutrientId">
                {{ nutrient.nutrientName }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Price:</td>
          <td><input v-model="product.price" type="number" required /></td>
        </tr>
        <tr>
          <td>Stock:</td>
          <td><input v-model="product.stock" type="number" required /></td>
        </tr>
        <tr>
          <td>Target:</td>
          <td>
            <select v-model="product.target" required>
              <option value="공통">공통</option>
              <option value="여성">여성</option>
              <option value="남성">남성</option>
            </select>
          </td>
        </tr>
      </table>
      <div class="btn-container">
        <button type="submit" class="btn btn-green" style="width: 400px;">Create Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductManage',
  data() {
    return {
      product: {
        productName: '',
        nutrientId: null, // 초기값 설정
        price: '',
        stock: '',
        target: '공통' // 초기값 설정
      }
    };
  },
  created() {
    console.log('ProductCreate 컴포넌트 호출');
    this.fetchNutrients().then(() => {
      console.log('영양소 데이터 가져오기 완료');
    }).catch(error => {
      console.error('영양소 데이터 가져오기 실패:', error);
    });
  },
  computed: {
    ...mapGetters('nutrient', ['nutrients']),
    nutrientList() {
      console.log('nutrients 상태:', this.nutrients); // nutrients 상태 로그
      return this.nutrients;
    }
  },
  methods: {
    ...mapActions('nutrient', ['fetchNutrients']),
    ...mapActions('product', ['createProduct']),
    async handleCreateProduct() {
      try {
        await this.createProduct(this.product);
        console.log('제품 등록 완료');
        this.resetForm();
      } catch (error) {
        console.error('제품 등록 실패:', error);
      }
    },
    resetForm() {
      this.product = {
        productName: '',
        nutrientId: null,
        price: '',
        stock: '',
        target: '공통'
      };
    }
  }
};
</script>
