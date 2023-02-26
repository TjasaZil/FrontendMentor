<template>
  <div
    class="w-screen h-screen overflow-hidden flex flex-col justify-center items-center text-['JetBrains_Mono'] bg-password-black"
  >
    <div
      class="border-2 border-pink-400 w-11/12 mx-auto flex flex-col justify-center items-center space-y-5"
    >
      <h1 class="text-password-gray capitalize">password generator</h1>
      <div
        class="flex flex-row justify-between items-center bg-password-dark w-full mx-auto p-3"
      >
        <input
          type="text"
          class="p-2 bg-transparent placeholder:text-password-grayish text-xl placeholder:text-xl text-password-grayish font-medium"
          placeholder="vukvfguzoldsgbfčiS"
          readonly
        /><button>
          <img
            src="@/assets/PasswordGenerator/images/icon-copy.svg"
            alt="copy the password"
          />
        </button>
      </div>
      <div
        class="w-full space-y-5 mx-auto border-2 border-amber-300 bg-password-dark flex flex-col justify-center items-center"
      >
        <div
          class="border-2 border-green-400 w-11/12 mx-auto flex flex-col justify-center items-center"
        >
          <div
            class="flex flex-row justify-between items-center border-2 border-blue-500 w-full mx-auto p-3"
          >
            <label for="range" class="capitalize">Character length</label>
            <p>{{ lengthNumber }}</p>
          </div>
          <input
            id="range"
            type="range"
            class="w-full p-3"
            v-model="lengthNumber"
            min="0"
            max="20"
          />
        </div>
        <div
          class="w-full flex flex-col justify-start items-center text-password-grayish font-medium"
        >
          <div
            class="flex flex-row justify-start items-center p-3 space-x-4 border-2 border-white w-11/12 mx-auto"
          >
            <input type="checkbox" id="uppercase" /><label
              for="uppercase"
              class="capitalize"
              >include uppercase letters</label
            >
          </div>
          <div
            class="flex flex-row justify-start items-center p-3 space-x-4 border-2 border-white w-11/12 mx-auto"
          >
            <input type="checkbox" id="lowercase" checked /><label
              for="lowercase"
              class="capitalize"
              >include lowercase letters</label
            >
          </div>
          <div
            class="flex flex-row justify-start items-center p-3 space-x-4 border-2 border-white w-11/12 mx-auto"
          >
            <input type="checkbox" id="numbers" /><label
              for="numbers"
              class="capitalize"
              >include numbers</label
            >
          </div>
          <div
            class="flex flex-row justify-start items-center p-3 space-x-4 border-2 border-white w-11/12 mx-auto"
          >
            <input type="checkbox" id="symbols" /><label
              for="symbols"
              class="capitalize"
              >include symbols</label
            >
          </div>
        </div>
        <div
          class="bg-password-black w-11/12 border-2 border-orange-300 p-3 mx-auto flex flex-row justify-between items-center"
        >
          <h2 class="uppercase text-password-gray text-lg font-semibold">
            strength
          </h2>
          <div class="flex flex-row justify-center items-center space-x-3">
            <h2 class="font-semibold uppercase text-password-grayish text-lg">
              medium
            </h2>
            <div class="flex flex-row justify-center items-center space-x-2">
              <div class="border-2 border-password-grayish h-7 w-3"></div>
              <div class="border-2 border-password-grayish h-7 w-3"></div>
              <div class="border-2 border-password-grayish h-7 w-3"></div>
              <div class="border-2 border-password-grayish h-7 w-3"></div>
            </div>
          </div>
        </div>
        <button
          class="w-11/12 bg-password-green text-password-dark py-3 text-lg font-medium mx-auto"
        >
          <div
            class="w-full mx-auto flex space-x-4 items-center justify-center"
          >
            <p class="uppercase">generate</p>
            <img
              alt="arrow"
              class="w-4"
              src="@/assets/PasswordGenerator/images/icon-arrow-right.svg"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordGenerator",
  data() {
    return {
      lengthNumber: 10,
      password: "qwertzuiopasdfghjklyxcvbnm",
    };
  },
};
</script>

<style scoped></style>
