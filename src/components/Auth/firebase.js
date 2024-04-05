// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAnruMGhu_tukmrl1x-5_rcvqwh_fLewe8",
    authDomain: "aeonaxy-login-form.firebaseapp.com",
    projectId: "aeonaxy-login-form",
    storageBucket: "aeonaxy-login-form.appspot.com",
    messagingSenderId: "393827852025",
    appId: "1:393827852025:web:98dd1905dd32ab06ff0c28"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();