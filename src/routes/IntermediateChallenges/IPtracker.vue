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
        <p v-if="countries.location.region">{{ countries.location.region }}</p>
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
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script>
import axios from "axios";
import leaflet from "leaflet";
//let map;
//let marker = leaflet.marker([51.5, -0.09]).addTo(map);
const mapboxToken =
  "pk.eyJ1IjoiZWZuaW5qYSIsImEiOiJja3QzaHdodW0wMGpuMm9wNzFkZmxqMWhxIn0.3VyMKEhaoPeVFYFD7vN1wg";
const openCageApiKey = "4a06189b544d4ac4b6cf081a10ebba4f";
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
            leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
            leaflet
              .tileLayer(
                `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
                {
                  maxZoom: 18,
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
    this.IP = "192.212.174.101";
    this.getData();
  },
};
</script>

<style scoped></style>
