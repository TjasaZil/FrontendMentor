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
        <Container
          :image="AdviceImage"
          alt="Advice Generator"
          heading="Advice Generator"
          router="/advice-generator"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="NewsImage"
          alt="News Homepage"
          heading="News Homepage"
          router="/news-homepage"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="BootcampImage"
          alt="Coding Bootcamp Testimonials"
          heading="Coding Bootcamp Testimonials"
          router="/coding-bootcamp-testimonials"
          x-intersect="$el.classList.add('swingIn')"
        />
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Container from "@/components/Shared/Container.vue";
import AdviceImage from "@/assets/AdviceGenerator/design/desktop-preview.jpg";
import NewsImage from "@/assets/NewsHomepage/design/desktop-preview.jpg";
import BootcampImage from "@/assets/CodingBootcampTestimonials/design/desktop-preview.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";
export default {
  name: "NewbiePage",
  components: { IntroText, Navigation, Footer, Container },
  data() {
    return {
      AdviceImage,
      NewsImage,
      BootcampImage,
    };
  },
};
</script>

<style></style>
