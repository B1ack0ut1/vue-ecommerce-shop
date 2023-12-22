import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "ProductDetails",
      component: ProductDetails,
      props: true,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // May add product name to document title
});

export default router;
