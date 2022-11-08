<template>
  <section
    class="main w-full h-screen flex flex-col justify-center items-center"
  >
    <div
      class="bg-white rounded-xl h-[567px] w-11/12 mobilem:w-[327px] mobilel:w-9/12 mobilel:max-w-[450px]"
    ></div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,700;1,500;1,900&display=swap");

.main {
  font-family: "Red Hat Display", sans-serif;
  background-image: url("@/assets/OrderSumaryComponent/pattern-background-mobile.svg");
  background-color: hsl(225, 100%, 94%);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
}
@media only screen and (min-width: 768px) {
  .main {
    background-image: url("@/assets/OrderSumaryComponent/pattern-background-desktop.svg");
  }
}
</style>
