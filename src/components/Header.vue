<template>
  <div>Header</div>
  <div @click="sidebarStore.toggleSidebar">
    <font-awesome-icon icon="bag-shopping" />
  </div>
</template>

<script setup>
import { useSidebarStore } from "@/stores/sidebar";

const sidebarStore = useSidebarStore();
</script>
