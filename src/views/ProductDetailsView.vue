<template>
  <Suspense>
    <ProductDetails />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import ProductDetails from "@/components/ProductDetails.vue";
</script>
