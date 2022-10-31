<template>
  <section>
    <section class="bg-slate-700 pt-20 h-screen text-slate-200">
      <Navigation />
      <IntroText
        heading="welcome to my frontend mentor page"
        paragraph="Welcome to my Frontend Mentor challenges page. This is where all of my
        challenges found their home. You can browse them using the menu at the
        top. If you want to look at more of my projects feel free to visit my
        GitHub page.
        Most of the challenges are made using TDD (Jest and Vue testing library), Vue.js and Tailwindcss."
      />

      <section class="flex justify-center items-center space-x-5 mt-5">
        <a
          href="https://github.com/zuzexx"
          target="_blank"
          data-testid="github-link-test"
          ><img
            src="@/assets/github.png"
            alt="github-icon"
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
        /></a>
        <a
          href="https://www.linkedin.com/in/tjasa-zilavec/"
          target="_blank"
          data-testid="linkedin-link-test"
          ><img
            src="@/assets/linkedin.png"
            alt="linkedin-icon"
            class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
        /></a>
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";
export default {
  name: "Home",
  components: { IntroText, Navigation, Footer },
};
</script>

<style scoped></style>
