import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Signup from "./Signup";
// import { Container } from "react-bootstrap";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword();
    } catch (err) {
      console.log(err.message);
    }
  };

  const login = async () => {};

  const logout = async () => {};

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

        <button>Sign In</button>
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

        <button>Create User</button>
      </div>
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
