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
      component: () => import("@/routes/NewbieChallenges.vue"),
    },
    {
      path: "/junior-challenges",
      component: () => import("@/routes/JuniorChallenges.vue"),
    },
    {
      path: "/Intermediate-challenges",
      component: () => import("@/routes/IntermediateChallenges.vue"),
    },
  ],
});

export default router;
