<template>
  <section>
    <section
      class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen text-slate-200"
    >
      <Navigation />
      <IntroText
        data-testid="introtext-component-test"
        heading="junior challenges"
        paragraph="This page holds all of my finished junior challenges."
      />
      <section
        class="mt-16 w-5/6 mx-auto flex flex-wrap justify-around items-center"
      >
        <!--      <Container
          :image="TestImage"
          alt="test image"
          heading="this is a test heading"
          paragraph="test paragraph"
        />
        <Container
          :image="TestImage"
          alt="test image"
          heading="this is a test heading"
          paragraph="test paragraph"
        />
        <Container
          :image="TestImage"
          alt="test image"
          heading="this is a test heading"
          paragraph="test paragraph"
        />
        <Container
          :image="TestImage"
          alt="test image"
          heading="this is a test heading"
          paragraph="test paragraph"
        />
        <Container
          :image="TestImage"
          alt="test image"
          heading="this is a test heading"
          paragraph="test paragraph"
        />-->
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
//import Container from "@/components/Shared/Container.vue";
import TestImage from "@/assets/test.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";
export default {
  name: "NewbiePage",
  components: { IntroText, Navigation, Footer },
  data() {
    return {
      TestImage,
    };
  },
};
</script>

<style></style>
