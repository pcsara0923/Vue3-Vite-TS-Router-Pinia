
<script setup lang="ts">
import { useProductStore } from "@/stores/counter.ts"; 
const productStore = useProductStore(); 
</script>

<template>
  <main>
    <h2 class="intro" style="text-align: center">商城</h2>
    <div class="product-container">
      <div
        v-for="(product, i) in productStore.products"
        :key="i"
        class="product-card"
      >
        <div class="product-image">
          <img :src="product.image" class="image" />
        </div>
        <div class="product-details">
          <h3>{{ product.title }}</h3>
          <p class="price">$ {{ product.price }}</p>
          <button @click="productStore.addIntoCart(product)" class="add-button">加入購物車</button>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
.product-container {
  margin: 20px;
  display: flex;
  justify-content: center;
}

.product-card {
  margin: 10px;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.image {
  width: 100%;
  display: block;
}

.price {
  font-size: 18px;
  margin: 0;
}

.add-button {
  padding: 5px;
  min-height: auto;
  background-color:#0051BA;
  color: white;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #FFDA1A;
  color: black;
  border: 2px solid #0051BA;
}
</style>
