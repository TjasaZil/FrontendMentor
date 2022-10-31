<template>
  <section
    class="border-2 border-solid border-slate-200 w-full tablet:w-1/3 laptop:w-1/5 rounded-lg hover:shadow-lg hover:scale-105 flex flex-col justify-center items-center space-y-5"
  >
    <img
      :src="image"
      @error="$event.target.src = '@/assets/no-photo.png'"
      :alt="alt"
      class="rounded-t-lg"
    />
    <h3>{{ heading }}</h3>
    <hr class="w-5/6 border-2 bg-slate-50 border-slate-50 rounded-lg mx-auto" />
    <div role="paragraph">{{ paragraph }}</div>
    <div class="flex justify-around items-center pb-3 mx-auto w-full">
      <a href="https://github.com/zuzexx" target="_blank"
        ><MainButton text="github" data-testid="main-button-component-test"
      /></a>
      <router-link to="/"
        ><MainButton
          text="live site"
          data-testid="main-button-component-test"
          :class="secondary"
      /></router-link>
    </div>
  </section>
</template>

<script>
import MainButton from "@/components/Shared/MainButton.vue";
export default {
  name: "Container",
  components: { MainButton },
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style></style>
