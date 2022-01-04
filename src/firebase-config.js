// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCyqhJRLw_lgn4RPuDfMn8XJI6pZqS_c9k",
	authDomain: "blogproject-3ef73.firebaseapp.com",
	projectId: "blogproject-3ef73",
	storageBucket: "blogproject-3ef73.appspot.com",
	messagingSenderId: "877837050248",
	appId: "1:877837050248:web:1a8aab10495ef4939b5a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();