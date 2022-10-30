<template>
  <section
    class="w-full h-16 bg-slate-800 border-t-2 border-solid border-slate-200 absolute bottom-0 left-0"
  >
    <div class="flex justify-between items-center w-full p-4 h-16">
      <p>© Zuzexx</p>
      <div class="flex justify-center items-center space-x-4">
        <a
          href="https://github.com/zuzexx"
          target="_blank"
          data-testid="github-link-test"
        >
          <img class="icon" alt="github" src="@/assets/github.png"
        /></a>
        <a
          href="https://www.linkedin.com/in/tjasa-zilavec/"
          target="_blank"
          data-testid="linkedin-link-test"
        >
          <img class="icon" alt="linkedin" src="@/assets/linkedin.png"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.icon {
  @apply w-7;
}
</style>
