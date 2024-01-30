import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

export function useItems() {
  const cartStore = useCartStore();

  const itemAmount = computed(() => {
    return cartStore.cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  });

  return { itemAmount };
}
