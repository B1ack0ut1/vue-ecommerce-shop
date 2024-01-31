<template>
  <div>Product Details Page</div>
  <div>{{ $route.params.id }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
