<template>
  <section class="py-16">
    <div class="container mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
      >
        <div v-for="product in filteredProducts" class="w-full">
          <Product :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Product from "./Product.vue";
import { useProducts } from "../composables/products";

const { isFetching, error, products } = await useProducts();

const filteredProducts = products.value.filter((item) => {
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
  );
});
</script>
