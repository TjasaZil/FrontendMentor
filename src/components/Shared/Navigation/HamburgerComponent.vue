<template>
  <section>
    <img
      src="@/assets/hamburger.png"
      class="w-7 h-7"
      alt="Hamburger icon"
      @click="openMenu"
    />
    <ul v-if="this.open">
      <li>home</li>
      <li>newbie challenges</li>
      <li>junior challenges</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "HamburgerComponent",
  data() {
    return {
      open: false,
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

<style></style>
