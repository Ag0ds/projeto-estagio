
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCr8PXZY6getK66QISFHbevcHUOt_n6haI",
  authDomain: "seubone-1178c.firebaseapp.com",
  projectId: "seubone-1178c",
  storageBucket: "seubone-1178c.firebasestorage.app",
  messagingSenderId: "1060753376668",
  appId: "1:1060753376668:web:0f7d42508414d6d838b459",
  measurementId: "G-NKD45K6H00"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);