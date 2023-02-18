<template>
  <div class="main" :class="{ dark: darkMode }">
    <div
      class="mx-auto flex flex-col justify-center items-center w-[327px] tablet:w-[573px] laptop:w-[730px] space-y-5"
    >
      <div class="w-full flex justify-between items-center">
        <h1 class="text-2xl font-semibold">devfinder</h1>
        <div class="flex justify-end items-center space-x-3">
          <p class="theme-text">
            {{ darkMode ? "Light" : "Dark" }}
          </p>

          <button class="toggle" @click="changeTheme">
            <img
              :src="darkMode ? sun : moon"
              :alt="darkMode ? 'sun' : 'moon'"
            />
          </button>
        </div>
      </div>
      <div
        class="rounded-lg w-full flex justify-between p-2 items-center bg-github-dark-blue"
      >
        <img
          alt="search icon"
          src="../../assets/githubSearch/icon-search.svg"
        />
        <input
          type="text"
          placeholder="Search GitHub username..."
          class="w-full bg-github-dark-blue placeholder:text-github-dark-white px-2 placeholder:text-xs"
          v-model="githubUser"
        />
        <button
          @click="searchUser"
          class="rounded-xl text-white font-semibold bg-github-light-blue px-3 py-2"
        >
          Search
        </button>
      </div>
      <div
        class="rounded-xl w-full p-4 flex flex-col justify-end items-end space-y-8 bg-github-dark-blue laptop:py-8"
      >
        <div class="w-full flex justify-between align-top space-x-6">
          <div
            class="w-11/12 mx-auto flex flex-col justify-between space-y-5 tablet:justify-start tablet:space-x-10 items-center laptop:items-center laptop:justify-between laptop:space-y-0"
          >
            <div
              class="w-full mx-auto flex flex-col justify-between tablet:justify-start items-center laptop:items-start laptop:justify-between space-y-6"
            >
              <div
                class="w-full flex flex-row justify-center items-center space-x-4 tablet:space-x-10"
              >
                <img
                  :src="user.avatar_url"
                  alt="image icon"
                  class="rounded-full w-[70px] h-[70px] tablet:w-[117px] tablet:h-[117px]"
                />
                <div
                  class="w-full laptop:flex laptop:justify-between laptop:items-start"
                >
                  <div
                    class="flex flex-col justify-center items-start text-left"
                  >
                    <h2 class="text-lg font-bold">
                      {{ user.name || "Not available" }}
                    </h2>
                    <h3 class="text-github-light-blue text-sm">
                      @{{ user.login || "Not available" }}
                    </h3>
                  </div>
                  <p class="text-sm">
                    Joined
                    <span>
                      {{
                        user.created_at
                          ? new Date(user.created_at).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "Not available"
                      }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <p class="mx-auto text-left laptop:max-w-[480px] text-sm w-full">
              {{ user.bio || "Not available" }}
            </p>
          </div>
        </div>

        <div
          class="mx-auto w-11/12 max-w-[480px] laptop:mx-0 flex flex-col justify-center items-center"
        >
          <div
            class="b w-full flex justify-evenly items-center bg-github-dark-black py-3 rounded-xl"
          >
            <div class="repo-comp">
              <h4 class="repo-text">Repos</h4>
              <p class="repo-num">
                {{ user.public_repos || "Not available" }}
              </p>
            </div>
            <div class="repo-comp">
              <h4 class="repo-text">Followers</h4>
              <p class="repo-num">
                {{ user.followers || "Not available" }}
              </p>
            </div>
            <div class="repo-comp">
              <h4 class="repo-text">Following</h4>
              <p class="repo-num">
                {{ user.following || "Not available" }}
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-col tablet:flex-row tablet:flex-wrap items-start justify-center tablet:items-center"
          >
            <div class="info" :class="{ na: user.location === null }">
              <img src="@/assets/githubSearch/icon-location.svg" alt="tag" />

              <div>{{ user.location || "Not available" }}</div>
            </div>
            <div class="info" :class="{ na: user.twitter_username === null }">
              <img src="@/assets/githubSearch/icon-twitter.svg" alt="twitter" />

              <div>{{ user.twitter_username || "Not available" }}</div>
            </div>
            <div class="info" :class="{ na: user.blog === null }">
              <img src="@/assets/githubSearch/icon-website.svg" alt="website" />

              <div>{{ user.blog || "Not available" }}</div>
            </div>
            <div class="info" :class="{ na: user.company === null }">
              <img src="@/assets/githubSearch/icon-company.svg" alt="company" />

              <div>{{ user.company || "Not available" }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sun from "../../assets/githubSearch/icon-sun.svg";
import moon from "../../assets/githubSearch/icon-moon.svg";
import axios from "axios";

export default {
  name: "GithubSearch",
  data() {
    return {
      sun,
      moon,
      darkMode: true,
      githubUser: "",

      user: [],
    };
  },

  methods: {
    searchUser() {
      axios
        .get(`https://api.github.com/users/${this.githubUser}`)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
      this.githubUser = "";
    },
    changeTheme() {
      this.darkMode = !this.darkMode;
    },
  },
  mounted() {
    this.githubUser = "zuzexx";
    this.searchUser();
  },
};
</script>

<style scoped>
.main {
  @apply font-['Space_Mono'] w-screen h-screen flex flex-col justify-start pt-10 tablet:pt-0 tablet:justify-center items-center bg-github-dark-black;
}
.theme-text {
  @apply uppercase font-medium;
}
.repo-comp {
  @apply flex flex-col justify-center items-center;
}
.repo-text {
  @apply text-xs;
}
.repo-num {
  @apply font-extrabold text-base;
}
.info {
  @apply laptop:w-1/2 space-x-5 mt-5 flex justify-start items-center text-sm w-full;
}
.na {
  color: #697c9a;
}
</style>
