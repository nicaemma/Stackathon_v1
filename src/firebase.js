import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// using env variables here so that it's easy to switch between instances
// like from development to production

// variable for authentication --> gives us our authentication instance
export const auth = app.auth();
export default app;

/*
From the docs:
  firebase.auth() can be called with no arguments to access the 
  default app's Auth service or as firebase.auth(app) to access the 
  Auth service associated with a specific app.
*/
