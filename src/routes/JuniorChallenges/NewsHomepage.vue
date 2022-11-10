<template>
  <section
    class="main flex flex-col justify-center items-center laptop:h-screen w-full bg-news-off-white"
  >
    <!-- NAVIGATION -->
    <div
      class="absolute top-0 left-0 flex flex-row justify-between w-full items-center px-3"
    >
      <!-- ICON -->
      <img
        src="@/assets/NewsHomepage/logo.svg"
        alt="logo icon"
        data-testid="logo-icon-test"
      />
      <!-- MOBILE MENU -->
      <div>
        <img
          v-if="!this.open"
          src="@/assets/NewsHomepage/icon-menu.svg"
          alt="menu icon"
          @click="openMenu()"
          data-testid="menu-icon-test"
        />
        <img
          v-else
          src="@/assets/NewsHomepage/icon-menu-close.svg"
          alt="close menu icon"
          @click="openMenu()"
          data-testid="closed-icon-test"
        />
        <ul v-if="this.open">
          <li v-for="nav in navs" :key="nav">{{ nav }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsHomepage",
  data() {
    return {
      open: false,
      navs: ["home", "new", "popular", "trending", "categories"],
    };
  },

  methods: {
    openMenu() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap");
.main {
  font-family: "Inter", sans-serif;
}
</style>
