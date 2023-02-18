<template>
  <div
    class="font-['Space_Mono'] w-screen h-screen flex flex-col justify-start pt-10 tablet:pt-0 tablet:justify-center items-center"
  >
    <div
      class="border-2 border-solid border-red-500 mx-auto flex flex-col justify-center items-center w-[327px] tablet:w-[573px] laptop:w-[730px] space-y-5"
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
        <input
          type="text"
          placeholder="Search GitHub username..."
          class="w-full"
        />
        <button
          data-testid="search-btn-test"
          @click="searchUser"
          class="rounded-xl text-white bg-github-light-blue px-3 py-2"
        >
          Search
        </button>
      </div>
      <div
        class="border-4 border-pink-400 rounded-xl w-full p-4 flex flex-col justify-end items-end space-y-8"
      >
        <div class="w-full flex justify-between align-top space-x-6">
          <div
            class="w-11/12 border-red-600 border-2 mx-auto flex justify-between tablet:justify-start tablet:space-x-10 items-center"
          >
            <img
              :src="user.avatar_url"
              alt="image icon"
              class="rounded-full w-[70px] h-[70px] tablet:w-[117px] tablet:h-[117px]"
              data-testid="profile-img-test"
            />

            <div class="flex flex-col justify-center items-start text-left">
              <h2 data-testid="profile-name-test">
                {{ user.name || "Not available" }}
              </h2>
              <h3 data-testid="username-name-test">
                @{{ user.login || "Not available" }}
              </h3>
              <p data-testid="profile-date-test">
                Joined
                <span>
                  {{
                    user.created_at
                      ? new Date(user.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Not available"
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <p data-testid="profile-bio-test" class="mx-auto text-center">
          {{ user.bio || "Not available" }}
        </p>
        <div
          class="border-4 border-green-800 mx-auto w-11/12 max-w-[480px] laptop:mx-0 flex flex-col justify-center items-center"
        >
          <div
            class="border-4 border-white w-full flex justify-between items-center"
          >
            <div class="flex flex-col justify-center items-center">
              <h4 data-testid="info-headings-test">Repos</h4>
              <p data-testid="info-numbers-test">
                {{ user.public_repos || "Not available" }}
              </p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h4 data-testid="info-headings-test">Followers</h4>
              <p data-testid="info-numbers-test">
                {{ user.followers || "Not available" }}
              </p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h4 data-testid="info-headings-test">Following</h4>
              <p data-testid="info-numbers-test">
                {{ user.following || "Not available" }}
              </p>
            </div>
          </div>
          <div
            class="border-4 border-yellow-300 w-full flex flex-col tablet:flex-row tablet:flex-wrap items-start justify-center tablet:items-center"
            data-testid="social-media-test"
          >
            <div class="w-1/2 space-x-5 mt-5 flex justify-start items-center">
              <img
                src="@/assets/githubSearch/icon-location.svg"
                alt="tag"
                data-testid="social-icons-test"
              />

              <div>{{ user.location || "Not available" }}</div>
            </div>
            <div class="w-1/2 space-x-5 mt-5 flex justify-start items-center">
              <img
                src="@/assets/githubSearch/icon-twitter.svg"
                alt="twitter"
                data-testid="social-icons-test"
              />

              <div>{{ user.twitter_username || "Not available" }}</div>
            </div>
            <div class="w-1/2 space-x-5 mt-5 flex justify-start items-center">
              <img
                src="@/assets/githubSearch/icon-website.svg"
                alt="website"
                data-testid="social-icons-test"
              />

              <div>{{ user.blog || "Not available" }}</div>
            </div>
            <div class="w-1/2 space-x-5 mt-5 flex justify-start items-center">
              <img
                src="@/assets/githubSearch/icon-company.svg"
                alt="company"
                data-testid="social-icons-test"
              />

              <div>{{ user.company || "Not available" }}</div>
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
import axios from "axios";

export default {
  name: "GithubSearch",
  data() {
    return {
      datas: [
        { src: Tag, alt: "location", text: "text1" },
        { src: Twitter, alt: "twitter", text: "{{user.twitter_username}} " },
        { src: Website, alt: "website", text: "text3" },
        { src: Company, alt: "company", text: "text4" },
      ],
      user: [],
    };
  },

  methods: {
    searchUser() {
      axios
        .get(`https://api.github.com/users/zuzexx`)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    axios
      .get(`https://api.github.com/users/octocat`)
      .then((response) => {
        console.log(response.data);
        this.user = response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<style scoped></style>
