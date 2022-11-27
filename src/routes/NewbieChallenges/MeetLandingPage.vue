<template>
  <div class="main-div bg-meet-light text-meet-dark w-full overflow-x-hidden">
    <img
      alt="Meet landing page logo"
      src="@/assets/MeetLandingPage/logo.svg"
      class="w-[119px] mx-auto pt-14"
    />
    <div class="laptop:hidden w-full mx-auto mt-11">
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
        class="mx-auto flex flex-col justify-center content-center text-center space-y-3 mt-8 tablet:flex-row tablet:items-center tablet:space-y-0 tablet:w-1/3 tablet:space-x-3"
      >
        <button
          class="border-0 rounded-full px-4 py-5 text-xl font-black text-meet-light bg-meet-teal mx-auto hover:bg-opacity-75 max-w-[263px] tablet:text-lg"
        >
          Download
          <span class="text-meet-light-teal">v1.3</span></button
        ><button
          class="border-0 rounded-full px-4 py-5 text-xl font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 max-w-[189px]"
        >
          What is it?
        </button>
      </div>
    </div>
    <div
      class="hidden laptop:flex flex-row justify-center content-center w-full"
    >
      <div
        class="desktop-left-hero"
        data-testid="desktop-left-hero-image"
      ></div>
      <div class="flex flex-col justify-center content-center">
        <h1
          class="text-meet-dark w-1/3 mx-auto font-black text-[64px] leading-[64px]"
        >
          Group Chat for Everyone
        </h1>
        <p
          class="w-1/3 mx-auto text-meet-gray font-medium text-[26px] leading-[36px]"
        >
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>

        <div
          class="mx-auto flex flex-col justify-center content-center text-center space-y-3 mt-8"
        >
          <button
            class="border-0 rounded-full px-4 py-5 text-xl font-black text-meet-light bg-meet-teal mx-auto hover:bg-opacity-75 max-w-[193px]"
          >
            Download
            <span class="text-meet-light-teal">v1.3</span></button
          ><button
            class="border-0 rounded-full px-4 py-5 text-xl font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 max-w-[139px]"
          >
            What is it?
          </button>
        </div>
      </div>
      <div
        class="desktop-right-hero"
        data-testid="desktop-right-hero-image"
      ></div>
    </div>
    <div
      class="w-full mx-auto mt-20 flex flex-col justify-center content-center"
    >
      <div
        class="border-l border-l-meet-gray h-[100px] absolute mb-[73px] left-1/2 opacity-75"
      ></div>
      <div
        class="border rounded-full border-solid border-meet-gray w-[80px] h-[80px] mt-[100px] mx-auto border-opacity-75 bg-meet-light"
      >
        <p class="text-meet-gray font-bold text-center mt-6 text-xl">01</p>
      </div>
    </div>
    <div
      class="flex flex-row flex-wrap content-center justify-center mt-20 w-full mx-auto"
    >
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        alt="People enjoying our services"
        class="rounded-lg w-1/3 mt-5 ml-5 laptop:max-w-[242px] tablet:max-w-[156px]"
      />
    </div>
    <div
      class="mt-20 space-y-8 flex flex-col justify-center content-center text-center"
    >
      <h3 class="uppercase text-meet-teal text-2xl tracking-[4px] font-bold">
        built for modern use
      </h3>
      <h2
        class="text-meet-dark font-black text-5xl mx-auto w-10/12 tablet:w-6/12"
      >
        Smarter meetings all in one place
      </h2>
      <p
        class="w-10/12 tablet:w-9/12 mx-auto text-meet-gray font-medium text-[26px] leading-[36px] tablet:text-[20px]"
      >
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </div>

    <div class="w-full mx-auto">
      <div
        class="w-full mx-auto mt-20 flex flex-col justify-center content-center relative top-10 z-50"
      >
        <div
          class="border-l border-l-meet-gray h-[100px] absolute mb-[73px] left-1/2 opacity-75"
        ></div>
        <div
          class="border rounded-full border-solid border-meet-gray w-[80px] h-[80px] mt-[100px] mx-auto border-opacity-75 bg-meet-light"
        >
          <p class="text-meet-gray font-bold text-center mt-6 text-xl">02</p>
        </div>
      </div>
      <footer
        class="w-full mx-auto flex flex-col justify-center content-center text-center bg-meet-teal relative bottom-0 left-0 z-20 text-meet-light laptop:flex-row laptop:justify-between laptop:w-full laptop:content-center"
      >
        <div class="footer pt-44" data-testid="footer-background-class">
          <h2 class="font-black text-5xl mx-auto w-8/12 laptop:w-1/3">
            Experience more together
          </h2>
          <p
            class="w-8/12 mx-auto font-medium text-[26px] leading-[36px] pt-7 tablet:text-[20px] laptop:w-1/3"
          >
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <button
            class="w-6/12 border-0 rounded-full px-5 py-5 text-xl font-black text-meet-light bg-meet-purple mx-auto hover:bg-opacity-75 max-w-[193px] mt-7 mb-20 laptop:w-1/3"
          >
            Download
            <span class="text-meet-light-purple">v1.3</span>
          </button>
        </div>
      </footer>
    </div>
  </div>
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
  height: 100px;
  width: 100px;
}
.desktop-right-hero {
  background-image: url("@/assets/MeetLandingPage/desktop/image-hero-right.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100px;
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
  }
}
</style>
