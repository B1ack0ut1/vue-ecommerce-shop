<template>
  <div
    class="w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"
    :class="sidebarState"
  >
    <div class="flex items-center justify-between py-6 border-b">
      <div class="uppercase text-sm font-semibold">
        Shopping Bag ({{ items.itemAmount }})
      </div>
      <div
        @click="sidebarStore.handleClose"
        class="cursor-pointer w-8 h-8 flex justify-center items-center"
      >
        <font-awesome-icon icon="arrow-right" class="text-2xl" />
      </div>
    </div>
    <div v-for="cartItem in cartStore.cart">
      <CartItem :key="cartItem.id" :cartItem="cartItem" />
    </div>
    <div class="flex flex-col gap-y-3 py-4 mt-4">
      <div class="flex w-full justify-between items-center">
        <!-- total -->
        <div class="uppercase font-semibold">
          <span class="mr-2">Total:</span>$ {{ totalPrice }}
        </div>
        <!-- Clear cart icon -->
        <div
          class="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          @click="cartStore.clearCart"
        >
          <font-awesome-icon icon="trash" />
        </div>
      </div>
      <RouterLink
        to="/"
        class="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
      >
        View cart
      </RouterLink>
      <RouterLink
        to="/"
        class="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
      >
        Checkout
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import CartItem from "./CartItem.vue";
import { useSidebarStore } from "@/stores/sidebar";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import { useItems } from "@/composables/items";

const sidebarStore = useSidebarStore();
const cartStore = useCartStore();
const items = useItems();

const sidebarState = computed(() => {
  return sidebarStore.isOpen ? "right-0" : "-right-full";
});

const totalPrice = computed(() => {
  const rawTotalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.amount * item.price;
  }, 0);
  return rawTotalPrice.toFixed(2);
});
</script>
