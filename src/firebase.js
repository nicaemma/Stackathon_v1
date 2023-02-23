import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// init firebase app
initializeApp({
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
const auth = getAuth();

// collection ref
const collectionRef = collection(db, "users");

// get collection data
getDocs(collectionRef).then((snapshot) => {
  console.log(snapshot.docs);
});

//signing users up
// will put this inside event listener?

createUserWithEmailAndPassword(auth);

/*
Old Firebase???
From the docs:
  firebase.auth() can be called with no arguments to access the 
  default app's Auth service or as firebase.auth(app) to access the 
  Auth service associated with a specific app.
*/
