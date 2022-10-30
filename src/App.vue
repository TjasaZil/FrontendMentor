<template>
  <section>
    <HamburgerComponent />
    <router-view />
  </section>
</template>

<script>
import HamburgerComponent from "@/components/Shared/Navigation/HamburgerComponent.vue";
export default {
  name: "App",
  components: { HamburgerComponent },
};
</script>

<style></style>
