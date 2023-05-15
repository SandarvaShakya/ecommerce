import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCwU11drm9L5WLzmEGcUCoJe6vetqV-lg8",
    authDomain: "ecommerce-74eab.firebaseapp.com",
    projectId: "ecommerce-74eab",
    storageBucket: "ecommerce-74eab.appspot.com",
    messagingSenderId: "31105392022",
    appId: "1:31105392022:web:7bb4b2a7946acb390ad1b7"
  };

const app = initializeApp(firebaseConfig);
//Authorization for firebase, this is required for all the methods
export const firebaseAuth = getAuth()
export default app;
