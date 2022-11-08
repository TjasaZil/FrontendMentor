import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/routes/Home.vue"),
    },
    {
      path: "/newbie-challenges",
      component: () => import("@/routes/NewbiePage.vue"),
    },
    {
      path: "/nft-preview-card",
      component: () => import("@/routes/NewbieChallenges/NFTPreviewCard.vue"),
    },
    {
      path: "/qr-code-component",
      component: () => import("@/routes/NewbieChallenges/QRCodeComponent.vue"),
    },
    {
      path: "/ping-comming-soon",
      component: () => import("@/routes/NewbieChallenges/PingCommingSoon.vue"),
    },
    {
      path: "/profile-card-component",
      component: () =>
        import("@/routes/NewbieChallenges/ProfileCardComponent.vue"),
    },
    {
      path: "/product-preview-card-component",
      component: () =>
        import("@/routes/NewbieChallenges/ProductPreviewCardComponent.vue"),
    },
    {
      path: "/interactive-rating-component",
      component: () =>
        import("@/routes/NewbieChallenges/InteractiveRatingComponent.vue"),
    },
    {
      path: "/order-summary-component",
      component: () =>
        import("@/routes/NewbieChallenges/OrderSummaryComponent.vue"),
    },
    {
      path: "/single-price-grid",
      component: () => import("@/routes/NewbieChallenges/SinglePriceGrid.vue"),
    },
    {
      path: "/junior-challenges",
      component: () => import("@/routes/JuniorPage.vue"),
    },
    {
      path: "/Intermediate-challenges",
      component: () => import("@/routes/IntermediatePage.vue"),
    },
  ],
});

export default router;
