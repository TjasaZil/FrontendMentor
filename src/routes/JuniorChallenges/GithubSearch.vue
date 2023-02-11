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
        <h1>heading</h1>
        <div class="flex justify-end items-center space-x-3">
          <p>theme</p>
          <button>btn</button>
        </div>
      </div>
      <div
        class="border-2 border-white rounded-lg w-full flex justify-between p-2 items-center"
      >
        <div>icon</div>
        <div>input</div>
        <button>search-btn</button>
      </div>
      <div
        class="border-4 border-pink-400 rounded-xl w-full p-4 flex flex-col justify-end items-end space-y-8"
      >
        <div class="w-full flex justify-between align-top">
          <p>profile image</p>
          <div class="flex flex-col justify-center items-start text-left">
            <h2>name</h2>
            <h3>@username</h3>
            <p>Profile bio</p>
          </div>
          <p>date when joined</p>
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
              <h4>{{ text.heading }}</h4>
              <p>{{ text.number }}</p>
            </div>
          </div>
          <div
            class="border-4 border-yellow-300 w-full flex flex-row flex-wrap justify-center items-center"
          >
            <div
              v-for="data in datas"
              :key="data"
              class="w-1/2 space-x-5 mt-5 flex justify-start items-center"
            >
              <div>
                {{ data.src }}
              </div>
              <div>{{ data.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubSearch",
  data() {
    return {
      texts: [
        { heading: "heading1", number: 1 },
        { heading: "heading2", number: 2 },
        { heading: "heading3", number: 3 },
      ],
      datas: [
        { src: "img1", text: "text1" },
        { src: "img2", text: "text4" },
        { src: "img3", text: "text3" },
        { src: "img4", text: "text4" },
      ],
    };
  },
};
</script>

<style scoped></style>
