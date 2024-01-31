<template>
  <section
    class="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24"
  >
    <div class="container mx-auto flex justify-around h-full">
      <!-- text -->
      <div class="flex flex-col justify-center">
        <!-- pretitle -->
        <div class="font-semibold flex items-center uppercase">
          <span class="w-10 h-[2px] bg-red-500 mr-3"></span>
          New Trend
        </div>
        <h1 class="text-[70px] leading-[1.1] font-light mb-4">
          AUTUMN SALE STYLISH <br />
          <span class="font-semibold">WOMENS</span>
        </h1>
        <RouterLink
          to="/"
          class="self-start uppercase font-semibold border-b-2 border-primary"
        >
          Discover More
        </RouterLink>
      </div>
      <!-- image -->
      <div class="hidden lg:block">
        <img :src="WomanImg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Hero from "@/assets/img/bg_hero.svg";
import WomanImg from "@/assets/img/woman_hero.png";
import { RouterLink } from "vue-router";
</script>
