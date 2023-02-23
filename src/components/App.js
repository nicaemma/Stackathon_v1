import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";
// import Signup from "./Signup";
// import { Container } from "react-bootstrap";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // next two lines ensure that current user stays put when refresh the page
  // const [loggedInUser, setLoggedInUser] = useState({});

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setLoggedInUser(user);
  //   } else {
  //     setLoggedInUser(null);
  //   }
  // });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <h3>Sign In</h3>
        <input
          placeholder="Email"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />

        <button onClick={login}>Log In</button>
      </div>
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />

        <button onClick={register}>Create User</button>
      </div>
      {/* <div>
        {loggedInUser === null && <h4> Please Sign In</h4>}
        {loggedInUser && <h4> You Are Signed In As:{loggedInUser.email}</h4>}
      </div> */}

      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;

// RETURN STATEMENT FROM INITAL REACT WITH SIGNUP COMPONENT

// return (
//   <Container
//     className="d-flex align-items-center justify-content-center"
//     style={{ minHeight: "100vh" }}
//   >
//     <div className="w-100" style={{ maxWidth: "400px" }}>
//       <Signup />
//     </div>
//   </Container>
// );
