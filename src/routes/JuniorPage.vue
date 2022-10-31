<template>
  <section class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen">
    <IntroText
      data-testid="introtext-component-test"
      heading="junior challenges"
      paragraph="This page holds all of my finished junior challenges."
    />
    <section
      class="mt-16 w-5/6 mx-auto flex flex-wrap justify-around items-center"
    >
      <Container
        :image="TestImage"
        alt="test image"
        heading="this is a test heading"
        paragraph="test paragraph"
      />
    </section>
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Container from "@/components/Shared/Container.vue";
import TestImage from "@/assets/test.jpg";
export default {
  name: "NewbiePage",
  components: { IntroText, Container },
  data() {
    return {
      TestImage,
    };
  },
};
</script>

<style></style>
