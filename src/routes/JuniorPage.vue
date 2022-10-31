<template>
  <section class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen">
    <IntroText
      data-testid="introtext-component-test"
      heading="junior challenges"
      paragraph="This page holds all of my finished junior challenges."
    />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
export default {
  name: "JuniorPage",
  components: { IntroText },
};
</script>

<style></style>
