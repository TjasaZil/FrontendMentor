<template>
  <div
    class="font-['Inter'] w-screen h-screen overflow-hidden flex flex-col justify-start items-center"
  >
    <div
      class="border border-red-600 flex flex-row justify-center items-start space-x-4 p-4 w-full"
    >
      <div class="flex flex-col justify-start items-start text-xs max-w-2/3">
        <p>{{ this.randomQuote }}</p>
        <p>{{ this.quoteAuthor }}</p>
      </div>

      <button @click="selectRandomQuote()">
        <img
          src="@/assets/ClockApp/assets/desktop/icon-refresh.svg"
          alt="refresh button"
          class="w-5"
        />
      </button>
    </div>
    <div
      class="border border-green-400 w-full flex flex-col justify-start space-y-3 p-4 items-center"
    >
      <div
        class="border border-orange-400 w-full flex flex-row justify-start space-x-3 p-4 items-center"
      >
        <p>{{ this.timeString }}</p>
        <p>{{ this.timeAbbrev }}</p>
      </div>
      <div
        class="border border-pink-400 w-full flex flex-row justify-start space-x-3 p-4 items-center"
      >
        <p>in {{ this.city }}, {{ this.countryCode }}</p>
      </div>
      <div
        class="border border-blue-400 w-full flex flex-col justify-start space-y-3 p-4 items-center"
      >
        <div
          class="w-full border border-amber-500 flex flex-row justify-between items-center p-3"
        >
          <p>current timezone</p>
          <p>{{ this.timezone }}</p>
        </div>
        <div
          class="w-full border border-amber-500 flex flex-row justify-between items-center p-3"
        >
          <p>day of the year</p>
          <p>in {{ this.dayOfTheYear }}</p>
        </div>
        <div
          class="w-full border border-amber-500 flex flex-row justify-between items-center p-3"
        >
          <p>day of the week</p>
          <p>in {{ this.dayOfTheWeek }}</p>
        </div>
        <div
          class="w-full border border-amber-500 flex flex-row justify-between items-center p-3"
        >
          <p>week number</p>
          <p>in {{ this.weekNumber }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ClockApp",
  data() {
    return {
      randomQuote: "",
      quoteAuthor: "",
      time: "",
      timeString: "",
      IP: "",
      timeAbbrev: "",
      timezone: "",
      city: "",
      countryCode: "",
      dayOfTheYear: "",
      dayOfTheWeek: "",
      weekNumber: "",
    };
  },
  methods: {
    selectRandomQuote() {
      axios
        .get("https://api.quotable.io/random")
        .then((response) => {
          this.randomQuote = response.data.content;
          this.quoteAuthor = response.data.author;
        })
        .catch((error) => {
          this.randomQuote = error.message;
          this.quoteAuthor = "";
        });
    },
    getIP() {
      axios
        .get(
          `https://api.ipbase.com/v2/info?apikey=v0hcobrytyiA53POT0tvQkE0LPYfpkTXHrCgMkTj`
        )
        .then((response) => {
          this.IP = response.data.data.ip;
          this.city = response.data.data.location.city.name;
          this.countryCode = response.data.data.location.country.alpha2;
          console.log(this.city);
          console.log(this.countryCode);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    getTime() {
      axios
        .get(`http://worldtimeapi.org/api/ip/${this.IP}`)
        .then((response) => {
          this.dayOfTheWeek = response.data.day_of_week;
          this.dayOfTheWeek = response.data.day_of_year;
          this.weekNumber = response.data.week_number;
          this.timeAbbrev = response.data.abbreviation;
          this.time = response.data.datetime;
          this.timezone = response.data.timezone;
          const date = new Date(this.time);
          this.timeString = date.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          console.log(this.timeString);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            this.getTime();
          }, 1000); // delay for 1 seconds between API requests
        });
    },
  },
  mounted() {
    this.selectRandomQuote();
    this.getIP();
    this.getTime();
  },
};
</script>

<style scoped></style>
