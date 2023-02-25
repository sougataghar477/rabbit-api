// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM7AeE_9tnJBO4gaeSEIp6sLaBqi_SsSc",
  authDomain: "rabbitdb-9370d.firebaseapp.com",
  projectId: "rabbitdb-9370d",
  storageBucket: "rabbitdb-9370d.appspot.com",
  messagingSenderId: "671916686880",
  appId: "1:671916686880:web:05e44e81de50440c830645",
  measurementId: "G-Q46WH2R44K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);