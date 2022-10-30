<template>
  <section class="bg-slate-700 pt-20 h-screen">
    <section class="section-y-4 pt-20">
      <h2 class="capitalize font-semibold">
        welcome to my frontend mentor page
      </h2>
      <hr class="w-1/3 bg-slate-50 my-4" />
      <div role="paragraph">
        Welcome to my Frontend Mentor challenges page. This is where all of my
        challenges found their home. You can browse them using the menu at the
        top. If you want to look at more of my projects feel free to visit my
        GitHub page.
      </div>
    </section>
    <section class="flex justify-start items-center space-x-5">
      <a
        href="https://github.com/zuzexx"
        target="_blank"
        data-testid="github-link-test"
        ><img src="@/assets/github.png" alt="github" class="icon"
      /></a>
      <a
        href="https://www.linkedin.com/in/tjasa-zilavec/"
        target="_blank"
        data-testid="linkedin-link-test"
        ><img src="@/assets/linkedin.png" alt="linkedin" class="icon"
      /></a>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.icon {
  @apply w-12;
}
</style>
