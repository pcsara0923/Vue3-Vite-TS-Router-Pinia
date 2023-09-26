<script setup lang="ts">
// 引入 stores
import { useProductStore } from "@/stores/counter.ts"; 
// 使用
const productStore = useProductStore(); 
</script>

<template>
  <main>
    <h2 style="text-align: center">/購物車/</h2>
    <div v-if="productStore.cart.length > 0" class="cart-container">
      <div v-for="(item, index) in productStore.cart" :key="index" class="cart-item">
        <div class="cart-item-image">
          <img :src="item.image" class="image" />
        </div>
        <div class="cart-item-details">
          <h3>{{ item.title }}</h3>
          <p class="price">$ {{ item.price }}</p>
          <button @click="productStore.removeFromCart(item)" class="remove-button">刪除</button>
        </div>
      </div>
    </div>
    <h3 v-else style="text-align: center; margin-top: 50px">您的購物車裡什麼都沒有</h3>

  </main>
</template>


<style scoped>
.cart-container {
  margin: 20px;
  display: flex;
  justify-content: center;
  border:none;
}

.cart-item {
  margin: 10px;
  display: flex;
  align-items: center;
  /* border: 1px solid #ccc; */
  padding: 10px;
}

.cart-item-image {
  /* flex: 1; */
  display:flex;
}

.cart-item-details {
  flex: 3;
  
}

.image {
  width: 100%;
}

.price {
  font-size: 18px;
  margin: 0;
}

.remove-button {
  background-color: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius:10px;
  border: none;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #ff3333;
}
</style>

 

