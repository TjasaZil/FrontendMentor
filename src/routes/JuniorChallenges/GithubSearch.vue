<template>
  <div class="main" :class="{ light: lightMode }">
    <div
      class="mx-auto flex flex-col justify-center items-center w-[327px] tablet:w-[573px] laptop:w-[730px] space-y-5 laptop:space-y-9"
    >
      <div class="w-full flex justify-between items-center">
        <h1 class="main-heading" :class="{ light: lightMode }">devfinder</h1>
        <div class="flex justify-end items-center space-x-3">
          <p class="theme-text" :class="{ light: lightMode }">
            {{ lightMode ? "Dark" : "Light" }}
          </p>

          <button class="toggle" @click="changeTheme">
            <img
              :src="lightMode ? moon : sun"
              :alt="lightMode ? 'moon' : 'sun'"
            />
          </button>
        </div>
      </div>
      <div :class="{ light: lightMode }" class="input-container">
        <img
          alt="search icon"
          src="../../assets/githubSearch/icon-search.svg"
        />
        <input
          type="text"
          :class="{ light: lightMode }"
          placeholder="Search GitHub username..."
          class="input w-2/3 bg-github-dark-blue placeholder:text-github-dark-white px-2 placeholder:text-xs laptop:placeholder:text-base"
          v-model="githubUser"
        />
        <p class="text-xs text-red-600 font-semibold px-3 laptop:text-sm">
          {{ errorMessage }}
        </p>
        <button
          @click="searchUser"
          class="rounded-xl text-white font-semibold bg-github-light-blue px-3 py-2 laptop:px-5 laptop:py-3 hover:opacity-75"
        >
          Search
        </button>
      </div>
      <div :class="{ light: lightMode }" class="main-component">
        <div class="w-full flex justify-between align-top space-x-6">
          <div
            class="w-11/12 mx-auto flex flex-col justify-between space-y-5 tablet:justify-start items-center laptop:items-center laptop:justify-between laptop:space-x-0"
          >
            <div
              class="w-full mx-auto flex justify-between tablet:justify-start items-center laptop:items-start laptop:justify-between space-x-4 tablet:space-x-10 laptop:relative"
            >
              <img
                :src="user.avatar_url"
                alt="image icon"
                class="rounded-full w-[70px] h-[70px] tablet:w-[117px] tablet:h-[117px]"
              />
              <div
                class="w-full laptop:flex laptop:justify-between laptop:items-start"
              >
                <div class="flex flex-col justify-center items-start text-left">
                  <h2 class="user-name" :class="{ light: lightMode }">
                    {{ user.name || "Not available" }}
                  </h2>
                  <h3 class="text-github-light-blue text-sm">
                    @{{ user.login || "Not available" }}
                  </h3>
                </div>
                <p class="text-join" :class="{ light: lightMode }">
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
            <p
              class="mx-auto text-left laptop:max-w-[480px] text-sm w-full bio laptop:absolute laptop:pt-16 laptop:pl-14"
              :class="{ light: lightMode }"
            >
              {{ user.bio || "Not available" }}
            </p>
          </div>
        </div>

        <div
          class="mx-auto w-11/12 max-w-[480px] laptop:mx-0 flex flex-col justify-center items-center laptop:py-4"
        >
          <div
            :class="{ light: lightMode }"
            class="b w-full flex justify-evenly items-center bg-github-dark-black py-3 rounded-xl outer-comp laptop:justify-start laptop:text-left"
          >
            <div class="repo-comp">
              <h4 class="repo-text" :class="{ light: lightMode }">Repos</h4>
              <p class="repo-num" :class="{ light: lightMode }">
                {{ user.public_repos || "Not available" }}
              </p>
            </div>
            <div class="repo-comp">
              <h4 class="repo-text" :class="{ light: lightMode }">Followers</h4>
              <p class="repo-num" :class="{ light: lightMode }">
                {{ user.followers || "Not available" }}
              </p>
            </div>
            <div class="repo-comp">
              <h4 class="repo-text" :class="{ light: lightMode }">Following</h4>
              <p class="repo-num" :class="{ light: lightMode }">
                {{ user.following || "Not available" }}
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-col tablet:flex-row tablet:flex-wrap items-start justify-center tablet:items-center"
          >
            <div
              class="info"
              :class="{ na: user.location === null, light: lightMode }"
            >
              <img src="@/assets/githubSearch/icon-location.svg" alt="tag" />

              <div>{{ user.location || "Not available" }}</div>
            </div>
            <div
              class="info"
              :class="{ na: user.twitter_username === null, light: lightMode }"
            >
              <img src="@/assets/githubSearch/icon-twitter.svg" alt="twitter" />

              <div>{{ user.twitter_username || "Not available" }}</div>
            </div>
            <div
              class="info hover:cursor-pointer hover:underline"
              :class="{ na: user.blog === null, light: lightMode }"
            >
              <img src="@/assets/githubSearch/icon-website.svg" alt="website" />

              <div>{{ user.blog || "Not available" }}</div>
            </div>
            <div
              class="info"
              :class="{ na: user.company === null, light: lightMode }"
            >
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
      lightMode: false,
      githubUser: "",
      errorMessage: "",
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
          if (error.message === "Request failed with status code 404") {
            this.errorMessage = "No results";
          }
        });
      this.githubUser = "";
    },
    changeTheme() {
      this.lightMode = !this.lightMode;
    },
  },
  mounted() {
    this.githubUser = "octocat";
    this.searchUser();
  },
};
</script>

<style scoped>
.main {
  @apply font-['Space_Mono'] w-screen h-screen flex flex-col justify-start pt-10 tablet:pt-0 tablet:justify-center items-center  bg-github-dark-black;
}
.main.light {
  @apply bg-github-light-shell;
}
.main-heading {
  @apply text-2xl font-semibold text-github-dark-white laptop:text-3xl;
}
.light.main-heading,
.light.theme-text {
  @apply text-github-light-black;
}
.input-container {
  @apply rounded-lg w-full flex justify-between p-2 items-center bg-github-dark-blue laptop:py-3;
}
.light.input-container {
  @apply bg-github-light-white shadow-md shadow-github-light-gray;
}
.main-component {
  @apply rounded-xl w-full p-4 flex flex-col justify-end items-end space-y-8 bg-github-dark-blue laptop:py-6;
}
.light.main-component {
  @apply bg-github-light-white shadow-md shadow-github-light-gray;
}
.theme-text {
  @apply uppercase font-medium;
}

.light.input {
  background-color: #fefefe;
  color: #2b3442;
}
.light.input::placeholder {
  color: #697c9a;
}
.user-name {
  @apply text-lg font-bold laptop:text-2xl;
}
.light.user-name {
  @apply text-github-light-black;
}
.text-join {
  @apply text-sm;
}
.light.text-join,
.light.bio,
.light.repo-text {
  @apply text-github-light-gray;
}
.repo-comp {
  @apply flex flex-col justify-center items-center laptop:items-start laptop:px-7 laptop:py-2;
}
.light.outer-comp {
  @apply bg-github-light-shell;
}
.repo-text {
  @apply text-xs laptop:text-lg;
}
.repo-num {
  @apply font-extrabold text-base laptop:text-xl;
}
.light.repo-num {
  @apply text-github-light-black;
}
.info {
  @apply laptop:w-1/2 space-x-5 mt-5 flex justify-start items-center text-sm w-full;
}
.light.info {
  @apply text-github-light-bluish;
}
.na {
  color: #697c9a;
}
</style>
