<template>
  <div class="w-screen overflow-x-hidden min-h-screen">
    <div class="w-full p-5 flex flex-row justify-between items-center">
      <input
        type="text"
        v-model="title"
        class="text-black border-b border-b-black bg-transparent"
      />
    </div>

    <div class="flex flex-row justify-start items-center w-full h-full">
      <textarea
        class="w-1/2 h-screen bg-white text-black"
        v-model="inputText"
      />
      <div
        class="w-1/2 h-screen bg-black text-white"
        v-html="parseMarkdown"
      ></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DOMPurify from "dompurify";
import { marked } from "marked";

export default {
  name: "MarkdownEditor",
  data() {
    return {
      inputText: "",
      title: "",
      text: [],
      parsed: "",
    };
  },
  computed: {
    parseMarkdown() {
      if (!this.inputText) {
        return "";
      }
      return DOMPurify.sanitize(marked.parse(this.inputText));
    },
  },
  methods: {
    textFunction() {
      axios
        .get(
          "https://frontendmentor-cb0e5-default-rtdb.europe-west1.firebasedatabase.app/markdownEditor.json"
        )
        .then((response) => {
          console.log(response.data);
          this.text = response.data;
          console.log(this.text);
          this.inputText = this.text[1].content;
          this.title = this.text[1].name;
          console.log(this.inputText);
          console.log(typeof DOMPurify.sanitize(marked.parse(this.inputText)));
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.textFunction();
  },
};
</script>

<style scoped></style>
