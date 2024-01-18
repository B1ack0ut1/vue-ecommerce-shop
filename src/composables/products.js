import { ref } from "vue";
import { useFetch } from "@vueuse/core";

export async function useProducts() {
  const products = ref();
  const { isFetching, error, data } = await useFetch(
    "https://fakestoreapi.com/products"
  );
  products.value = await JSON.parse(data.value);
  return { isFetching, error, products };
}
