<template>
  <section class="lg:hidden">
    <img
      src="@/assets/hamburger.png"
      class="w-7 h-7 mr-5"
      alt="Hamburger icon"
      @click="openMenu"
    />
    <ul
      v-if="this.open"
      class="bg-slate-800 w-full space-y-2 bg-dark flex flex-col text-center items-center justify-center mx-auto fixed left-0 top-12"
    >
      <li v-for="text in texts" :key="text">
        <router-link :to="text.url">{{ text.text }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "HamburgerComponent",
  data() {
    return {
      open: false,
      texts: [
        { text: "home", url: "/" },
        { text: "newbie challenges", url: "/newbie-challenges" },
        { text: "junior challenges", url: "/junior-challenges" },
      ],
    };
  },
  methods: {
    openMenu() {
      /* if (!this.open) {
        this.open = true;
      } else {
        this.open = false;
      }*/
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
li {
  @apply uppercase p-4 w-full hover:opacity-70 mx-auto;
}
</style>
