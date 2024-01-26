<template>
  <div class="border border-[#e4e4e4] h-[300px] relative overflow-hidden group">
    <div class="w-full h-full flex justify-center">
      <!-- image -->
      <div class="w-[200px] mx-auto flex justify-center items-center">
        <img
          class="max-h-[160px] group-hover:scale-110 transition duration-300"
          :src="image"
          :alt="title"
        />
        <!-- buttons -->
        <div
          class="absolute top-6 -right-11 group-hover:right-5 p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button>
            <div
              class="flex justify-center items-center text-white w-12 h-12 bg-red-500 mb-2"
              @click="cartStore.addToCart(product, id)"
            >
              <font-awesome-icon icon="plus" />
            </div>
          </button>
          <RouterLink
            :to="{ name: 'ProductDetails', params: { id } }"
            class="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <font-awesome-icon icon="eye" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- category & title & price -->
  <div>
    <div class="text-sm capitalize text-gray-500 mb-1">{{ category }}</div>

    <RouterLink :to="{ name: 'ProductDetails', params: { id } }">
      <h2 class="font-semibold mb-1">{{ title }}</h2>
    </RouterLink>
    <div class="font-semibold">$ {{ price }}</div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

const { id, image, category, title, price } = props.product;
</script>
