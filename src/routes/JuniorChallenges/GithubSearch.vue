<template>
  <div
    class="font-['Space_Mono'] w-screen h-screen flex flex-col justify-center items-center"
  >
    <div
      class="border-2 border-solid border-red-500 mx-auto flex flex-col justify-center items-center w-11/12 max-w-[730px] space-y-5"
    >
      <div
        class="w-full flex justify-between items-center border-2 border-green-500"
      >
        <h1 data-testid="main-heading-test">devfinder</h1>
        <div class="flex justify-end items-center space-x-3">
          <p data-testid="theme-text-test">theme</p>
          <button data-testid="theme-btn-test">
            <img
              alt="theme button image"
              src="../../assets/githubSearch/icon-sun.svg"
            />
          </button>
        </div>
      </div>
      <div
        class="border-2 border-white rounded-lg w-full flex justify-between p-2 items-center"
      >
        <img
          alt="search icon"
          src="../../assets/githubSearch/icon-search.svg"
        />
        <input type="text" placeholder="Search GitHub username..." />
        <button data-testid="search-btn-test">search-btn</button>
      </div>
      <div
        class="border-4 border-pink-400 rounded-xl w-full p-4 flex flex-col justify-end items-end space-y-8"
      >
        <div class="w-full flex justify-between align-top">
          <p data-testid="profile-img-test">profile image</p>
          <div class="flex flex-col justify-center items-start text-left">
            <h2 data-testid="profile-name-test">name</h2>
            <h3 data-testid="username-name-test">@username</h3>
            <p data-testid="profile-bio-test">Profile bio</p>
          </div>
          <p data-testid="profile-date-test">Joined <span>date</span></p>
        </div>
        <div
          class="border-4 border-green w-4/6 max-w-[480px] flex flex-col justify-center items-center"
        >
          <div
            class="border-4 border-white w-full flex justify-between items-center"
          >
            <div
              v-for="text in texts"
              :key="text"
              class="flex flex-col justify-center items-center"
            >
              <h4 data-testid="info-headings-test">{{ text.heading }}</h4>
              <p data-testid="info-numbers-test">{{ text.number }}</p>
            </div>
          </div>
          <div
            class="border-4 border-yellow-300 w-full flex flex-row flex-wrap justify-center items-center"
            data-testid="social-media-test"
          >
            <div
              v-for="data in datas"
              :key="data"
              class="w-1/2 space-x-5 mt-5 flex justify-start items-center"
            >
              <img
                :src="data.src"
                :alt="data.alt"
                data-testid="social-icons-test"
              />

              <div>{{ data.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "@/assets/githubSearch/icon-location.svg";
import Company from "@/assets/githubSearch/icon-company.svg";
import Twitter from "@/assets/githubSearch/icon-twitter.svg";
import Website from "@/assets/githubSearch/icon-website.svg";
//import axios from "axios";
export default {
  name: "GithubSearch",
  data() {
    return {
      texts: [
        { heading: "Repos", number: 1 },
        { heading: "Followers", number: 2 },
        { heading: "Following", number: 3 },
      ],
      datas: [
        { src: Tag, alt: "location", text: "text1" },
        { src: Twitter, alt: "twitter", text: "text4" },
        { src: Website, alt: "website", text: "text3" },
        { src: Company, alt: "company", text: "text4" },
      ],
    };
  },
};
</script>

<style scoped></style>
