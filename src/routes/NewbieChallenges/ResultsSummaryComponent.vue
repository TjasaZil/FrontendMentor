<template>
  <div
    class="bg-results-summary-pale-blue font-['Hanken_Grotesk'] w-screen h-screen flex flex-col tablet:items-center tablet:justify-center"
  >
    <div
      class="border-2 border-green-600 w-full mx-auto text-center tablet:w-[736px] tablet:h-[512px] tablet:flex tablet:justify-start tablet:items-center"
    >
      <div
        class="border-2 border-red-600 w-full text-center flex flex-col justify-center items-center space-y-3 rounded-b-2xl bg-gradient-to-b from-results-summary-slate-blue to-results-summary-royal-blue tablet:w-[368px] tablet:h-[512px] tablet:rounded-2xl"
      >
        <h2 class="font-bold text-lg text-results-summary-light-lavender pt-6">
          Your Result
        </h2>
        <div
          class="py-5 px-8 rounded-full bg-gradient-to-b from-results-summary-violet-blue via-results-summary-perian-blue"
        >
          <p class="text-4xl font-extrabold text-white">76</p>
          <span
            class="text-results-summary-light-slate-blue text-sm font-medium"
            >of 100</span
          >
        </div>
        <h3 class="text-results-summary-pale-blue font-bold text-xl">Great</h3>
        <p
          class="pb-5 text-sm text-results-summary-light-lavender font-medium mx-auto w-5/6"
        >
          Your Preformance exceeded 65% of the people conducting the test here!
        </p>
      </div>
      <div class="bg-white w-full text-black">
        <div class="bg-white w-5/6 mx-auto pt-5 space-y-5">
          <h4 class="text-left">Summary</h4>
          <ul class="space-y-5">
            <li
              v-for="result in results"
              :key="result"
              class="border-2 border-blue-700 rounded-xl w-full mx-auto flex flex-row justify-between items-center"
            >
              <div
                class="border-solid border-pink-700 flex flex-row justify-between items-center w-5/6 mx-auto"
              >
                <div
                  class="flex flex-row justify-start items-center space-x-2 py-3"
                >
                  <img :src="result.icon" alt="icon for the result" />
                  <p>{{ result.category }}</p>
                </div>
                <p>{{ result.score }}<span> / 100</span></p>
              </div>
            </li>
          </ul>
          <button>Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ResultsSummaryPage",
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://frontendmentor-cb0e5-default-rtdb.europe-west1.firebasedatabase.app/resultsSummary.json"
      )
      .then((response) => {
        this.results = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
      });
  },
};
</script>

<style scoped></style>
