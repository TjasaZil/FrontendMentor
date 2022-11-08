<template>
  <section
    class="main w-full h-screen flex flex-col justify-center items-center"
  >
    <div
      class="bg-white rounded-3xl h-[567px] w-11/12 mobilem:w-[327px] mobilel:w-9/12 mobilel:max-w-[450px] mobilel:h-[697px] flex flex-col justify-start items-center text-center space-y-6 drop-shadow-2xl shadow-order-dark-blue"
    >
      <img
        src="@/assets/OrderSumaryComponent/illustration-hero.svg"
        alt="hero image"
        data-testid="hero-image-test"
        class="rounded-t-3xl"
        x-intersect="$el.classList.add('swingIn')"
      />
      <h1
        class="mobilel:pt-5 font-black text-order-dark-blue w-9/12 mx-auto text-2xl mobilel:text-3xl capitalize"
        x-intersect="$el.classList.add('fadeRightLeft')"
      >
        order summary
      </h1>
      <p
        class="w-9/12 mx-auto text-sm mobilel:text-base text-order-desaturated-blue leading-5 font-normal"
        data-testid="paragraph-text-test"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div
        class="w-9/12 mobilem:max-w-[279px] mobilem:max-h-[98px] mobilel:max-w-[354px] mx-auto flex justify-center items-center bg-order-very-pale-blue rounded-2xl mobilel:pt-7 mobilel:pb-7"
        x-intersect="$el.classList.add('fadeIn')"
      >
        <div
          class="w-10/12 mobilem:w-[247px] mobilem:h-[48px] mobilel:w-[306px] mx-auto my-1 flex justify-between items-center"
        >
          <div class="flex justify-between items-center space-x-4">
            <img
              src="@/assets/OrderSumaryComponent/icon-music.svg"
              alt="note icon"
              class="w-12"
              data-testid="note-icon-test"
              x-intersect="$el.classList.add('swingIn')"
            />
            <div class="flex flex-col justify-center items-center">
              <p
                class="text-sm mobilel:text-base text-order-dark-blue font-black capitalize"
                x-intersect="$el.classList.add('fadeLeftRight')"
              >
                annual plan
              </p>
              <p
                class="text-sm mobilel:text-base text-order-desaturated-blue font-normal"
                x-intersect="$el.classList.add('fadeLeftRight')"
              >
                $59.99/year
              </p>
            </div>
          </div>

          <p
            class="font-black underline text-order-bright-blue text-sm capitalize hover:cursor-pointer hover:opacity-90 hover:no-underline"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            change
          </p>
        </div>
      </div>

      <button
        class="w-9/12 mx-auto text-sm mobilel:text-base py-3 text-white bg-order-bright-blue font-bold shadow-3xl rounded-xl hover:cursor-pointer hover:opacity-90 mobilel:mt-12 hover:animate-pulse shadow-order-dark-blue"
        x-intersect="$el.classList.add('fadeIn')"
      >
        Proceed to Payment
      </button>
      <p
        class="w-9/12 pt-2 mx-auto capitalize text-order-desaturated-blue hover:cursor-pointer hover:text-order-dark-blue"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        cancel order
      </p>
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
