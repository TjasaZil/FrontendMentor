<template>
  <main class="main-div bg-meet-light text-meet-dark w-full overflow-x-hidden">
    <!-- LOGO -->
    <img
      alt="Meet landing page logo"
      src="@/assets/MeetLandingPage/logo.svg"
      class="w-[119px] mx-auto pt-24"
    />
    <!-- MOBILE/TABLET HERO -->
    <header class="laptop:hidden w-full mx-auto mt-11">
      <div class="mobile-hero" data-testid="mobile-tablet-hero-image"></div>
      <div
        class="w-11/12 mx-auto flex flex-col justify-center content-center text-center space-y-8 mt-5 tablet:mt-24"
      >
        <h1
          class="text-meet-dark w-9/12 tablet:w-6/12 tablet:text-[70px] mx-auto font-black text-[64px] leading-[64px]"
        >
          Group Chat for Everyone
        </h1>
        <p
          class="w-11/12 tablet:w-7/12 tablet:text-[20px] mx-auto text-meet-gray font-medium text-[26px] leading-[36px]"
        >
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
      </div>
      <div
        class="mx-auto flex flex-col justify-center content-center text-center space-y-3 mt-8 tablet:flex-row tablet:items-center tablet:space-y-0 tablet:w-1/2"
      >
        <button
          class="border-0 rounded-full px-8 py-5 text-xl font-black text-meet-light bg-meet-teal mx-auto hover:bg-opacity-75 max-w-[263px] tablet:text-lg"
        >
          Download
          <span class="text-meet-light-teal">v1.3</span></button
        ><button
          class="border-0 rounded-full px-8 py-5 text-xl font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 max-w-[189px]"
        >
          What is it?
        </button>
      </div>
    </header>

    <!-- DESKTOP HERO -->
    <header
      class="hidden laptop:flex flex-row justify-center content-center w-full max-w-[1504px] mt-36 text-center mx-auto"
    >
      <div
        class="desktop-left-hero w-1/3"
        data-testid="desktop-left-hero-image"
      ></div>
      <div class="flex flex-col justify-between content-center w-[550px]">
        <h1
          class="text-meet-dark mx-auto font-black text-[64px] laptop:text-[50px] laptopl:text-[68px] leading-[64px]"
        >
          Group Chat for Everyone
        </h1>
        <p
          class="mx-auto text-meet-gray font-medium text-[26px] laptop:leading-[26px] laptop:text-[18px] leading-[36px]"
        >
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div
          class="mx-auto flex justify-center items-center text-center space-x-5"
        >
          <button
            class="border-0 rounded-full px-10 py-5 text-[16px] font-black text-meet-light bg-meet-teal mx-auto hover:bg-opacity-75 max-w-[193px]"
          >
            Download
            <span class="text-meet-light-teal">v1.3</span></button
          ><button
            class="border-0 rounded-full px-7 py-5 text-[16px] font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 max-w-[139px]"
          >
            What is it?
          </button>
        </div>
      </div>
      <div
        class="desktop-right-hero w-1/3"
        data-testid="desktop-right-hero-image"
      ></div>
    </header>
    <!-- NUMBER 1 -->
    <div
      class="w-full mx-auto mt-32 flex flex-col justify-center content-center relative top-10 z-50"
    >
      <div
        class="border-l border-l-meet-gray h-[90px] absolute mb-[55px] left-1/2 opacity-75"
      ></div>
      <div
        class="border rounded-full border-solid border-meet-gray w-[56px] h-[56px] mt-[90px] mx-auto border-opacity-75 bg-meet-light"
      >
        <p class="text-meet-gray font-bold text-center mt-3 text-xl">01</p>
      </div>
    </div>

    <!-- IMAGES -->
    <div
      class="w-full flex flex-row flex-wrap content-center justify-center laptop:justify-between mt-20 mx-auto max-w-[1410px] laptop:mt-28"
    >
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        alt="People enjoying our services"
        class="rounded-lg w-1/3 laptop:w-1/4 mt-5 ml-5 laptop:ml-0 laptop:max-w-[322px]"
      />
    </div>

    <!-- TEXT -->
    <div
      class="mt-32 space-y-7 flex flex-col justify-center content-center text-center"
    >
      <h2
        class="mx-auto uppercase text-meet-teal text-2xl tracking-[4px] font-bold laptop:w-1/3"
      >
        built for modern use
      </h2>
      <h3
        class="text-meet-dark font-black text-5xl mx-auto w-10/12 tablet:w-9/12 laptop:w-[550px] laptop:text-[50px]"
      >
        Smarter meetings all in one place
      </h3>
      <p
        class="w-10/12 tablet:w-9/12 mx-auto text-meet-gray font-medium text-[26px] leading-[36px] tablet:text-[20px] laptop:leading-[28px] laptop:text-[21px] laptop:w-[650px]"
      >
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </div>

    <!-- FOOTER -->

    <div class="w-full mx-auto">
      <div
        class="w-full mx-auto mt-20 flex flex-col justify-center content-center relative top-10 z-50"
      >
        <div
          class="border-l border-l-meet-gray h-[90px] absolute mb-[55px] left-1/2 opacity-75"
        ></div>
        <div
          class="border rounded-full border-solid border-meet-gray w-[56px] h-[56px] mt-[90px] mx-auto border-opacity-75 bg-meet-light"
        >
          <p class="text-meet-gray font-bold text-center mt-3 text-xl">02</p>
        </div>
      </div>
      <footer
        class="w-full mx-auto flex flex-col justify-center content-center text-center bg-meet-teal relative bottom-0 left-0 z-20 text-meet-light"
      >
        <div
          class="footer pt-44 w-full laptop:pt-32 laptop:pb-20"
          data-testid="footer-background-class"
        >
          <div
            class="laptopl:flex laptopl:w-[1410px] laptopl:mx-auto laptopl:justify-between laptopl:text-left laptopl:my-auto"
          >
            <h3 class="font-black text-[42px] mx-auto w-8/12 laptop:w-[350px]">
              Experience more together
            </h3>
            <p
              class="w-8/12 mx-auto font-medium text-[26px] leading-[36px] pt-7 tablet:text-[20px] laptop:leading-[26px] laptop:text-[19px] laptop:w-[370px]"
            >
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <button
              class="w-6/12 max-w-[193px] border-0 rounded-full px-10 py-5 text-[16px] font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 mt-7 mb-20"
            >
              Download
              <span class="text-meet-light-purple">v1.3</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import img1 from "@/assets/MeetLandingPage/desktop/image-woman-in-videocall.jpg";
import img2 from "@/assets/MeetLandingPage/desktop/image-women-videochatting.jpg";
import img3 from "@/assets/MeetLandingPage/desktop/image-men-in-meeting.jpg";
import img4 from "@/assets/MeetLandingPage/desktop/image-man-texting.jpg";
export default {
  name: "MeetLandingPage",

  data() {
    return {
      images: [img1, img2, img3, img4],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap");

.main-div {
  font-family: "Red Hat Display", sans-serif;
}
.mobile-hero {
  background-image: url("@/assets/MeetLandingPage/tablet/image-hero.png");
  background-repeat: no-repeat;
  background-position: -2.5rem center;
  background-size: contain;
  width: 110vw;
  height: 353px;
}
.desktop-left-hero {
  background-image: url("@/assets/MeetLandingPage/desktop/image-hero-left.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: -5rem center;
  height: 348px;
}
.desktop-right-hero {
  background-image: url("@/assets/MeetLandingPage/desktop/image-hero-right.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 5rem center;
  height: 348px;
}
.footer {
  display: block;
  position: relative;
  width: 100%;
}
.footer::before {
  content: "";
  background-image: url("@/assets/MeetLandingPage/mobile/image-footer.jpg");
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.2;
  z-index: -1;
}
@media only screen and (min-width: 700px) {
  .mobile-hero {
    background-repeat: no-repeat;
    background-position: -2.5rem center;
    background-size: contain;
    width: 120vw;
    height: 403px;
  }
  .footer::before {
    background-image: url("@/assets/MeetLandingPage/tablet/image-footer.jpg");
  }
}
@media only screen and (min-width: 1024px) {
  .footer::before {
    background-image: url("@/assets/MeetLandingPage/desktop/image-footer.jpg");
    background-position: center 0%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
