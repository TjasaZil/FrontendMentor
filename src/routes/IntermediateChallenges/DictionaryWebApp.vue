<template>
  <div class="w-full h-screen">
    <div
      class="border-2 border-red-600 w-1/2 h-1/2 flex flex-col justify-center items-center mx-auto"
    >
      <div class="flex flex-row justify-between items-center w-5/6">
        <input
          type="text"
          placeholder="text"
          class="w-full text-black"
          v-model="searchedWord"
        /><button @click="searchWord" class="bg-green-800 px-4 py-3">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

import axios from "axios";
export default {
  name: "DictionaryWebApp",
  data() {
    return {
      searchedWord: "",
      word: [],
    };
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
        })
        .catch((error) => {
          console.log(error.message);
        });
      this.searchedWord = "";
    },
  },
  mounted() {
    this.searchedWord = "keyboard";
    this.searchWord();
  },
};
</script>

<style scoped></style>
