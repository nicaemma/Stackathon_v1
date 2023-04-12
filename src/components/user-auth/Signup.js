import React, { useRef, useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp, editProfile } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      // await editProfile({ displayName: nameRef.current.value });
      navigate("/dashboard");
    } catch {
      setError("Failed to create user");
      setLoading(false);
    }
  }
  return (
    <>
      <div className="SignUp-Login">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh", opacity: "0.85" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {/* {currentUser.email} */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      ref={nameRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  Already have an account? <Link to="/login">Log In</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
