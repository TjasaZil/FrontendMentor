<template>
  <section>
    <section
      class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen text-slate-200"
    >
      <Navigation />
      <IntroText
        data-testid="introtext-component-test"
        heading="intermediate challenges"
        paragraph="This page holds all of my finished intermediate challenges."
      />
      <section
        class="mt-16 w-5/6 mx-auto flex flex-wrap justify-around items-center"
      >
        <section
          class="border-2 border-solid border-slate-200 w-full tablet:w-1/3 laptopl:w-1/5 4kay:w-1/6 rounded-lg hover:shadow-lg hover:scale-105 hover:opacity-70 flex flex-col justify-center items-center space-y-5 my-2 mx-1"
          x-intersect="$el.classList.add('swingIn')"
        >
          <div class="img-container">
            <img
              :src="BankImage"
              @error="$event.target.src = '@/assets/no-photo.png'"
              alt="layout"
              class="rounded-t-lg"
            />
          </div>

          <h3
            class="font-semibold text-center mx-auto text-lg tablet:text-xl laptopl:text-2xl 4kay:text-3xl"
          >
            Easybank Landing Page
          </h3>
          <hr
            class="w-5/6 border-2 bg-slate-50 border-slate-50 rounded-lg mx-auto"
          />
          <div role="paragraph" class="w-5/6 mx-auto text-center">
            A project made with Nuxt and Typescript. I colaborated on this
            challenge with a fellow developer.
          </div>
          <div class="flex justify-around items-center pb-3 mx-auto w-full">
            <a
              href="https://github.com/zuzexx/-FM-EasybankLandingPage"
              target="_blank"
              ><MainButton
                text="github"
                data-testid="main-button-component-test"
            /></a>
            <a href="https://fm-easybank-landing-page-chi.vercel.app/"
              ><MainButton
                text="live site"
                data-testid="main-button-component-test"
                :class="secondary"
            /></a>
          </div>
        </section>
        <!-- <Container
          :image="BankImage"
          alt="easybank landing page"
          heading="easybank landing page"
          router="https://fm-easybank-landing-page-chi.vercel.app/"
          x-intersect="$el.classList.add('swingIn')"
        />-->
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
//import Container from "@/components/Shared/Container.vue";
import BankImage from "@/assets/desktop-preview.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";
import MainButton from "@/components/Shared/MainButton.vue";
export default {
  name: "NewbiePage",
  components: { IntroText, Navigation, Footer, MainButton },
  data() {
    return {
      BankImage,
    };
  },
};
</script>

<style></style>
