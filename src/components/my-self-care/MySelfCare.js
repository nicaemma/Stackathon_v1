import React from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./MySelfCare.css";

const MySelfCare = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="MySelfCare">
        <Container
          className="d-flex justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px", opacity: "0.85" }}>
            <Card style={{ minHeight: "24vh" }}>
              <Card.Body>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-80"
                    variant="outline-dark"
                    onClick={() => navigate("/quiz")}
                  >
                    Coping Skills Quiz
                  </Button>
                </div>
                <div className="w-100 text-center mt-2">
                  <Button
                    className="w-80"
                    variant="outline-dark"
                    onClick={() => navigate("/my-coping-skills")}
                  >
                    My Custom Coping Skills
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MySelfCare;
