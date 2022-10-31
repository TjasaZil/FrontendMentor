<template>
  <section
    class="w-full h-16 tablet:h-20 laptopl:h-24 4kay:h-28 absolute top-0 left-0 bg-slate-800 text-slate-100"
  >
    <div
      class="w-full h-16 flex tablet:h-20 laptopl:h-24 4kay:h-28 justify-between items-center mx-auto"
    >
      <h1 class="ml-5 tablet:text-2xl 4kay:text-4xl">
        My Frontend Mentor Challenges
      </h1>
      <HamburgerComponent data-testid="hamburger-component-test" />
      <ul
        class="hidden lg:visible pr-4 lg:flex lg:justify-between lg:items-center"
      >
        <li
          v-for="text in texts"
          :key="text"
          class="pr-6 uppercase text-lg hover:font-semibold hover:shadow-lg hover:opacity-70 4kay:text-2xl 4kay:pr-12"
        >
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

<style scoped></style>
