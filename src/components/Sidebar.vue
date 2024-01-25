<template>
  <div
    class="w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]"
    :class="sidebarVisibility"
  >
    Sidebar
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import CartItem from "./CartItem.vue";
import { useSidebarStore } from "@/stores/sidebar";
import { computed } from "vue";

const sidebarStore = useSidebarStore();

const sidebarVisibility = computed(() => {
  return sidebarStore.isOpen ? "right-0" : "-right-full";
});
</script>
