<script setup>
import ProductsList from "@/components/ProductsList.vue";
import Home from "@/components/Home.vue";
</script>

<template>
  <main>
    <Suspense>
      <Home />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>
