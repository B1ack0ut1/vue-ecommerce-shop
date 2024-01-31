<template>
  <main>
    <Suspense>
      <Home />
      <template #fallback> Loading... </template>
    </Suspense>
  </main>
</template>

<script setup>
import Home from "@/components/Home.vue";
</script>
