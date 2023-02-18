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
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultsSummaryPage",
  mounted() {
    fetch("../../assets/ResultsSummaryComponent/data.json")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .error((err) => console.log(err));
  },
};
</script>

<style scoped></style>
