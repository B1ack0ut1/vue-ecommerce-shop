<template>
  <div
    class="w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"
    :class="sidebarState"
  >
    <div class="flex items-center justify-between py-6 border-b">
      <div class="uppercase text-sm font-semibold">Shopping Bag (0)</div>
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
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import CartItem from "./CartItem.vue";
import { useSidebarStore } from "@/stores/sidebar";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const sidebarStore = useSidebarStore();
const cartStore = useCartStore();

const sidebarState = computed(() => {
  return sidebarStore.isOpen ? "right-0" : "-right-full";
});
</script>
