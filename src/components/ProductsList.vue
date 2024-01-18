<template>
  <div v-for="product in products">
    <div>{{ product.title }}</div>
  </div>
  <div>ProductsListComponent</div>
</template>

<script setup>
import { useFetch } from "@vueuse/core";

import { useProducts } from "../composables/products";

const { isFetching, error, products } = await useProducts();
</script>
