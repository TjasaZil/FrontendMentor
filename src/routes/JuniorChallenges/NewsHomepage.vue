<template>
  /* eslint-disable */
  <section
    class="main flex flex-col text-black justify-center items-center laptop:h-screen w-full bg-news-off-white"
  >
    <!-- NAVIGATION -->
    <div
      class="absolute h-24 mx-auto top-0 left-0 flex flex-row justify-between w-full items-center px-3 bg-news-off-white laptop:h-36"
    >
      <div
        class="flex flex-row justify-between w-full h-24 mx-auto laptop:h-36 relative top-0 items-center px-3 laptop:w-[1110px] laptop:mt-12"
      >
        <!-- ICON -->
        <img
          src="@/assets/NewsHomepage/logo.svg"
          alt="logo icon"
          data-testid="logo-icon-test"
          class="laptop:ml-10"
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
              <li
                v-for="nav in navs"
                :key="nav"
                class="hover:font-bold hover:cursor-pointer hover:drop-shadow hover:shadow-news-dark-grayish-blue"
              >
                {{ nav }}
              </li>
            </ul>
            <div
              class="bg-black opacity-50 h-screen absolute left-0 top-0 w-1/3"
            ></div>
          </div>
        </div>

        <!-- DESKTOP MENU-->

        <ul
          class="hidden laptop:visible laptop:flex flex-row justify-around items-center text-[15px] p-4 laptop:h-36 space-x-10 capitalize text-news-dark-grayish-blue"
        >
          <li
            v-for="nav in navs"
            :key="nav"
            class="hover:cursor-pointer hover:text-news-soft-red"
          >
            {{ nav }}
          </li>
        </ul>
      </div>
    </div>

    <!-- BODY -->
    <!--- TOP -->
    <div
      class="flex flex-col laptop:flex-row justify-center items-center w-full mx-auto laptop:mt-20 xl:mt-12 laptop:w-[1100px] laptop:h-[450px] laptop:pb-10"
    >
      <!-- HERO IMAGE -->
      <div
        class="laptop:flex laptop:flex-col laptop:justify-center laptop:items-center laptop:space-x-10 laptop:mt-7"
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
            class="w-11/12 mx-auto laptop:w-[650px]"
          />
        </picture>

        <!-- HERO TEXT -->
        <div
          class="text-left w-11/12 space-y-5 mt-5 mx-auto laptop:flex laptop:justify-start laptop:items-center laptop:w-[650px] laptop:space-y-0 laptop:mx-auto laptop:mt-10"
        >
          <h1
            class="text-news-very-dark-blue font-extrabold text-5xl w-3/4 laptop:w-1/2 laptop:text-5xl"
            data-testid="hero-heading-test"
          >
            The Bright Future of Web 3.0?
          </h1>

          <div
            class="laptop:flex-col laptop:justify-center laptop:items-center laptop:w-1/2"
          >
            <p
              class="leading-5 text-sm text-news-dark-grayish-blue font-normal laptop:leading-6"
            >
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button
              class="mt-5 uppercase text-news-off-white font-bold text-sm bg-news-soft-red px-8 py-3 hover:cursor-pointer hover:bg-news-very-dark-blue laptop:text-[15px] laptop:tracking-widest"
            >
              read more
            </button>
          </div>
        </div>
      </div>
      <!-- DARK BLOG SECTION -->
      <div
        class="bg-news-very-dark-blue w-11/12 mx-auto text-left flex flex-col justify-center items-center mt-3 laptop:w-1/3 laptop:max-w-[350px] laptop:h-[450px] laptop:mx-0"
        data-testid="blog-section-test"
      >
        <div
          class="space-y-5 flex flex-col justify-center items-start w-11/12 laptop:w-10/12 m-auto text-left"
        >
          <h2
            class="text-news-soft-orange text-3xl font-black"
            data-testid="blog-section-heading"
          >
            New
          </h2>
          <h3 class="text-news-off-white" data-testid="blog-small-heading">
            Hydrogen VS Electric Cars
          </h3>
          <p class="small-paragraph" data-testid="blog-paragraph-test">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr />
          <h3 class="text-news-off-white" data-testid="blog-small-heading">
            The Downsides of AI Artistry
          </h3>
          <p class="small-paragraph" data-testid="blog-paragraph-test">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h3 class="text-news-off-white" data-testid="blog-small-heading">
            Is VC Funding Drying Up?
          </h3>
          <p class="small-paragraph" data-testid="blog-paragraph-test">
            Is Private funding by VC firms is down 50% YOY. We take a look at
            what that means.
          </p>
        </div>
      </div>
    </div>

    <!-- BOTTOM -->

    <div
      class="flex flex-col laptop:flex-row justify-start items-start mt-12 w-11/12 mx-auto laptop:w-[1000px] laptop:h-[119px] laptop:space-x-5"
    >
      <div
        v-for="blog in blogs"
        :key="blog"
        class="flex laptop:flex-row justify-start items-start mt-5 laptop:mt-3 laptop:w-[350px] space-x-3"
      >
        <img
          :src="blog.img"
          :alt="blog.alt"
          class="w-1/4 mobilel:w-[167px] laptop:w-[100px]"
          data-testid="bottom-image-test"
        />

        <div
          class="flex flex-col justify-start items-start text-left space-y-3 laptop:space-y-2"
        >
          <p
            class="text-news-grayish-blue text-4xl font-bold laptop:text-3xl"
            data-testid="number-test"
          >
            {{ blog.number }}
          </p>
          <p
            class="text-news-very-dark-blue text-xl hover:text-news-soft-red hover:cursor-pointer laptop:text-[17px] font-extrabold"
            data-testid="small-bottom-heading"
          >
            {{ blog.heading }}
          </p>
          <p
            class="text-news-dark-grayish-blue text-base laptop:text-[14px]"
            data-testid="small-bottom-paragraph"
          >
            {{ blog.paragraph }}
          </p>
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

h3 {
  @apply font-extrabold text-xl laptop:text-lg;
}
.small-paragraph {
  @apply text-news-grayish-blue text-sm  leading-5;
}
hr {
  @apply bg-news-dark-grayish-blue border border-solid border-news-grayish-blue w-full;
}
</style>
