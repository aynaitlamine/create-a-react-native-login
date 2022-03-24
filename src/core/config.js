import {  initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmtC0a2ypD7sCld8AaYNEIqg4LehgLZzU",
  authDomain: "react-native-login-c6ff7.firebaseapp.com",
  projectId: "react-native-login-c6ff7",
  storageBucket: "react-native-login-c6ff7.appspot.com",
  messagingSenderId: "491174504692",
  appId: "1:491174504692:web:8a6a1e6aede574a4a6d6a1"
};

export const ANDROID_GOOGLE_CLIENT_ID =
  '491174504692-2eo0jt5sm936315qlnghpv3b7hmdm8hb.apps.googleusercontent.com'
export const IOS_GOOGLE_CLIENT_ID =
  '491174504692-vkurh3d14l0gsa9g2st7ovssr0muc1cv.apps.googleusercontent.com'

export const app = initializeApp(firebaseConfig);