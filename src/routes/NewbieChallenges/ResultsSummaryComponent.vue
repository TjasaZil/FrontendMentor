<template>
  <div
    class="bg-white font-['Hanken_Grotesk'] w-screen h-screen flex flex-col tablet:items-center tablet:justify-center overflow-hidden"
  >
    <div
      class="w-full mx-auto text-center tablet:w-[736px] tablet:h-[512px] tablet:flex tablet:justify-center tablet:items-center tablet:bg-white tablet:rounded-2xl tablet:shadow-2xl tablet:shadow-results-summary-perian-blue"
      x-intersect="$el.classList.add('swingIn')"
    >
      <div
        class="w-full text-center flex flex-col justify-center items-center space-y-3 rounded-b-2xl bg-gradient-to-b from-results-summary-slate-blue to-results-summary-royal-blue tablet:w-[700px] tablet:h-full tablet:rounded-2xl tablet:justify-evenly"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        <h2
          class="font-bold text-lg text-results-summary-light-lavender pt-6 tablet:text-2xl"
          x-intersect="$el.classList.add('fadeIn')"
        >
          Your Result
        </h2>
        <div
          class="py-5 px-8 rounded-full bg-gradient-to-b from-results-summary-violet-blue via-results-summary-perian-blue tablet:w-[200px] tablet:h-[200px] tablet:p-0 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:mx-auto"
          x-intersect="$el.classList.add('fadeIn')"
        >
          <p
            class="text-4xl font-extrabold text-white tablet:text-7xl"
            x-intersect="$el.classList.add('fadeIn')"
          >
            76
          </p>
          <span
            class="text-results-summary-slate-blue text-sm font-medium tablet:text-lg"
            >of 100</span
          >
        </div>
        <h3
          class="text-results-summary-pale-blue font-bold text-xl tablet:text-3xl"
          x-intersect="$el.classList.add('fadeIn')"
        >
          Great
        </h3>
        <p
          class="pb-5 text-sm text-results-summary-light-lavender font-medium mx-auto w-5/6 tablet:text-lg tablet:max-w-[267px]"
          x-intersect="$el.classList.add('fadeIn')"
        >
          Your Preformance exceeded 65% of the people conducting the test here!
        </p>
      </div>
      <div
        class="bg-white w-full text-black tablet:h-[512px] tablet:rounded-r-2xl"
      >
        <div
          class="bg-white w-5/6 mx-auto pt-5 space-y-4 tablet:w-[272px] h-full tablet:flex tablet:flex-col tablet:justify-evenly"
        >
          <h4
            class="text-left text-lg tablet:text-2xl font-bold"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Summary
          </h4>
          <ul
            class="space-y-3"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            <li
              v-for="result in results"
              :key="result"
              :class="squareClasses(result.category)"
              class="rounded-xl w-full mx-auto flex flex-row justify-between items-center py-4"
            >
              <div
                class="flex flex-row justify-between items-center w-5/6 mx-auto"
              >
                <div class="flex flex-row justify-start items-center space-x-2">
                  <img :src="result.icon" alt="icon for the result" />
                  <p :class="squareClasses">{{ result.category }}</p>
                </div>
                <p class="text-black font-bold">
                  {{ result.score
                  }}<span class="text-meet-gray font-medium"> / 100</span>
                </p>
              </div>
            </li>
          </ul>
          <button
            class="w-full rounded-full bg-results-summary-dark-blue text-white font-bold text-base py-3 hover:bg-gradient-to-b from-results-summary-violet-blue to-results-summary-royal-blue tablet:py-4"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Continue
          </button>
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
  computed: {
    squareClasses() {
      const styleClass = {
        Reaction: "reaction",
        Memory: "memory",
        Verbal: "verbal",
        Visual: "visual",
      };
      return (category) => {
        return [styleClass[category]];
      };
    },
  },
  mounted() {
    axios
      .get(
        "https://frontendmentor-cb0e5-default-rtdb.europe-west1.firebasedatabase.app/resultsSummary.json"
      )
      .then((response) => {
        this.results = response.data;
        console.log(response.data);
        console.log(this.results.category);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
      });
  },
};
</script>

<style scoped>
.reaction {
  color: hsl(0, 100%, 67%);
  background-color: hsla(0, 100%, 67%, 0.1);
}
.memory {
  color: hsl(39, 100%, 56%);
  background-color: hsla(39, 100%, 56%, 0.1);
}
.verbal {
  color: hsl(166, 100%, 37%);
  background-color: hsla(166, 100%, 37%, 0.1);
}
.visual {
  color: hsl(234, 85%, 45%);
  background-color: hsla(234, 85%, 45%, 0.1);
}
</style>
