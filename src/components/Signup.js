import React, { useRef } from "react";
import { Form } from "react-bootstrap";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <form>
        <h2 className="text-center mb-4">Sign Up</h2>
        <label>Email</label>
        <input type="email" ref={emailRef} required />
        <label>Password</label>
        <input type="password" ref={passwordRef} required />
        <label>Password Confirmation</label>
        <input type="password" ref={passwordConfirmRef} required />
      </form>

      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
