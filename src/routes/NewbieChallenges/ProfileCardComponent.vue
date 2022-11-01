<template>
  <section
    class="main flex flex-col items-center justify-center bg-profile-dark-cyan w-screen h-screen"
  >
    <MainComponent />
  </section>
</template>

<script>
import MainComponent from "@/components/NewbieChallenges/ProfileCardComponent/MainComponent.vue";
export default {
  name: "ProfileCardComponent",
  components: {
    MainComponent,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
.main {
  background-image: url(@/assets/ProfileCardComponent/bg-pattern-top.svg),
    url(@/assets/ProfileCardComponent/bg-pattern-bottom.svg);
  background-repeat: no-repeat, no-repeat;
  background-position: right 52vw bottom 37vh, left 49vw top 50vh;
  width: 100%;
  font-family: "Kumbh Sans", sans-serif;
}
</style>
