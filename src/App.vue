<template>
  <section class="bg-slate-700 text-slate-200">
    <Navigation />
    <router-view />
  </section>
</template>

<script>
import Navigation from "./components/Shared/Navigation/Navigation.vue";
export default {
  name: "App",
  components: { Navigation },
};
</script>

<style></style>
