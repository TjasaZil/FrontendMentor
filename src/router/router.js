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
