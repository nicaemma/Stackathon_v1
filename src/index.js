// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/App";
// import "bootstrap/dist/css/bootstrap.min.css";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(<App />);

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

// collection ref
const collectionRef = collection(db, "users");

// get collection data
getDocs(collectionRef).then((snapshot) => {
  console.log(snapshot.docs);
});
