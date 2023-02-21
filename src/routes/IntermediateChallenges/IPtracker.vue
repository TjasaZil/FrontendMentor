<template>
  <div class="w-screen h-screen font-['Rubik']">
    <div
      class="w-5/6 mx-auto flex flex-col justify-center items-center border-2 border-green-600 p-5"
    >
      <div
        class="border-2 border-blue-400 w-full flex flex-row justify-center items-center"
      >
        <input
          type="text"
          v-model="IP"
          aria-label="input"
          class="w-1/3 p-2 text-black"
          placeholder="Search for any IP adress or domain"
        /><button class="bg-black p-4" @click="getData">
          <img
            alt="search arrow"
            src="@/assets/IPtracker/images/icon-arrow.svg"
          />
        </button>
      </div>
      <p class="text-red-500 text-base font-semibold p-4">{{ errorMessage }}</p>
      <div
        class="flex flex-col justify-center items-center border-2 border-amber-600"
      >
        <h2>ip adress</h2>
        <p>{{ countries.ip }}</p>
      </div>
      <div
        v-if="countries.location"
        class="flex flex-col justify-center items-center border-2 border-amber-600"
      >
        <h2>location</h2>
        <p>{{ countries.location.country }}</p>
        <p>{{ countries.location.region }}</p>
      </div>
      <div
        v-if="countries.location"
        class="flex flex-col justify-center items-center border-2 border-amber-600"
      >
        <h2>timezone</h2>
        <p>{{ countries.location.timezone }}</p>
      </div>
      <div
        class="flex flex-col justify-center items-center border-2 border-amber-600"
      >
        <h2>isp</h2>
        <p>{{ countries.isp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IPtracker",
  data() {
    return {
      countries: [],
      IP: "",
      errorMessage: "",
    };
  },
  methods: {
    getData() {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_YNJ9bUHby0taQTYUiuh7V4hVBrvwT&ipAddress=${this.IP}`
        )
        .then((response) => {
          this.countries = response.data;
          console.log(response.data);
          console.log(this.countries);
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message == "Request failed with status code 422") {
            this.errorMessage = "Please enter valid IP";
          }
        });
      this.IP = "";
      this.errorMessage = "";
    },
  },
  mounted() {
    this.IP = "192.212.174.101";
    this.getData();
  },
};
</script>

<style scoped></style>
