// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-inz-4e67d.firebaseapp.com",
  projectId: "x-next-inz-4e67d",
  storageBucket: "x-next-inz-4e67d.appspot.com",
  messagingSenderId: "209873650127",
  appId: "1:209873650127:web:dd0401ea8689816074d2ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);