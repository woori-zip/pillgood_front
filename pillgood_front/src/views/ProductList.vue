<template>
    <div class="main-container">
      <div class="box-container box-shadow">
        <h2 class="page-title">상품 목록</h2>
        <table class="product-table">
          <thead>
            <tr>
              <th>상품 ID</th>
              <th>이미지</th>
              <th>상품 이름</th>
              <th>가격</th>
              <th>재고</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.productId">
              <td>{{ product.productId }}</td>
              <td><img :src="product.productImage" alt="Product Image" class="product-image" /></td>
              <td>{{ product.productName }}</td>
              <td>{{ product.price }}원</td>
              <td>{{ product.stock }}</td>
              <td><button @click="viewProduct(product.productId)" class="btn btn-view">보기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '../assets/styles.css';
  
  export default {
    name: 'ProductListPage',
    data() {
      return {
        products: []
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:9095/products/list'); // 서버 주소와 엔드포인트 확인
          this.products = response.data;
          console.log('Fetched products:', this.products); // 디버깅 로그 추가
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      viewProduct(productId) {
        this.$router.push({ name: 'ProductDetail', params: { id: productId } });
      }
    },
    created() {
      this.fetchProducts();
    }
  };
  </script>
  
  <style scoped>
  
  .product-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .product-table th, .product-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .product-table th {
    background-color: #f1f1f1;
  }
  
  .product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .btn-view {
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-view:hover {
    background-color: #4cae4c;
  }
  </style>
  