<template>
  <section
    class="main w-full font-extrabold h-screen bg-advice-dark-blue flex flex-col justify-center items-center"
  >
    <div>
      <div
        class="bg-advice-dark-grayish-blue rounded-lg flex flex-col justify-center items-center h-[315px] w-5/6 mobilem:w-[343px] tablet:w-[540px] tablet:h-[322px] space-y-3"
        x-intersect="$el.classList.add('swingIn')"
      >
        <h1
          class="text-sm text-advice-neon-green tracking-widest uppercase -mt-7"
          x-intersect="$el.classList.add('fadeIn')"
        >
          Advice #{{ number }}
        </h1>
        <p
          class="w-10/12 mx-auto text-advice-light-cyan text-2xl tablet:leading-9 tablet:text-[28px] text-center pt-4"
          x-intersect="$el.classList.add('fadeIn')"
          data-testid="paragraph-test"
        >
          "{{ advice }}"
        </p>
        <div
          class="flex justify-center items-center w-10/12"
          x-intersect="$el.classList.add('fadeIn')"
        >
          <picture>
            <source
              media="(min-width:768px)"
              srcset="@/assets/AdviceGenerator/pattern-divider-desktop.svg"
            />
            <source
              media="(max-width:767px)"
              srcset="@/assets/AdviceGenerator/pattern-divider-mobile.svg"
            />
            <img
              src="@/assets/AdviceGenerator/pattern-divider-mobile.svg"
              alt="separator"
              class="h-4 mt-6"
              data-testid="separator-image-test"
            />
          </picture>
        </div>
      </div>
      <button
        @click="generateNewAdvice"
        class="btn bg-advice-neon-green rounded-full w-16 h-16 relative -mt-8 ml-[138px] tablet:ml-[238px]"
        x-intersect="$el.classList.add('rollInBlurredLeft')"
      >
        <img
          src="@/assets/AdviceGenerator/icon-dice.svg"
          alt="dice icon"
          class="w-6 h-6 mx-auto"
          data-testid="dice-icon-test"
        />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdviceGenerator",
  data() {
    return {
      number: "117",
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    };
  },
  methods: {
    async generateNewAdvice() {
      const advice = await fetch("https://api.adviceslip.com/advice");
      const data = await advice.json();

      this.number = data.slip.id;
      this.advice = data.slip.advice;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");

.main {
  font-family: "Manrope", sans-serif;
}

.btn:hover {
  box-shadow: 0rem 0rem 1rem hsl(150, 100%, 66%);
  cursor: pointer;
}
</style>
