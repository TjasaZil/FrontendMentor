<template>
  <section class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen">
    <IntroText
      data-testid="introtext-component-test"
      heading="newbie challenges"
      paragraph="This page holds all of my finished newbie challenges."
    />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
export default {
  name: "NewbiePage",
  components: { IntroText },
};
</script>

<style></style>
