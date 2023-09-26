import { createRouter, createWebHistory } from "vue-router";
import ProductComponent from "@/views/ProductComponent.vue";
import CartComponent from "@/views/CartComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: ProductComponent },
    { path: "/cart", name: "cart", component: CartComponent },
  ],
});

export default router;