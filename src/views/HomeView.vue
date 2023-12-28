<script setup>
import ProductsList from "@/components/ProductsList.vue";
</script>

<template>
  <main>
    <Suspense>
      <ProductsList />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>
