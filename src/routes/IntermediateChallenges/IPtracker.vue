<template>
  <div class="w-screen h-screen overflow-x-hidden font-['Rubik']">
    <div
      class="w-full mx-auto flex flex-col justify-center items-center border-2 border-green-600 py-5 px-2 background absolute top-0 z-10 h-80 laptop:h-72"
    >
      <h1
        class="text-white font-semibold text-2xl laptop:text-3xl laptop:-mt-5"
      >
        IP Address Tracker
      </h1>
      <div
        class="w-5/6 flex flex-row justify-center items-center max-w-[555px] my-5"
      >
        <input
          type="text"
          v-model="IP"
          aria-label="input"
          class="w-full h-full p-3 text-black rounded-l-lg py-3 laptop:p-4"
          placeholder="Search for any IP adress or domain"
        /><button
          class="bg-black p-4 rounded-r-lg h-full hover:bg-ip-dark-gray"
          @click="getData"
        >
          <img
            alt="search arrow"
            src="@/assets/IPtracker/images/icon-arrow.svg"
          />
        </button>
      </div>
      <p class="text-red-500 text-base font-semibold p-4">
        {{ errorMessage }}
      </p>
      <!-- DATA -->

      <div
        class="w-5/6 flex flex-col justify-center items-center p-3 bg-white rounded-xl space-y-5 absolute z-20 top-2/3 shadow-lg shadow-ip-dark-gray laptop:w-11/12 max-w-[1110px] laptop:flex-row laptop:justify-start text-left laptop:space-y-0 laptop:py-10 laptop:top-3/4"
      >
        <div class="data-container laptop:border-r border-r-ip-dark-gray">
          <h2 class="data-heading">ip adress</h2>
          <p class="data-text">{{ countries.ip }}</p>
        </div>
        <div
          v-if="countries.location?.region"
          class="data-container laptop:border-r border-r-ip-dark-gray"
        >
          <h2 class="data-heading">location</h2>
          <p class="data-text">
            {{ countries.location.region }},{{ countries.location.country }}
          </p>
        </div>
        <div
          v-if="countries.location"
          class="data-container laptop:border-r border-r-ip-dark-gray"
        >
          <h2 class="data-heading">timezone</h2>
          <p class="data-text">{{ countries.location.timezone }}</p>
        </div>
        <div class="data-container">
          <h2 class="data-heading">isp</h2>
          <p class="data-text">{{ countries.isp }}</p>
        </div>
      </div>
    </div>

    <!-- MAP -->
    <div
      id="map"
      class="w-full h-full mt-52 border-2 border-pink-400 relative z-0"
    ></div>
  </div>
</template>

<script>
import axios from "axios";
import leaflet from "leaflet";
import mark from "@/assets/IPtracker/images/icon-location.svg";
const mapboxToken =
  "pk.eyJ1IjoiZWZuaW5qYSIsImEiOiJja3QzaHdodW0wMGpuMm9wNzFkZmxqMWhxIn0.3VyMKEhaoPeVFYFD7vN1wg";
const openCageApiKey = "4a06189b544d4ac4b6cf081a10ebba4f";
let iconBlack = leaflet.icon({ iconUrl: mark, iconSize: [21, 28] });
export default {
  name: "IPtracker",
  data() {
    return {
      countries: [],
      IP: "",
      errorMessage: "",
      mark,
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
          this.makeMap();
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
    makeMap() {
      if (this.countries.location && this.countries.location.region) {
        axios
          .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${this.countries.location.region}&key=${openCageApiKey}`
          )
          .then((response) => {
            console.log(response.data);
            const { lat, lng } = response.data.results[0].geometry;
            this.latitude = lat;
            this.longitude = lng;

            //remove previous map and marker
            if (this.marker) {
              this.marker.remove();
            }
            if (this.map) {
              this.map.remove();
            }

            // check if map container exists before initializing
            const mapContainer = document.getElementById("map");
            if (!mapContainer) {
              console.log("Map container does not exist");
              return;
            }

            // create map
            this.map = leaflet
              .map("map")
              .setView([this.latitude, this.longitude], 13);
            leaflet
              .marker([this.latitude, this.longitude], { icon: iconBlack })
              .addTo(this.map);
            leaflet
              .tileLayer(
                `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
                {
                  maxZoom: 15,
                  attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                  id: "mapbox/streets-v11",
                  tileSize: 512,
                  zoomOffset: -1,
                  accessToken: `${mapboxToken}`,
                }
              )
              .addTo(this.map);
          })
          .catch((error) => {
            console.log(error);
            if (error.message == "Request failed with status code 422") {
              this.errorMessage = "Please enter valid IP";
            }
          })
          .finally(() => {
            // check if latitude and longitude values have been set
            if (!this.latitude || !this.longitude) {
              this.errorMessage = "Not enough data to get a map";
            }
          });
      }
    },
  },
  mounted() {
    this.IP = "223.57.154.168";
    this.getData();
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/IPtracker/images/pattern-bg-mobile.png");
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (min-width: 1000px) {
  .background {
    background-image: url("@/assets/IPtracker/images/pattern-bg-desktop.png");
  }
}
.data-heading {
  @apply uppercase text-ip-dark-gray font-semibold text-xs laptop:text-lg;
}
.data-text {
  @apply text-ip-very-dark-gray font-semibold text-lg laptop:text-2xl;
}
.data-container {
  @apply flex flex-col justify-center items-center  laptop:text-left laptop:justify-start laptop:w-1/4 laptop:px-8 laptop:h-full laptop:items-start laptop:py-3;
}
</style>
