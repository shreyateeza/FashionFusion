// import firebase from 'firebase';
import { initializeApp, firestore, auth } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyApW2Vvji4_3y4SXWxfJARhBkDrGoeHssQ",
    authDomain: "fashionfusion080125.firebaseapp.com",
    projectId: "fashionfusion080125",
    storageBucket: "fashionfusion080125.firebasestorage.app",
    messagingSenderId: "948859500271",
    appId: "1:948859500271:web:2e5b8bd343c68db2514d1a",
    measurementId: "G-VFT9Z9H97V"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyApW2Vvji4_3y4SXWxfJARhBkDrGoeHssQ",
//   authDomain: "fashionfusion080125.firebaseapp.com",
//   projectId: "fashionfusion080125",
//   storageBucket: "fashionfusion080125.firebasestorage.app",
//   messagingSenderId: "948859500271",
//   appId: "1:948859500271:web:2e5b8bd343c68db2514d1a",
//   measurementId: "G-VFT9Z9H97V"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);