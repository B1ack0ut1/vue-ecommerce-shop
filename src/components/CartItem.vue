<template>
  <div class="flex">
    <div class="w-full min-h-[150px] flex items-center gap-x-4">
      <!-- image -->
      <RouterLink :to="{ name: 'ProductDetails', params: { id } }">
        <img class="max-w-[80px]" :src="image" :alt="alt" />
      </RouterLink>
      <!-- title & remove icon -->
      <div class="w-full flex flex-col">
        <div class="flex justify-between mb-2">
          <RouterLink
            :to="{ name: 'ProductDetails', params: { id } }"
            class="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
          >
            {{ title }}
          </RouterLink>
          <div class="text-xl cursor-pointer">
            <font-awesome-icon icon="trash" />
          </div>
        </div>
      </div>
      <!-- quantity -->
      <div>
        <!-- minus icon -->
        <div>minus icon</div>
        <!-- add icon -->
        <div>add icon</div>
      </div>
      <!-- item price -->
      <div>item price</div>
      <!-- final price -->
      <div>final price</div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  cartItem: Object,
});

const { id, title, image, price, amount } = props.cartItem;

const alt = "Image of " + image;
</script>
