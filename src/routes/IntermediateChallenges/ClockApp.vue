<template>
  <div
    class="font-['Inter'] w-screen h-screen overflow-hidden flex flex-col justify-start items-center"
  >
    <div
      class="border border-red-600 flex flex-row justify-center items-start space-x-4 p-4 w-full"
    >
      <div class="flex flex-col justify-start items-start text-xs max-w-2/3">
        <p>{{ this.randomQuote }}</p>
        <p>{{ this.quoteAuthor }}</p>
      </div>

      <button @click="selectRandomQuote()">
        <img
          src="@/assets/ClockApp/assets/desktop/icon-refresh.svg"
          alt="refresh button"
          class="w-5"
        />
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClockApp",
  data() {
    return {
      randomQuote: "",
      quoteAuthor: "",
    };
  },
  methods: {
    selectRandomQuote() {
      axios
        .get("https://api.quotable.io/random")
        .then((response) => {
          console.log(response.data);
          this.randomQuote = response.data.content;
          this.quoteAuthor = response.data.author;
        })
        .catch((error) => {
          this.randomQuote = error.message;
          this.quoteAuthor = "";
        });
    },
  },
  mounted() {
    this.selectRandomQuote();
  },
};
</script>

<style scoped></style>
