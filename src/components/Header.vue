<template>
  <header class="sticky top-0 w-full z-10 transition-all" :class="headerState">
    <div class="container mx-auto flex items-center justify-between h-full">
      <RouterLink to="/">
        <div>
          <img class="w-[40px]" src="@/assets/img/logo.svg" alt="" />
        </div>
      </RouterLink>
      <!-- Sidebar -->
      <div
        @click="sidebarStore.toggleSidebar"
        class="text-slate-600 cursor-pointer relative max-w-[50px]"
      >
        <font-awesome-icon icon="bag-shopping" class="text-2xl" />
        <div
          class="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] rounded-full flex justify-center items-center"
        >
          {{ items.itemAmount }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useSidebarStore } from "@/stores/sidebar";
import { useCartStore } from "@/stores/cart";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useItems } from "@/composables/items";

const sidebarStore = useSidebarStore();
const items = useItems();

const isActive = ref(false);

const headerState = computed(() => {
  return isActive.value ? "bg-white py-4 shadow-md" : "bg-none py-6";
});

const scrollEffect = (e) => {
  if (window.scrollY > 60) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", scrollEffect);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollEffect);
});
</script>
