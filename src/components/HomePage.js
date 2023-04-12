import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="Homepage">
      <h1>HomePage</h1>
      <div>
        <Button
          size="sm"
          variant="outline-dark"
          onClick={() => navigate("/signup")}
        >
          Sign In/Sign Up
        </Button>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "35vh", opacity: "0.8" }}
      >
        <Card>
          <Card.Body>
            <Card
              className="w-100 align-items-center justify-content-center"
              style={{
                maxWidth: "600px",
                opacity: "0.7",
                borderStyle: "solid",
                borderColor: "black",
              }}
            >
              <Card.Body>Welcome page </Card.Body>
              <Card.Body>General or Personalized based on Signin</Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default HomePage;
