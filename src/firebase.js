import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// init firebase app
const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
// using env variables here so that it's easy to switch between instances

// init services --> db connection
const db = getFirestore();
export const auth = getAuth(app);

// collection ref
const collectionRef = collection(db, "plants");

// get collection data
getDocs(collectionRef).then((snapshot) => {
  console.log(snapshot.docs);
});

/*
Old Firebase version!!
From the docs:
  firebase.auth() can be called with no arguments to access the 
  default app's Auth service or as firebase.auth(app) to access the 
  Auth service associated with a specific app.
*/
