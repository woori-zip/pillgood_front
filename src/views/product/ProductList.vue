<template>
  <div class="main-container">
    <h1 class="text-melon">제품 목록</h1>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Nutrient</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.productId">
          <td>{{ product.productName }}</td>
          <td>{{ getNutrientName(product.nutrientId) }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.target }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapGetters('product', ['products']),
    ...mapGetters('nutrient', ['nutrients'])
  },
  methods: {
    ...mapActions('product', ['fetchProducts']),
    ...mapActions('nutrient', ['fetchNutrients']),
    getNutrientName(nutrientId) {
      const nutrient = this.nutrients.find(n => n.nutrientId === nutrientId);
      return nutrient ? nutrient.nutrientName : 'Unknown';
    }
  },
  created() {
    this.fetchProducts();
    this.fetchNutrients();
  }
};
</script>
