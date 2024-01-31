<template>
  <div v-if="product">
    <section class="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div class="container mx-auto">
        <!-- image & text wrapper -->
        <div class="flex flex-col lg:flex-row items-center">
          <!-- image -->
          <div class="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img class="max-w-[200px] lg:max-w-sm" :src="image" alt="" />
          </div>
          <!-- text -->
          <div class="flex-1 text-center lg:text-left">
            <h1
              class="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0"
            >
              {{ title }}
            </h1>
            <div class="text-xl text-red-500 font-medium mb-6">
              $ {{ price }}
            </div>
            <p class="mb-8">{{ description }}</p>
            <button
              class="bg-primary py-4 px-8 text-white"
              @click="cartStore.addToCart(product, id)"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <section class="h-screen flex justify-center items-center">
      Product doesn't exist...
    </section>
  </div>
</template>

<script setup>
import { useProducts } from "@/composables/products";
import { useCartStore } from "@/stores/cart";
import { useRoute } from "vue-router";

const route = useRoute();

const { isFetching, error, products } = await useProducts();

const cartStore = useCartStore();

const product = products.value.find((item) => {
  return item.id === parseInt(route.params.id);
});

const { title, price, description, image, id } = product;
</script>
