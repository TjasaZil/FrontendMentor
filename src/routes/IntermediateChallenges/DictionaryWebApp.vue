<template>
  <div
    class="w-screen h-screen main bg-white text-black overflow-x-hidden main"
    :class="{
      dark: darkMode,
    }"
  >
    <!-- HEADER -->
    <header
      :class="chooseFont(fontStyle)"
      class="w-11/12 mx-auto flex flex-row justify-between items-center max-w-[736px]"
    >
      <img src="@/assets/DictionaryWebApp/images/logo.svg" alt="book icon" />
      <div class="flex flex-row justify-center items-center space-x-2">
        <!-- CHOOSING FONTS -->
        <input
          list="fonts"
          placeholder="Choose font"
          :class="{
            dark: darkMode,
            chooseFont,
          }"
          class="text-black border-2 border-red-500 w-24 input"
          v-model="fontStyle"
        />
        <datalist id="fonts">
          <option value="Sans Serif" />
          <option value="Serif" />
          <option value="Mono" />
        </datalist>
        <div class="h-full border-l-2 p-2">
          <!-- TOGGLE -->
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              @click="changeTheme"
            />
            <div
              :class="{
                dark: darkMode,
              }"
              class="w-11 h-6 bg-dictionary-dark-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle"
            ></div>
            <span class="ml-3 text-sm font-medium text-gray-900"
              ><img
                alt="moon icon"
                src="@/assets/DictionaryWebApp/images/icon-moon.svg"
            /></span>
          </label>
        </div>
      </div>
    </header>
    <!-- MAIN -->
    <div
      :class="chooseFont(fontStyle)"
      class="w-full flex flex-col text-left justify-center items-center"
    >
      <!-- SEARCH -->
      <div
        :class="{
          dark: darkMode,
        }"
        class="w-11/12 mx-auto flex flex-row justify-center items-center p-2 rounded-xl mt-5 max-w-[736px] bg-dictionary-middle-gray div-outer-search"
      >
        <input
          :class="{
            dark: darkMode,
          }"
          type="text"
          placeholder="Search the word"
          class="w-full text-dictionary-darkest py-1 px-2 bg-dictionary-middle-gray div-search dark:text-dictionary-white"
          v-model="searchedWord"
        /><button @click="searchWord">
          <img
            src="@/assets/DictionaryWebApp/images/icon-search.svg"
            alt="search-icon"
          />
        </button>
      </div>
      <!-- TEXT -->
      <section
        class="border-2 border-pink-500 w-11/12 mx-auto flex flex-col justify-center items-center text-left max-w-[736px]"
      >
        <!-- HEADING -->

        <div
          v-if="word.length > 0"
          class="w-full flex flex-row justify-between items-center text-black pt-5"
        >
          <div>
            <h1
              :class="{
                dark: darkMode,
              }"
              class="text-dictionary-darkest text-3xl font-semibold main-text"
            >
              {{ word[0].word }}
            </h1>
            <p class="text-dictionary-violet text-lg tracking-[-0.175rem]">
              {{ word[0].phonetics[0].text }}
            </p>
          </div>
          <button>
            <img
              alt="play icon"
              class="w-12 h-12"
              src="@/assets/DictionaryWebApp/images/icon-play.svg"
              @click="playAudio"
            />
          </button>
        </div>

        <!-- MEANINGS -->
        <div
          v-if="word.length"
          class="w-full flex flex-col justify-center items-start text-left text-black pt-10"
        >
          <div
            v-for="(meaning, index) in word[0].meanings"
            :key="index"
            class="space-y-3"
          >
            <div
              class="w-full flex flex-row justify-center items-start space-x-3 border border-red-500 pt-5"
            >
              <h2
                :class="{
                  dark: darkMode,
                }"
                class="text-dictionary-darkest font-semibold text-base part-o-speech"
              >
                {{ meaning.partOfSpeech }}
              </h2>
              <hr
                :class="{
                  dark: darkMode,
                }"
                class="border-b border-t-0 py-[0.3rem] border-dictionary-middle-gray w-full line"
              />
            </div>
            <ul class="border-2 border-green-400 text-black w-full space-y-3">
              <span
                :class="{
                  dark: darkMode,
                }"
                class="text-dictionary-dark-gray"
                >Meaning</span
              >
              <li
                v-for="(definition, index) in meaning.definitions"
                :key="index"
                class="w-full flex flex-col justify-start items-start text-left border border-amber-600"
              >
                <div
                  class="w-full flex flex-row justify-start items-start space-x-5"
                >
                  <div
                    class="bg-dictionary-violet w-1 h-2 px-1 rounded-full mt-1"
                  ></div>
                  <p
                    :class="{
                      dark: darkMode,
                    }"
                    class="font-light text-dictionary-middle-dark definition"
                  >
                    {{ definition.definition }}
                  </p>
                </div>

                <p
                  v-if="
                    definition.example !== undefined &&
                    definition.example !== ''
                  "
                  class="pt-2 text-dictionary-dark-gray pl-6"
                >
                  "{{ definition.example }}"
                </p>
                <p
                  v-if="
                    definition.synonyms !== undefined &&
                    definition.synonyms.length > 0
                  "
                >
                  <em class="text-dictionary-dark-gray">Synonyms:</em>
                  {{ definition.synonyms.join(", ") }}
                </p>
                <p
                  v-if="
                    definition.antonyms !== undefined &&
                    definition.antonyms.length > 0
                  "
                >
                  <em>Antonyms:</em> {{ definition.antonyms.join(", ") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <!-- FOOTER -->
    <footer
      :class="chooseFont(fontStyle)"
      class="w-11/12 mx-auto pt-4 flex flex-col text-left justify-start items-center max-w-[736px]"
    >
      <div
        v-if="word.length"
        class="w-full flex flex-col text-left justify-start items-start border-t-2 border-t-dictionary-middle-gray pt-5"
      >
        <p class="text-dictionary-dark-gray underline">Source</p>
        <a
          :href="word[0].sourceUrls[0]"
          target="_blank"
          class="w-full flex flex-row justify-start items-center space-x-2"
          ><p class="text-sm hover:underline">{{ word[0].sourceUrls[0] }}</p>
          <img
            alt="link"
            src="@/assets/DictionaryWebApp/images/icon-new-window.svg"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DictionaryWebApp",
  data() {
    return {
      searchedWord: "",
      darkMode: false,
      fontStyle: "",
      word: [],
    };
  },
  computed: {
    chooseFont() {
      const fontClasses = {
        "Sans Serif": "sans-serif",
        Serif: "serif",
        Mono: "mono",
      };
      return (fontStyle) => {
        return [fontClasses[fontStyle]];
      };
    },
  },
  methods: {
    searchWord() {
      axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${this.searchedWord}`
        )
        .then((response) => {
          console.log(response.data);
          this.word = response.data;
          console.log(JSON.parse(JSON.stringify(this.word)));
          console.log(JSON.parse(JSON.stringify(this.word.sourceUrls)));
        })
        .catch((error) => {
          console.log(error.message);
        });
      this.searchedWord = "";
    },
    playAudio() {
      const audio = new Audio(this.word[0].phonetics[0].audio);
      audio.play();
    },
    changeTheme() {
      this.darkMode = !this.darkMode;
      console.log(this.darkMode);
    },
  },
  mounted() {
    this.fontStyle = "Mono";
    this.searchedWord = "hello";
    this.searchWord();
    console.log(this.fontStyle);
  },
};
</script>

<style scoped>
.sans-serif {
  @apply font-sans;
}
.serif {
  @apply font-serif;
}
.mono {
  @apply font-mono;
}
.dark.input {
  @apply bg-dictionary-darkest text-dictionary-white;
}
.dark.toggle {
  @apply bg-dictionary-violet;
}
.dark.main {
  @apply bg-dictionary-darkest;
}
.dark.div-outer-search,
.dark.div-search {
  @apply bg-dictionary-middle-dark;
}
.dark.div-search {
  @apply text-dictionary-white placeholder:text-dictionary-dark-gray;
}
.dark.main-text,
.dark.part-o-speech {
  @apply text-dictionary-white;
}
.dark.line {
  @apply border-dictionary-light-dark;
}
.dark.definition {
  @apply text-dictionary-middle-gray;
}
</style>
