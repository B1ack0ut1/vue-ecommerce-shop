<template>
  <div
    class="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500"
  >
    <div class="w-full min-h-[150px] flex items-center gap-x-4">
      <!-- image -->
      <RouterLink :to="{ name: 'ProductDetails', params: { id: cartItem.id } }">
        <img class="max-w-[80px]" :src="cartItem.image" :alt="alt" />
      </RouterLink>
      <!-- title & remove icon -->
      <div class="w-full flex flex-col">
        <div class="flex justify-between mb-2">
          <RouterLink
            :to="{ name: 'ProductDetails', params: { id: cartItem.id } }"
            class="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
          >
            {{ cartItem.title }}
          </RouterLink>
          <div
            class="text-xl cursor-pointer"
            @click="cartStore.removeFromCart(cartItem.id)"
          >
            <font-awesome-icon icon="xmark" />
          </div>
        </div>
        <div class="flex gap-x-2 h-[36px] text-sm">
          <!-- quantity -->
          <div
            class="flex w-[108px] items-center h-full border text-primary font-medium"
          >
            <!-- minus icon -->
            <div
              class="flex-1 h-full flex justify-center items-center cursor-pointer"
              @click="cartStore.decreaseAmount(cartItem.id)"
            >
              <font-awesome-icon icon="minus" />
            </div>
            <div
              class="flex-1 h-full flex justify-center items-center border-l border-r"
            >
              {{ cartItem.amount }}
            </div>
            <!-- add icon -->
            <div
              class="flex-1 h-full flex justify-center items-center cursor-pointer"
              @click="cartStore.increaseAmount(cartItem.id)"
            >
              <font-awesome-icon icon="plus" />
            </div>
          </div>
          <!-- item price -->
          <div class="flex-1 flex items-center justify-around">
            $ {{ itemPrice }}
          </div>
          <!-- final price -->
          <div
            class="flex-1 flex justify-end items-center text-primary font-medium"
          >
            $ {{ finalPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

const props = defineProps({
  cartItem: Object,
});

const cartStore = useCartStore();

const alt = computed(() => "Image of " + props.cartItem.image);

const itemPrice = computed(() => parseFloat(props.cartItem.price).toFixed(2));
const finalPrice = computed(() =>
  parseFloat(props.cartItem.price * props.cartItem.amount).toFixed(2)
);
</script>
