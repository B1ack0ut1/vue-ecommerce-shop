<template>
  <header class="bg-pink-200">
    <div>Header</div>
    <div @click="sidebarStore.toggleSidebar">
      <font-awesome-icon
        icon="bag-shopping"
        class="text-2xl text-slate-600 cursor-pointer relative"
      />
    </div>
  </header>
</template>

<script setup>
import { useSidebarStore } from "@/stores/sidebar";

const sidebarStore = useSidebarStore();
</script>
