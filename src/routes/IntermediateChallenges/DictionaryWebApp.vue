<template>
  <div
    class="w-screen h-screen main bg-white text-black overflow-x-hidden"
    :class="{
      dark: darkMode,
    }"
  >
    <!-- HEADER -->
    <header
      :class="chooseFont(fontStyle)"
      class="border-2 border-green-600 w-full flex flex-row justify-between items-center p-2"
    >
      <img src="@/assets/DictionaryWebApp/images/logo.svg" alt="book icon" />
      <div class="flex flex-row justify-center items-center space-x-2">
        <!-- CHOOSING FONTS -->
        <input
          list="fonts"
          placeholder="Choose font"
          class="text-black border-2 border-red-500 w-24"
          v-model="fontStyle"
          :class="chooseFont"
        />
        <datalist id="fonts">
          <option value="Sans Serif" />
          <option value="Serif" />
          <option value="Mono" />
        </datalist>
        <div class="h-full border-l-2 p-2">
          <!-- TOGGLE -->
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
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
        class="border-2 border-amber-500 w-11/12 mx-auto flex flex-row justify-center items-center p-2 rounded-xl mt-5"
      >
        <input
          type="text"
          placeholder="text"
          class="w-full text-black border-2 border-blue-600 py-1 px-2"
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
        class="border-2 border-pink-500 w-11/12 mx-auto flex flex-col justify-center items-center text-left"
      >
        <!-- HEADING -->

        <div
          v-if="word.length > 0"
          class="w-full flex flex-row justify-between items-center text-black pt-5"
        >
          <div>
            <h1>{{ word[0].word }}</h1>
            <p>{{ word[0].phonetics[0].text }}</p>
          </div>
          <button>
            <img
              alt="play icon"
              class="w-10 h-10"
              src="@/assets/DictionaryWebApp/images/icon-play.svg"
              @click="playAudio"
            />
          </button>
        </div>

        <!-- MEANINGS -->
        <div
          v-if="word.length"
          class="w-full flex flex-col justify-center items-start text-left text-black border-2 border-amber-500 pt-10"
        >
          <div
            v-for="(meaning, index) in word[0].meanings"
            :key="index"
            class="space-y-3"
          >
            <h2 class="pt-5">{{ meaning.partOfSpeech }}</h2>
            <ul class="border-2 border-green-400 text-black w-full">
              <li
                v-for="(definition, index) in meaning.definitions"
                :key="index"
              >
                <p>{{ definition.definition }}</p>
                <p
                  v-if="
                    definition.example !== undefined &&
                    definition.example !== ''
                  "
                >
                  {{ definition.example }}
                </p>
                <p
                  v-if="
                    definition.synonyms !== undefined &&
                    definition.synonyms.length > 0
                  "
                >
                  <em>Synonyms:</em> {{ definition.synonyms.join(", ") }}
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
      class="w-11/12 mx-auto pt-4 flex flex-col text-left justify-start items-center"
    >
      <div
        v-if="word.length"
        class="w-full flex flex-col text-left justify-start items-start border-t-2 border-t-green-600 pt-5"
      >
        <p class="">Source</p>
        <a
          :href="word[0].sourceUrls[0]"
          target="_blank"
          class="border-2 border-yellow-400 w-full flex flex-row justify-start items-center space-x-2"
          ><p class="text-sm underline">{{ word[0].sourceUrls[0] }}</p>
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
  },
  mounted() {
    this.fontStyle = "Mono";
    this.searchedWord = "keyboard";
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
</style>
