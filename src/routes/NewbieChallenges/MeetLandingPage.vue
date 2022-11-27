<template>
  <div class="main-div bg-meet-light text-meet-dark h-screen">
    <img
      alt="Meet landing page logo"
      src="@/assets/MeetLandingPage/logo.svg"
      class="w-12"
    />
    <div class="laptop:hidden">
      <div class="mobile-hero" data-testid="mobile-tablet-hero-image"></div>
      <div>
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
      </div>
      <div><button>Download v1.3</button><button>What is it?</button></div>
    </div>
    <div
      class="hidden laptop:flex flex-row justify-center content-center w-full"
    >
      <div
        class="desktop-left-hero"
        data-testid="desktop-left-hero-image"
      ></div>
      <div>
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
      </div>
      <div><button>Download v1.3</button><button>btn2</button></div>
      <div
        class="desktop-right-hero"
        data-testid="desktop-right-hero-image"
      ></div>
    </div>
    <div>number 1</div>
    <div>
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        alt="People enjoying our services"
      />
    </div>
    <div>
      <h3>built for modern use</h3>
      <h2>Smarter meetings all in one place</h2>
      <p>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </div>
    <div>number2</div>

    <div class="w-full mx-auto bg-meet-teal bg-opacity-40">
      <footer
        class="footer w-full mx-auto flex flex-col justify-center content-center bg-meet-teal"
        data-testid="footer-image"
      >
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button>Download v1.3</button>
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
  background-size: contain;
  width: 100vw;
  height: 100px;
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
  background-image: url("@/assets/MeetLandingPage/mobile/image-footer.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
}
</style>
