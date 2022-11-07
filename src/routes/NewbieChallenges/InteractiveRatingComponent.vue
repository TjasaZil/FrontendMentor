<template>
  <section
    class="main w-full h-screen bg-interactive-very-dark-blue flex flex-col justify-center items-center"
  >
    <div
      class="bg-gradient-to-b from-interactive-dark-blue to-interactive-very-dark-blue rounded-lg w-11/12 mobilem:w-[327px] h-[360px] mobilel:w-[412px] mobilel:h-[416px]"
    >
      <div
        v-if="!this.submit"
        class="text-left w-10/12 mx-auto my-auto space-y-5"
      >
        <div
          class="rounded-full p-3 bg-interactive-dark-blue w-fit mt-3 mobilel:mt-9"
        >
          <img
            alt="star icon"
            src="@/assets/InteractiveRatingComponent/icon-star.svg"
            class="w-4"
            x-intersect="$el.classList.add('fadeIn')"
          />
        </div>

        <h1 class="pt-6" x-intersect="$el.classList.add('fadeRightLeft')">
          How did we do?
        </h1>
        <p
          class="main-paragraph text-interactive-medium-grey -pt-2"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div class="flex justify-between items-center w-full mx-auto py-2">
          <button
            value="1"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
            x-intersect="$el.classList.add('swingIn')"
          >
            1
          </button>
          <button
            value="2"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
            x-intersect="$el.classList.add('swingIn')"
          >
            2
          </button>
          <button
            value="3"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
            x-intersect="$el.classList.add('swingIn')"
          >
            3
          </button>
          <button
            value="4"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
            x-intersect="$el.classList.add('swingIn')"
          >
            4
          </button>
          <button
            value="5"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
            x-intersect="$el.classList.add('swingIn')"
          >
            5
          </button>
        </div>
        <button
          class="w-full py-3 bg-interactive-orange rounded-full uppercase text-white font-medium text-sm tracking-widest hover:text-white hover:bg-interactive-orange mobilel:tracking mobilel:text-[15px]"
          @click="submitRating"
          data-testid="submit-button-test"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          submit
        </button>
      </div>
      <div v-else class="text-center w-10/12 mx-auto space-y-5">
        <img
          alt="thank you image"
          src="@/assets/InteractiveRatingComponent/illustration-thank-you.svg"
          class="w-[144px] h-[96px] mobilel:w-[162px] mobilel:h-[108px] mx-auto mt-5 mobilel:mt-7"
        />
        <p
          class="w-fit mt-4 py-1 px-3 mx-auto rounded-full bg-interactive-dark-blue text-interactive-orange font-medium"
          x-intersect="$el.classList.add('swingIn')"
        >
          You selected {{ this.value }} out of 5
        </p>
        <h1 class="pt-4" x-intersect="$el.classList.add('fadeLeftRight')">
          Thank you!
        </h1>

        <p
          class="main-paragraph text-interactive-medium-grey"
          x-intersect="$el.classList.add('fadeIn')"
        >
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InteractiveRatingComponent",
  data() {
    return {
      submit: false,
      value: "5",
    };
  },

  methods: {
    submitRating() {
      this.submit = !this.submit;
    },
    getValue(e) {
      this.value = e.target.value;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");
.main {
  font-family: "Overpass", sans-serif;
}
.value-button {
  @apply rounded-full text-[13.5px] text-center py-3 px-5 mobilel:py-4 mobilel:px-6 bg-interactive-dark-blue text-interactive-medium-grey hover:text-white focus:text-white hover:bg-interactive-orange focus:bg-interactive-medium-grey font-bold;
}
h1 {
  @apply text-2xl mobilel:text-[28px] font-bold text-white;
}
.main-paragraph {
  @apply text-[13.5px] mobilel:text-[15px]  leading-5 font-medium;
}
</style>
