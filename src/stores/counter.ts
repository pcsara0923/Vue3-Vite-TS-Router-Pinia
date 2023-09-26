import { defineStore } from "pinia";
import products from "@/data/products.json";
import { v4 as uuidv4 } from "uuid";

// 定義useCounterStore
export const useProductStore = defineStore("ProductStore", {
  //初始化cart&products
  state: () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    return {
      cart,
      products: products,
    };
  },
  getters: {
    total(): number {
      return this.cart.length;
    },
  },
  actions: {
    addIntoCart(i: any) {
      console.log(`${i.title}加入購物車`);
      const newProduct = { ...i }; // 複製一個新的商品物件
      newProduct.id = uuidv4();
      // console.log(i.id);
      this.cart.push(newProduct);
       // this.cart.push(i);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(i: any) {
     console.log(`${i.title}移除購物車`);
      console.log(`${i.id}`);
      //過濾購物車(要保留的)
      this.cart = this.cart.filter((j) => j.id != i.id);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
  },
});