<template>
  <section
    class="w-full h-16 absolute top-0 left-0 bg-slate-800 text-slate-100"
  >
    <div class="w-full h-12 flex justify-between items-center mx-auto">
      <h1 class="ml-5">My Frontend Mentor Challenges</h1>
      <HamburgerComponent data-testid="hamburger-component-test" />
      <ul
        class="hidden lg:visible pr-4 lg:flex lg:justify-between lg:items-center"
      >
        <li v-for="text in texts" :key="text">
          <router-link :to="text.url">{{ text.text }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import HamburgerComponent from "./HamburgerComponent.vue";
export default {
  name: "Navigation",
  components: { HamburgerComponent },
  data() {
    return {
      open: false,
      texts: [
        { text: "home", url: "/" },
        { text: "newbie", url: "/newbie-challenges" },
        { text: "junior", url: "/junior-challenges" },
      ],
    };
  },
};
</script>

<style scoped>
li {
  @apply pr-4;
}
</style>
