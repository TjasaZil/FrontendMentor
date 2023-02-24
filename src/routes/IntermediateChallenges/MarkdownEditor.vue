<template>
  <div class="w-screen overflow-x-hidden min-h-screen">
    {{ this.title }}
    <div class="flex flex-row justify-start items-center w-full h-full">
      <textarea
        class="w-1/2 h-screen bg-white text-black"
        v-model="inputText"
      /><textarea
        :value="inputText"
        class="w-1/2 h-screen bg-black text-white"
        readonly
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MarkdownEditor",
  data() {
    return {
      inputText: "",
      title: "",
      text: [],
    };
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
