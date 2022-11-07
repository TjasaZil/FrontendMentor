<template>
  <section
    class="main w-full h-screen bg-interactive-very-dark-blue flex flex-col justify-center items-center"
  >
    <div
      class="bg-interactive-dark-blue rounded-lg w-11/12 mobilem:max-w-[327px] h-[360px]"
    >
      <div v-if="!this.submit">
        <div>
          <img
            alt="star icon"
            src="@/assets/InteractiveRatingComponent/icon-star.svg"
            class="w-5"
          />
        </div>

        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div class="flex justify-between items-center w-full mx-auto">
          <button
            value="1"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
          >
            1
          </button>
          <button
            value="2"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
          >
            2
          </button>
          <button
            value="3"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
          >
            3
          </button>
          <button
            value="4"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
          >
            4
          </button>
          <button
            value="5"
            class="value-button"
            data-testid="value-button-test"
            @click="getValue"
          >
            5
          </button>
        </div>
        <button @click="submitRating" data-testid="submit-button-test">
          submit
        </button>
      </div>
      <div v-else>
        <img
          alt="thank you image"
          src="@/assets/InteractiveRatingComponent/illustration-thank-you.svg"
          class="w-12"
        />
        <h1>Thank you!</h1>
        <p>{{ this.value }}</p>
        <p>
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
      value: "",
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
  @apply rounded-full p-3 px-5 bg-interactive-orange;
}
</style>
