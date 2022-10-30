<template>
  <section class="bg-slate-700 text-slate-200">
    <Navigation />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Navigation from "./components/Shared/Navigation/Navigation.vue";
import Footer from "./components/Shared/Footer/Footer.vue";
export default {
  name: "App",
  components: { Navigation, Footer },
};
</script>

<style></style>
