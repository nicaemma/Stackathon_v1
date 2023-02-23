// We want to be able to access our current user anywhere in our application
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
// ^^ use firebase to set currentUser with auth module

const AuthContext = React.createContext();

// useAuth hook to give us access to our AuthContext:
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider() {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const userInfo = {
    currentUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

/*
Firebase Context:
- For passing down props all the way down into all the children.
- Everything inside the Provider have everything in the value variable in the Provider
- A global state for all the children of the Provider.

- From the docs:
    Context is designed to share data that can be considered 
    “global” for a tree of React components, such as the current 
    authenticated user, theme, or preferred language. 

Auth Methods:
- Built into auth (authentication instance)
- createUserWithEmailAndPassword --> will use it in signup component.
- onAuthStateChanged --> allows us to set current user or set it to null.
    -- We don't want this to be inside of our render - 
    we only want to run this when we mount our component
        --> so put it in a useEffect

*/
