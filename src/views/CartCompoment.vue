<script setup lang="ts">
import { useProductStore } from "@/stores/counter.ts"; //引入stores
const productStore = useProductStore(); //使用
</script>

<template>
  <main>
    <h2 style="text-align: center">Shopping Cart</h2>
    <el-row
      v-if="productStore.cart.length > 0"
      style="margin: 20px; display: flex; justify-content: center"
    >
      <el-col
        v-for="(i, index) in productStore.cart"
        :key="index"
        :span="6"
        style="margin: 10px"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="i.image" class="image" />
          <div style="padding: 14px">
            <span>{{ i.title }}</span>
            <div class="bottom">
              <p class="time">$ {{ i.price }}</p>
              <el-button @click="productStore.removeFromCart(i)" class="button"
                >remove from cart</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3 v-else style="text-align: center; margin-top: 50px">購物車是空的!</h3>
  </main>
</template>