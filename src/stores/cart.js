import { ref, computed, toRaw } from "vue";
import { useFetch } from "@vueuse/core";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };

    const cartData = toRaw(cart.value);

    const cartItem = cartData.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      cart.value = [...cartData].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
    } else {
      cart.value = [...cartData, newItem];
    }
  }

  return { cart, addToCart };
});
