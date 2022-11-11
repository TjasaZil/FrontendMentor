<template>
  <section
    class="main flex flex-col text-black justify-center items-center laptop:h-screen w-full bg-news-off-white"
  >
    <!-- NAVIGATION -->
    <div
      class="absolute h-24 mx-auto top-0 left-0 flex flex-row justify-between w-full items-center px-3 b bg-news-off-white"
    >
      <!-- ICON -->
      <img
        src="@/assets/NewsHomepage/logo.svg"
        alt="logo icon"
        data-testid="logo-icon-test"
      />
      <!-- MOBILE MENU -->
      <div class="laptop:hidden">
        <img
          v-if="!this.open"
          src="@/assets/NewsHomepage/icon-menu.svg"
          alt="menu icon"
          @click="openMenu()"
          data-testid="menu-icon-test"
        />
        <img
          v-else
          src="@/assets/NewsHomepage/icon-menu-close.svg"
          alt="close menu icon"
          @click="openMenu()"
          data-testid="closed-icon-test"
        />
        <div v-if="this.open" class="flex justify-center items-center w-full">
          <ul
            class="bg-news-off-white w-2/3 pl-5 capitalize space-y-5 pt-10 absolute right-0 top-16 h-screen text-news-very-dark-blue font-normal"
          >
            <li v-for="nav in navs" :key="nav">{{ nav }}</li>
          </ul>
          <div
            class="bg-black opacity-50 h-screen absolute left-0 top-0 w-1/3"
          ></div>
        </div>
      </div>

      <!-- DESKTOP MENU-->

      <ul
        class="hidden laptop:visible text-black laptop:flex flex-row justify-around items-center h-18 p-4"
      >
        <li v-for="nav in navs" :key="nav">{{ nav }}</li>
      </ul>
    </div>

    <!-- BODY -->
    <!--- TOP -->
    <div
      class="flex flex-col laptop:flex-row justify-center items-center w-full"
    >
      <div
        class="laptop:flex laptop:flex-col laptop:justify-center laptop:items-center"
      >
        <picture>
          <source
            media="(min-width:768px)"
            srcset="@/assets/NewsHomepage/image-web-3-desktop.jpg"
          />
          <source
            media="(min-width:465px)"
            srcset="@/assets/NewsHomepage/image-web-3-mobile.jpg"
          />
          <img
            src="@/assets/NewsHomepage/image-web-3-mobile.jpg"
            alt="hero image"
            data-testid="hero-image-test"
            class="w-11/12 mx-auto"
          />
        </picture>

        <div
          class="text-left w-11/12 space-y-5 mt-5 mx-auto laptop:flex laptop:justify-center laptop:items-center"
        >
          <h1
            class="text-news-very-dark-blue font-extrabold text-5xl w-3/4"
            data-testid="hero-heading-test"
          >
            The Bright Future of Web 3.0?
          </h1>

          <div
            class="laptop:flex-col laptop:justify-center laptop:items-center"
          >
            <p
              class="leading-5 text-sm text-news-dark-grayish-blue font-normal"
            >
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button
              class="mt-5 uppercase text-news-off-white font-bold text-sm bg-news-soft-red px-7 py-3 hover:cursor-pointer hover:bg-news-very-dark-blue"
            >
              read more
            </button>
          </div>
        </div>
      </div>
      <!-- blog section -->
      <div
        class="bg-news-very-dark-blue w-11/12 mx-auto text-left p-2"
        data-testid="blog-section-test"
      >
        <h2
          class="text-news-soft-orange text-3xl font-black"
          data-testid="blog-section-heading"
        >
          New
        </h2>
        <h3 data-testid="blog-small-heading">Hydrogen VS Electric Cars</h3>
        <p data-testid="blog-paragraph-test">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <hr />
        <h3 data-testid="blog-small-heading">The Downsides of AI Artistry</h3>
        <p data-testid="blog-paragraph-test">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
        <h3 data-testid="blog-small-heading">Is VC Funding Drying Up?</h3>
        <p data-testid="blog-paragraph-test">
          Is Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>

    <!-- BOTTOM -->

    <div class="flex flex-col laptop:flex-row justify-center items-center">
      <div
        v-for="blog in blogs"
        :key="blog"
        class="flex laptop:flex-row justify-center items-center"
      >
        <div>
          <img
            :src="blog.img"
            :alt="blog.alt"
            data-testid="bottom-image-test"
          />
        </div>
        <div class="flex flex-col justify-center items-center">
          <div data-testid="number-test">{{ blog.number }}</div>
          <div data-testid="small-bottom-heading">{{ blog.heading }}</div>
          <div data-testid="small-bottom-paragraph">{{ blog.paragraph }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import retroImage from "@/assets/NewsHomepage/image-retro-pcs.jpg";
import laptopImage from "@/assets/NewsHomepage/image-top-laptops.jpg";
import growthImage from "@/assets/NewsHomepage/image-gaming-growth.jpg";
export default {
  name: "NewsHomepage",
  data() {
    return {
      open: false,
      navs: ["home", "new", "popular", "trending", "categories"],
      blogs: [
        {
          img: retroImage,
          alt: "retro PCs",
          number: "01",
          heading: "Reviving Retro PCs",
          paragraph: "What happens when old PCs are given modern upgrades?",
        },
        {
          img: laptopImage,
          alt: "top laptops",
          number: "02",
          heading: "Top 10 Laptops of 2022",
          paragraph: "Our best picks for various needs and budgets",
        },
        {
          img: growthImage,
          alt: "growth of gaming",
          number: "03",
          heading: "The Growth of Gaming",
          paragraph: "How the pandemic has sparked fresh opportunities",
        },
      ],
    };
  },

  methods: {
    openMenu() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap");
.main {
  font-family: "Inter", sans-serif;
}
</style>
