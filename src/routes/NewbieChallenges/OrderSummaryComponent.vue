<template>
  <section
    class="main w-full h-screen flex flex-col justify-center items-center"
  >
    <div
      class="bg-white rounded-xl h-[567px] w-11/12 mobilem:w-[327px] mobilel:w-9/12 mobilel:max-w-[450px] flex flex-col justify-start items-center"
    >
      <img
        src="@/assets/OrderSumaryComponent/illustration-hero.svg"
        alt="hero image"
        data-testid="hero-image-test"
      />
      <h1>order summary</h1>
      <p data-testid="paragraph-text-test">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div
        class="flex justify-between items-center bg-order-very-pale-blue rounded-xl mt-5"
      >
        <img
          src="@/assets/OrderSumaryComponent/icon-music.svg"
          alt="note icon"
          class="w-7"
          data-testid="note-icon-test"
        />
        <div class="flex flex-col justify-center items-center">
          <p>annual plan</p>
          <p>$59.99/year</p>
        </div>
        <p>change</p>
      </div>
      <button>Proceed to Payment</button>
      <p>cancel order</p>
    </div>
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
