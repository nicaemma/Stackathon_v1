import React, { useRef, useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function UpdateProfile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, editEmail, editPassword, editProfile } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
    }
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      try {
        await editEmail(emailRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    if (passwordRef.current.value) {
      try {
        await editPassword(passwordRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    if (nameRef.current.value !== currentUser.displayName) {
      try {
        await editProfile(nameRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    navigate("/dashboard");

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }
    // // console.log(currentUser);
    // // If we enter a NEW email and old/new password exists, set promises:
    // const promises = [];
    // setLoading(true);
    // setError("");
    // if (emailRef.current.value !== currentUser.email) {
    //   promises.push(editEmail(emailRef.current.value));
    // }
    // if (passwordRef.current.value) {
    //   promises.push(editPassword(passwordRef.current.value));
    // }

    // // As soon as all these promises finish:
    // Promise.all(promises)
    //   .then(() => {
    //     navigate("/dashboard");
    //   })
    //   .catch(() => {
    //     setError("Failed to edit account");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }
  return (
    <>
      <div className="SignUp-Login">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Edit Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      ref={nameRef}
                      defaultValue={currentUser.displayName}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      defaultValue={currentUser.email}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordRef}
                      placeholder="Leave blank to keep the same"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      placeholder="Leave blank to keep the same"
                    ></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Submit Updates
                  </Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/dashboard">Back to Profile</Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
