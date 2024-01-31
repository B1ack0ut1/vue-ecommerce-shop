import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetailsView from "../views/ProductDetailsView.vue";

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
      component: ProductDetailsView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // May add product name to document title
  next();
});

export default router;
