
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useProductStore } from "@/stores/counter.ts"; //引入stores
const productStore = useProductStore(); //使用
</script>

<template>
  <nav class="custom-menu">
    <ul>
      <li>
        <router-link to="/">首頁</router-link>
      </li>
      <li>
        <router-link to="/cart">購物車 ({{ productStore.total }})</router-link>
      </li>
    </ul>
  </nav>
  <div><RouterView /></div>
</template>

<style scoped>
.custom-menu {
  background-color: #0051BA;
  color: #fff;
}

.custom-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.custom-menu ul li {
   margin-right: 50px; 
}

.custom-menu ul li:last-child {
  margin-right: 0;
}

.custom-menu a {
  text-decoration: none;
  color: #fff;
}

.custom-menu a:hover {
  color: #FFDA1A;
}
</style>
