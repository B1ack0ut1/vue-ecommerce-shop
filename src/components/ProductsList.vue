<template>
  <div v-for="product in products">
    <div>{{ product.title }}</div>
  </div>
  <div>ProductsListComponent</div>
</template>

<script setup>
import { useFetch } from "@vueuse/core";

// import { useProductsStore } from "@/stores/products";

// const { isFetching, error, products } = await useProductsStore();

const { isFetching, error, data } = await useFetch(
  "https://fakestoreapi.com/products"
);

const products = await JSON.parse(data.value);

console.log(products);
</script>
