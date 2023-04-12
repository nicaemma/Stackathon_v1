import React, { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  console.log("currentUser --> ", currentUser);
  return (
    <>
      <div className="Dashboard">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px", opacity: "0.85" }}>
            <Card>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <h2 className="text-center mb-4">Profile</h2>
                <div>
                  <strong>Name: </strong> {currentUser.displayName}
                </div>
                <div>
                  <strong>Email: </strong> {currentUser.email}
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Button
                variant="outline-primary"
                onClick={() => navigate("/update-profile")}
              >
                Update Profile
              </Button>{" "}
            </div>
            <div className="w-100 text-center mt-2">
              <Button variant="outline-dark" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
