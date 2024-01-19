<template>
  <section>
    <div class="container mx-auto bg-slate-400">
      <div v-for="product in filteredProducts">
        <div>{{ product.title }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFetch } from "@vueuse/core";

import { useProducts } from "../composables/products";

const { isFetching, error, products } = await useProducts();

const filteredProducts = products.value.filter((item) => {
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
  );
});
</script>
