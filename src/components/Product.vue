<template>
  <div
    class="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
  >
    <div class="w-full h-full flex justify-center">
      <!-- image -->
      <div class="w-[200px] mx-auto flex justify-center items-center">
        <img
          class="max-h-[160px] group-hover:scale-110 transition duration-300"
          :src="image"
          :alt="title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  product: Object,
});

const { id, image, category, title, price } = props.product;
</script>
