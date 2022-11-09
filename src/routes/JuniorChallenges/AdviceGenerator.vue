<template>
  <section
    class="main w-full font-extrabold h-screen bg-advice-dark-blue flex flex-col justify-center items-center"
  >
    <div
      class="bg-advice-grayish-blue rounded-lg flex flex-col justify-center items-center"
    >
      <h1>Advice #{{ number }}</h1>
      <p data-testid="paragraph-test">{{ advice }}</p>
      <div class="flex justify-center items-center w-full">
        <hr />
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
            data-testid="separator-image-test"
          />
        </picture>
        <hr />
      </div>

      <button @click="generateNewAdvice">
        <img
          src="@/assets/AdviceGenerator/icon-dice.svg"
          alt="dice icon"
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
</style>
