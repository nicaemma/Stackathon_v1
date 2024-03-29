// We want to be able to access our current user anywhere in our application
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await updateProfile(auth.currentUser, { displayName: name });
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logIn = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  };

  const logOut = async (email, password) => {
    const user = await signOut(auth, email, password);
    console.log(user);
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err.message);
    }
  };

  const editEmail = async (email) => {
    const user = await updateEmail(auth.currentUser, email);
    console.log(user);
  };

  const editPassword = async (password) => {
    const user = await updatePassword(auth.currentUser, password);
    console.log(user);
  };

  const editProfile = async (name) => {
    const user = await updateProfile(auth.currentUser, { displayName: name });
    console.log(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const userInfo = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    editEmail,
    editPassword,
    editProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

/*
Context:
- For passing down props all the way down into all the children.
- Everything inside the Provider have everything in the value variable in the Provider
- A global state for all the children of the Provider.

- From the docs:
    Context is designed to share data that can be considered 
    “global” for a tree of React components, such as the current 
    authenticated user, theme, or preferred language. 

Auth Methods: **OLD FIREBASE?
- Built into auth (authentication instance)
- createUserWithEmailAndPassword --> will use it in signup component.
- onAuthStateChanged --> allows us to set current user or set it to null.
    -- We don't want this to be inside of our render - 
    we only want to run this when we mount our component
        --> so put it in a useEffect

*/
