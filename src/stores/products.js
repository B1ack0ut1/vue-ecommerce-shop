import { ref, computed } from "vue";
import { useFetch } from "@vueuse/core";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", async () => {
  const { isFetching, error, data } = await useFetch(
    "https://fakestoreapi.com/products"
  );
  const products = await JSON.parse(data.value);

  return { isFetching, error, products };
});
