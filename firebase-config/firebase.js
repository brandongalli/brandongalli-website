import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyCTnKY70l6Q7ay5sYol-IZs-VRbNvjsyxM",
  authDomain: "generate-mediaicon-thumbnails.firebaseapp.com",
  projectId: "generate-mediaicon-thumbnails",
  storageBucket: "generate-mediaicon-thumbnails.appspot.com",
  messagingSenderId: "51845607832",
  appId: "1:51845607832:web:65caeeccd013384911bbed",
  measurementId: "G-ZY9CDDKXEX"
};

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseConfig);
// export const firestore = getFirestore(app);
export const functions = getFunctions(app);
