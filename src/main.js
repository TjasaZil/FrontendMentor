import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router.js";
import firebase from "firebase/compat/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const firebaseConfig = {
  apiKey: "AIzaSyA-0K4hsiMDDib9yqumeGBHxqSs-Natwl0",
  authDomain: "frontendmentor-cb0e5.firebaseapp.com",
  projectId: "frontendmentor-cb0e5",
  storageBucket: "frontendmentor-cb0e5.appspot.com",
  messagingSenderId: "465487330897",
  appId: "1:465487330897:web:cb59370bc69c508b3d0270",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
