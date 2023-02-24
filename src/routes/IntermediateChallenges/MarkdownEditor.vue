<template>
  <div class="w-screen overflow-x-hidden min-h-screen">
    this is markdown MarkdownEditor
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MarkdownEditor",
  mounted() {
    axios
      .get(
        "https://frontendmentor-cb0e5-default-rtdb.europe-west1.firebasedatabase.app/markdownEditor.json"
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<style scoped></style>
