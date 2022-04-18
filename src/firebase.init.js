// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRU8U7Lxg6Nh10ahR4DjZgqZRf3nGm-dg",
    authDomain: "independent-service-prov-b9dd6.firebaseapp.com",
    projectId: "independent-service-prov-b9dd6",
    storageBucket: "independent-service-prov-b9dd6.appspot.com",
    messagingSenderId: "114206959388",
    appId: "1:114206959388:web:0d999d3750c35db19ffcd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;