<template>
  <div
    class="w-screen h-screen overflow-hidden flex flex-col justify-center items-center text-['JetBrains_Mono'] bg-password-black"
  >
    <div
      class="w-11/12 mx-auto flex flex-col justify-center items-center space-y-5 max-w-[540px]"
    >
      <h1 class="text-password-gray capitalize">password generator</h1>
      <!-- COPY PASSWORD -->
      <div
        class="flex flex-row justify-between items-center bg-password-dark w-full mx-auto p-3"
      >
        <input
          type="text"
          class="password p-2 bg-transparent placeholder:text-password-gray text-xl placeholder:text-xl text-password-grayish font-medium"
          placeholder="P4$5W0rD!"
          v-model="generatedPassword"
          readonly
        />
        <div class="flex flex-row justify-center items-center space-x-5">
          <p
            v-if="this.copied"
            class="uppercase text-lg font-semibold text-password-green"
          >
            Copied
          </p>
          <button @click="clipPassword()">
            <img
              src="@/assets/PasswordGenerator/images/icon-copy.svg"
              alt="copy the password"
            />
          </button>
        </div>
      </div>
      <!-- MAIN CONTAINER-->
      <div
        class="w-full space-y-5 mx-auto bg-password-dark flex flex-col justify-center items-center py-8"
      >
        <div class="w-11/12 mx-auto flex flex-col justify-center items-center">
          <div
            class="flex flex-row justify-between items-center w-full mx-auto p-3"
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
        <!-- CHECKBOXES -->
        <div
          class="w-full flex flex-col justify-start items-center text-password-grayish font-medium"
        >
          <div
            class="flex flex-row justify-start items-center space-x-4 w-11/12 mx-auto"
          >
            <label for="uppercase" class="capitalize container"
              >include uppercase letters
              <input
                type="checkbox"
                id="uppercase"
                v-model="isUppercase"
                class="checkbox"
                checked />
              <span class="checkmark"></span
            ></label>
          </div>

          <div
            class="flex flex-row justify-start items-center space-x-4 w-11/12 mx-auto"
          >
            <label for="lowercase" class="capitalize container"
              >include lowercase letters
              <input
                type="checkbox"
                id="lowercase"
                v-model="isLowercase"
                class="checkbox"
                checked />
              <span class="checkmark"></span
            ></label>
          </div>

          <div
            class="flex flex-row justify-start items-center space-x-4 w-11/12 mx-auto"
          >
            <label for="numbers" class="capitalize container"
              >include numbers
              <input
                type="checkbox"
                id="numbers"
                v-model="isNumbers"
                class="checkbox"
                checked />
              <span class="checkmark"></span
            ></label>
          </div>

          <div
            class="flex flex-row justify-start items-center space-x-4 w-11/12 mx-auto"
          >
            <label for="symbols" class="capitalize container"
              >include symbols
              <input
                type="checkbox"
                id="symbols"
                v-model="isSymbol"
                class="checkbox"
                checked />
              <span class="checkmark"></span
            ></label>
          </div>
        </div>
        <!-- STRENGTH -->
        <div
          class="bg-password-black w-11/12 p-3 mx-auto flex flex-row justify-between items-center"
        >
          <h2 class="uppercase text-password-gray text-lg font-semibold">
            strength
          </h2>
          <div class="flex flex-row justify-center items-center space-x-3">
            <h2 class="font-semibold uppercase text-password-grayish text-lg">
              {{ this.strengthValue }}
            </h2>
            <div class="flex flex-row justify-center items-center space-x-2">
              <div
                class="border-2 border-password-grayish h-7 w-3"
                :class="{
                  'too-weak': isTooWeak,
                  weak: isWeak,
                  medium: isMedium,
                  strong: isStrong,
                }"
              ></div>
              <div
                class="border-2 border-password-grayish h-7 w-3"
                :class="{
                  weak: isWeak,
                  medium: isMedium,
                  strong: isStrong,
                }"
              ></div>
              <div
                class="border-2 border-password-grayish h-7 w-3"
                :class="{
                  medium: isMedium,
                  strong: isStrong,
                }"
              ></div>
              <div
                class="border-2 border-password-grayish h-7 w-3"
                :class="{
                  strong: isStrong,
                }"
              ></div>
            </div>
          </div>
        </div>
        <!-- BUTTON-->
        <button
          class="w-11/12 bg-password-green text-password-dark py-3 text-lg font-medium mx-auto lg:py-4 hover:cursor-pointer hover:bg-transparent hover:border-2 hover:border-password-green hover:text-password-green"
          @click="generatePassword()"
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
        <p class="text-lg font-semibold underline text-password-red">
          {{ this.errorMessage }}
        </p>
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
      password: "",
      generatedPassword: "PTx1f5DaFX",
      isUppercase: false,
      isLowercase: true,
      isNumbers: false,
      isSymbol: false,
      errorMessage: "",
      strengthValue: "Medium",
      copied: false,
    };
  },
  computed: {
    isTooWeak() {
      return this.strengthValue === "Too weak";
    },
    isWeak() {
      return this.strengthValue === "Weak";
    },
    isMedium() {
      return this.strengthValue === "Medium";
    },
    isStrong() {
      return this.strengthValue === "Strong";
    },
  },
  methods: {
    generatePassword() {
      this.copied = false;
      this.getPassword();
      this.checked();
      this.checkPasswordStrength();
      this.generatedPassword = "";
      for (let i = 1; i <= this.lengthNumber; i++) {
        let k = Math.floor(Math.random() * this.password.length);
        this.generatedPassword += this.password[k];
      }
    },
    getPassword() {
      if (
        !this.isUppercase &&
        !this.isLowercase &&
        !this.isNumbers &&
        !this.isSymbol
      )
        this.errorMessage = "Please check at least one checkbox";
      if (this.lengthNumber == 0)
        this.errorMessage = "The Password length can not be 0";
    },
    checked() {
      this.password = "";
      if (this.isUppercase) this.password += "QWERTZUIOPASDFGHJKLYXCVBNM";
      if (this.isLowercase) this.password += "qwertzuiopasdfghjklyxcvbnm";
      if (this.isNumbers) this.password += "1234567890";
      if (this.isSymbol) this.password += "!#$%&/()=?*-_<>.;[]{}@";
    },
    checkPasswordStrength() {
      if (this.lengthNumber < 8 || !/[A-Z]/.test(this.password)) {
        this.strengthValue = "Too weak";
      } else if (this.lengthNumber < 11) {
        if (!/[a-z]/.test(this.password) || !/\d/.test(this.password)) {
          this.strengthValue = "Weak";
        } else {
          this.strengthValue = "Medium";
        }
      } else {
        if (
          !/[a-z]/.test(this.password) ||
          !/[A-Z]/.test(this.password) ||
          !/\d/.test(this.password) ||
          !/[^A-Za-z0-9]/.test(this.password)
        ) {
          this.strengthValue = "Medium";
        } else {
          this.strengthValue = "Strong";
        }
      }
    },
    clipPassword() {
      const textarea = document.createElement("textarea");
      textarea.value = this.generatedPassword;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.copied = true;
    },
  },
};
</script>

<style scoped>
.too-weak {
  @apply border-password-red bg-password-red;
}
.weak {
  @apply border-password-orange bg-password-orange;
}
.medium {
  @apply border-password-yellow bg-password-yellow;
}
.strong {
  @apply border-password-green bg-password-green;
}

/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  color: #e6e5ea;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 2px solid #e6e5ea;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #a4ffaf;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 2px;
  top: 2px;
  width: 11px;
  height: 11px;
  background-image: url("@/assets/PasswordGenerator/images/icon-check.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
