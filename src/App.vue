<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Header />
  <Sidebar />
  <RouterView />
  <Footer />
</template>
