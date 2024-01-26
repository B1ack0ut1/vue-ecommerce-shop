import { ref, computed } from "vue";
import { useFetch } from "@vueuse/core";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const isOpen = ref(false);

  function handleClose() {
    isOpen.value = false;
  }
  function handleOpen() {
    isOpen.value = true;
  }
  function toggleSidebar() {
    isOpen.value = !isOpen.value;
  }
  return { isOpen, handleClose, handleOpen, toggleSidebar };
});
