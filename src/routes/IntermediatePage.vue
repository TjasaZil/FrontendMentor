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
        <Container
          :image="Clock"
          alt="Clock App"
          heading="Clock App"
          router="/clock-app"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="Password"
          alt="Password generator app"
          heading="Password generator app"
          router="/password-generator-app"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="IP"
          alt="IP address tracker"
          heading="IP Address Tracker"
          router="/ip-address-tracker"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="DictionaryWebApp"
          alt="Dictionary Web App"
          heading="Dictionary Web App"
          router="/dictionary-web-app"
          x-intersect="$el.classList.add('swingIn')"
        />
        <section
          class="border-2 border-solid border-slate-200 w-full tablet:w-1/3 laptopl:w-1/5 4kay:w-1/6 rounded-lg hover:shadow-lg hover:scale-105 hover:opacity-70 flex flex-col justify-between items-center space-y-5 my-2 mx-1 laptop:h-[450px] 4kay:h-[600px]"
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
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Container from "@/components/Shared/Container.vue";
import BankImage from "@/assets/desktop-preview.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import DictionaryWebApp from "@/assets/DictionaryWebApp/preview.jpg";
import IP from "@/assets/IPtracker/design/desktop-preview.jpg";
import Password from "@/assets/PasswordGenerator/preview.jpg";
import Clock from "@/assets/ClockApp/preview.jpg";
export default {
  name: "NewbiePage",
  components: { IntroText, Navigation, Footer, MainButton, Container },
  data() {
    return {
      BankImage,
      DictionaryWebApp,
      IP,
      Password,
      Clock,
    };
  },
};
</script>

<style></style>
