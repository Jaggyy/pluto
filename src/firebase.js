import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBT6KJRp0vEqqfHvlpypaYc03k_zwy77RM",
    authDomain: "pluto-15f5d.firebaseapp.com",
    projectId: "pluto-15f5d",
    storageBucket: "pluto-15f5d.appspot.com",
    messagingSenderId: "814805308297",
    appId: "1:814805308297:web:718a7042d624c199408758",
    measurementId: "G-Q4S5HD5KJB"

};

const app = initializeApp(firebaseConfig);
const auth= getAuth()
const db = getFirestore();
const googleauth = new GoogleAuthProvider();
const facebookauth = new FacebookAuthProvider()
export {auth , googleauth , facebookauth , db}
