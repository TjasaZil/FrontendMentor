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
      path: "/results-summary-component",
      component: () =>
        import("@/routes/NewbieChallenges/ResultsSummaryComponent"),
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
      path: "/meet-landing-page",
      component: () => import("@/routes/NewbieChallenges/MeetLandingPage.vue"),
    },
    {
      path: "/junior-challenges",
      component: () => import("@/routes/JuniorPage.vue"),
    },
    {
      path: "/advice-generator",
      component: () => import("@/routes/JuniorChallenges/AdviceGenerator.vue"),
    },
    {
      path: "/news-homepage",
      component: () => import("@/routes/JuniorChallenges/NewsHomepage.vue"),
    },
    {
      path: "/coding-bootcamp-testimonials",
      component: () =>
        import("@/routes/JuniorChallenges/CodingBootcampTestimonial.vue"),
    },
    {
      path: "/github-user-search",
      component: () => import("@/routes/JuniorChallenges/GithubSearch.vue"),
    },
    {
      path: "/Intermediate-challenges",
      component: () => import("@/routes/IntermediatePage.vue"),
    },
    {
      path: "/dictionary-web-app",
      component: () =>
        import("@/routes/IntermediateChallenges/DictionaryWebApp.vue"),
    },
    {
      path: "/ip-address-tracker",
      component: () => import("@/routes/IntermediateChallenges/IPtracker.vue"),
    },
    {
      path: "/password-generator-app",
      component: () =>
        import("@/routes/IntermediateChallenges/PasswordGenerator.vue"),
    },
  ],
});

export default router;
