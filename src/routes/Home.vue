<template>
  <section class="bg-slate-700 pt-20 h-screen">
    <IntroText
      heading="welcome to my frontend mentor page"
      paragraph="Welcome to my Frontend Mentor challenges page. This is where all of my
        challenges found their home. You can browse them using the menu at the
        top. If you want to look at more of my projects feel free to visit my
        GitHub page."
    />

    <section class="flex justify-center items-center space-x-5 mt-5">
      <a
        href="https://github.com/zuzexx"
        target="_blank"
        data-testid="github-link-test"
        ><img
          src="@/assets/github.png"
          alt="github"
          class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
      /></a>
      <a
        href="https://www.linkedin.com/in/tjasa-zilavec/"
        target="_blank"
        data-testid="linkedin-link-test"
        ><img
          src="@/assets/linkedin.png"
          alt="linkedin"
          class="w-8 laptop:w-10 laptopl:w-11 4kay:w-14"
      /></a>
    </section>
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
export default {
  name: "Home",
  components: { IntroText },
};
</script>

<style scoped></style>
